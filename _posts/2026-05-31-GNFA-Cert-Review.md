---
title: "SANS FOR572 & GNFA Certification Review"
date: 2026-05-31 00:00:00 +0000
categories:
  - Reviews
tags:
  - SANS
  - GIAC
  - FOR572
  - GNFA
  - certification
  - review
  - DFIR
  - threat hunting
  - network forensics
  - blue team
description: "AppleTree's detailed review of SANS FOR572 and the GIAC Network Forensic Analyst certification."
show_image_post: true
image: /assets/img/infocards/sans-for572-gnfa-review.png
---

# SANS FOR572 & GNFA Certification Review

## Overview

SANS FOR572: Advanced Network Forensics: Threat Hunting, Analysis, and Incident Response is a specialized DFIR course focused on network-centric investigations, threat hunting, and incident response. The associated certification, the GIAC Network Forensic Analyst (GNFA), validates many of the skills taught throughout the course.

I attended FOR572 and completed GNFA in 2024. Looking back, the biggest thing I took away from the experience was not a specific tool, protocol, or packet analysis technique. It was the realization that retaining knowledge is a skill in itself.

I've never been particularly good at taking notes. Prior to FOR572, I often relied on memory and repeated exposure to retain information. That approach worked reasonably well until I encountered a course that moved at the pace FOR572 does. Every day introduced new tools, protocols, investigative workflows, and analytical techniques. By the end of the week, I had learned a tremendous amount, but I also realized that much of that knowledge would eventually fade if I didn't actively maintain it.

In many ways, FOR572 helped push me toward the documentation habits I still use today. The notes I maintain through this blog and my Fruits of Learning field-guide style documentation largely exist because of experiences like this course. Cybersecurity is simply too broad for most professionals to retain every command, workflow, protocol nuance, and investigative technique indefinitely. Building a system that allows me to revisit information months or years later has proven just as valuable as the technical knowledge itself.

That lesson ended up being every bit as important as the network forensics content.

From a technical perspective, FOR572 fills a niche that many security courses barely touch. Modern defensive training often revolves around EDR platforms, SIEM tooling, endpoint telemetry, and cloud visibility. FOR572 instead focuses on what can be learned from the network itself. Packet captures, flow records, protocol behavior, DNS activity, proxy logs, and other network artifacts become the foundation for reconstructing attacker activity and supporting investigations.

Snapshot: This review reflects my experience with FOR572 and GNFA as I completed them in 2024. SANS and GIAC periodically update course content and certification objectives.

## Course Overview

FOR572 is an advanced-level SANS course currently offered through in-person, virtual, and self-paced delivery formats. The course is currently listed as six instructor-led days or 36 hours in the self-paced format and includes extensive hands-on lab work throughout the week.

The course was authored by Phil Hagen and is part of the SANS Digital Forensics and Incident Response curriculum. It is designed for incident responders, threat hunters, forensic analysts, SOC personnel, network defenders, and other security professionals responsible for investigating malicious activity.

The course is divided into six major sections:

### Off the Disk and Onto the Wire

Introduces network forensic investigations through packet captures, web traffic, proxy logs, tcpdump, and Wireshark. Students begin learning how network evidence can be used to reconstruct attacker activity.

### Core Protocols and Log Aggregation/Analysis

Focuses on common protocols, network security monitoring concepts, logging, DNS analysis, HTTP analysis, and centralized log investigation techniques.

### NetFlow and File Access Protocols

Explores flow-based investigations through NetFlow while also covering protocols commonly encountered during enterprise investigations, including SMB and FTP.

### Commercial Tools, Wireless, and Full-Packet Hunting

Introduces additional investigative platforms and workflows including large-scale packet analysis, wireless investigations, object extraction, and full-packet hunting methodologies.

### Encryption, Protocol Reversing, OPSEC, and Intel

Focuses on encrypted communications, SSL/TLS analysis, protocol reverse engineering, threat intelligence integration, and operational security considerations.

### Network Forensics Capstone Challenge

Concludes with a practical investigation that requires students to combine multiple techniques learned throughout the course to identify, analyze, and document attacker activity.

The biggest challenge with FOR572 is not the technical difficulty of any individual topic. It is the volume of material covered. The course introduces a large number of tools, investigative approaches, and evidence sources in a relatively short amount of time. Students who arrive expecting to memorize everything will likely be disappointed. Students who focus on understanding investigative methodology and maintaining good notes will likely get significantly more value from the experience.

## Exam Overview

The GIAC Network Forensic Analyst (GNFA) certification validates an individual's ability to perform advanced network forensic investigations using packet captures, logs, network metadata, protocol analysis, and flow records.

At the time of writing, the certification consists of:

- 66 questions
- 3-hour time limit
- 70% passing score
- One proctored exam
- CyberLive practical components

The certification objectives include:

- Common network protocols
- Encryption and encoding
- NetFlow analysis
- Network architecture
- Protocol reverse engineering
- Security event and incident logging
- Open-source network security proxies
- Wireless network analysis

Like other GIAC certifications, GNFA is an open-book exam. However, "open book" should not be confused with "easy." Success depends heavily on preparation, organization, indexing, and familiarity with the material.

I completed GNFA in person, which remains my preferred testing format for GIAC certifications. One thing that stood out to me was how important the practical portions of the course were to exam preparation. Students who focus exclusively on reading the books are likely doing themselves a disservice. The labs help reinforce how investigations actually work, and that practical understanding becomes far more useful than memorizing isolated facts.

## Study Recommendations

If I were preparing for FOR572 and GNFA again, I would approach the course differently than I did the first time.

The biggest mistake I think students can make is trying to memorize every tool covered throughout the week. FOR572 introduces a large number of utilities, workflows, protocols, and investigative techniques. Attempting to retain every command or feature is both frustrating and unnecessary.

Instead, focus on investigative methodology.

Ask yourself:

- What problem is this tool solving?
- What evidence source am I analyzing?
- What questions can this data answer?
- How does this evidence contribute to the overall investigation?

The tools will change over time. The investigative process remains valuable.

I would also strongly encourage students to take detailed notes throughout the course. More importantly, organize those notes in a way that will still make sense months later. One of the most valuable lessons I learned from FOR572 was that if you do not regularly use a skill, portions of it will eventually fade. Having a personal knowledge base makes revisiting those concepts dramatically easier.

The labs are equally important. Reading the books is useful, but GNFA rewards students who understand how investigations work rather than students who simply know where a term appears in the index. Additional time spent revisiting the labs often provides more value than additional time spent rereading course material.

For GNFA specifically, build your index as you progress through the course. Waiting until the end creates unnecessary work and makes it harder to connect concepts while they are still fresh.

## Strengths

- Strong focus on network-centric investigations and evidence sources that are often overlooked in modern security training.
- Demonstrates how much information can be recovered from packet captures, flow records, logs, and protocol analysis alone.
- Exposes students to a wide range of investigative tools and workflows that many practitioners may not encounter in their daily responsibilities.
- Reinforces investigative methodology rather than teaching students to blindly operate individual tools.
- Hands-on labs help connect technical concepts to realistic investigative scenarios.
- Encourages analysts to think critically about how different evidence sources support an investigation.
- One of the few courses that significantly changed how I approached note-taking, documentation, and long-term knowledge retention.
- Material remains broadly applicable regardless of vendor ecosystem or security platform.

## Limitations

- The pace can make it difficult to retain material without detailed notes and follow-up practice.
- Students who do not revisit the labs after class will likely forget portions of the content over time.
- The course introduces a large number of tools, protocols, and workflows in a relatively short period of time.
- Some tools receive enough coverage to understand their purpose, but not enough repetition to build long-term proficiency during the course itself.
- Students without a strong networking foundation may struggle to keep pace with the material.
- The overall cost remains difficult to justify for many self-funded students.
- Success on GNFA still requires substantial preparation and a well-organized index despite the open-book format.

## Comparable Courses and Certifications

### Network Traffic Analysis & Detection

#### SEC503 & GCIA (SANS)

GCIA is often considered the closest SANS alternative to GNFA. While FOR572 focuses on network forensics and reconstructing attacker activity from network evidence, SEC503 and GCIA focus more heavily on intrusion detection, packet analysis, IDS technologies, and network monitoring.

### Broader Incident Response & Threat Hunting

#### FOR508 & GCFA (SANS)

FOR508 focuses more heavily on endpoint investigations, Windows artifacts, enterprise incident response, and threat hunting. The two courses complement each other well.

If FOR508 teaches you how to investigate a compromised endpoint, FOR572 teaches you how to investigate what happened across the network.

#### FOR608 & GEIR (SANS)

FOR608 expands into enterprise-scale incident response and advanced threat hunting methodologies with a broader organizational focus.

### Cloud Incident Response

#### FOR509 & GCFR (SANS)

FOR509 focuses on cloud investigations and incident response across platforms such as AWS, Azure, and Microsoft 365.

### Vendor-Neutral Alternatives

#### Blue Team Level 1 (BTL1)

Provides practical defensive security training at a significantly lower cost than SANS while covering many foundational investigation concepts.

#### Blue Team Level 2 (BTL2)

Builds upon BTL1 with more advanced detection engineering, investigations, and incident response content.

#### CyberDefenders & Blue Team Labs Online

Hands-on training platforms that provide practical packet analysis, threat hunting, log analysis, and investigation exercises.

## Comparison Table

| Course / Certification | Provider | Difficulty | Cost | Best For |
|---|---|---|---|---|
| FOR572 / GNFA | SANS / GIAC | Advanced | ~$8,800 + exam | Network forensics, packet analysis, and threat hunting |
| SEC503 / GCIA | SANS / GIAC | Advanced | ~$8,800 + exam | Intrusion detection and network monitoring |
| FOR508 / GCFA | SANS / GIAC | Advanced | ~$8,800 + exam | Enterprise DFIR and endpoint investigations |
| FOR608 / GEIR | SANS / GIAC | Advanced | ~$8,800 + exam | Enterprise threat hunting and incident response leadership |
| FOR509 / GCFR | SANS / GIAC | Advanced | ~$8,800 + exam | Cloud forensics and cloud incident response |
| BTL1 | Security Blue Team | Intermediate | ~$500 | Defensive security fundamentals |
| BTL2 | Security Blue Team | Advanced | ~$700 | Advanced blue-team operations |

## Final Ratings

| Category | Rating |
|---|---|
| Knowledge Depth | ★★★★★★★★★☆ (9 / 10) |
| Real-World Applicability | ★★★★★★★★★☆ (9 / 10) |
| Value for Cost | ★★★★★★☆☆☆☆ (6 / 10) |
| Study Requirements | ★★★★★★★★★☆ (9 / 10) |
| Industry Relevance & Accessibility | ★★★★★★★☆☆☆ (7 / 10) |

Overall Score: 8.4 / 10

- Knowledge Depth: Covers a broad range of network forensic concepts, investigative methodologies, and evidence sources.
- Real-World Applicability: Directly applicable to threat hunting, DFIR, incident response, and network investigations.
- Value for Cost: Excellent content, but the price remains difficult to justify without employer sponsorship.
- Study Requirements: Students should expect extensive note-taking, indexing, and post-course review.
- Industry Relevance & Accessibility: Highly relevant within DFIR and threat hunting communities, though more specialized than broader industry certifications.

## Final Thoughts

FOR572 is one of the few courses I find myself appreciating more as time passes.

While I enjoyed the class itself, the lessons that stayed with me were not limited to packet captures, NetFlow analysis, or protocol investigations. The course reinforced a broader realization: cybersecurity professionals are constantly learning faster than they can realistically retain information. At some point, success becomes less about memorizing technical details and more about developing systems that allow you to efficiently relearn and reference information when you need it.

FOR572 exposed me to a large number of tools and investigative workflows in a very short period of time. I found that exposure valuable, but I also learned that exposure alone does not create mastery. Without continued practice, some of those skills inevitably fade. That is one of the reasons I maintain my blog and my Fruits of Learning field-guide style notes today. They provide a way to revisit concepts, techniques, and workflows that I may not use regularly but still want access to later.

From a technical perspective, the course does an excellent job demonstrating the value of network evidence. Modern security operations often revolve around endpoint telemetry, EDR alerts, and SIEM dashboards. FOR572 serves as a reminder that the network itself remains one of the richest sources of evidence available during an investigation. Understanding how to reconstruct activity from packet captures, flow records, protocol behavior, and network metadata continues to be a valuable skill.

Overall, I would recommend FOR572 and GNFA to incident responders, threat hunters, SOC analysts, and DFIR practitioners who already possess a solid networking foundation. The course is demanding, expensive, and information-dense, but it covers material that remains highly relevant to real-world investigations. For the right audience, the specialization is exactly what makes it valuable.

> Note: AI-assisted editing was used to improve grammar, clarity, and formatting. All technical content and opinions are original.
