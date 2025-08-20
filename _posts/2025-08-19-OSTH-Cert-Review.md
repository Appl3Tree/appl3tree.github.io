---
title: "OffSec TH-200 & OSTH Certification Review"
date: 2025-08-19 00:00:00 +0000
categories:
  - Reviews
tags:
  - OffSec
  - OSTH
  - TH-200
  - certification
  - review
  - threat-hunting
  - blue team
  - defensive security
  - SIEM
  - Splunk
  - CrowdStrike
  - ransomware
  - APT
description: "AppleTree's detailed review of OffSec's Threat Hunting course (TH-200) and OSTH certification exam."
show_image_post: true
image: /assets/img/infocards/offsec-th200-osth-review.png
---

# OffSec TH-200 & OSTH Certification Review

## Overview

Offensive Security (OffSec) has built its reputation on rigorous, hands-on certifications in offensive security. With TH-200: Foundational Threat Hunting, OffSec expands further into the defensive side of the spectrum, offering the OffSec Threat Hunter (OSTH) certification.

The course and exam aim to provide a focused, practical approach to threat hunting and reporting — a niche often underserved at accessible price points. While limited in scope compared to broader defensive training like SOC-200/OSDA or BTL1, TH-200 offers one of the very few hands-on certifications in this space below the cost of enterprise-grade training such as SANS.

As a standalone purchase, the value proposition is debatable, especially given its relatively short runtime (~41 hours vs ~374 hours for SOC-200). However, within OffSec’s Learn One or Learn Unlimited bundles, TH-200 becomes a compelling specialization that complements broader defensive or offensive training paths.

The defensive certification market remains small compared to offensive certifications. In this context, OSTH stands out as one of the only affordable, practical hunting certifications available, particularly for learners already within OffSec’s ecosystem.

> *Note: This review is based on the course and exam as they were in September/October 2024. The content may have changed since the time of writing.*

---

## Course Overview

* **Certifying Body:** Offensive Security (OffSec)  
* **Course Name:** TH-200: Foundational Threat Hunting  
* **Length:** ~41 hours of guided content + hands-on labs  
* **Delivery:** Online, self-paced through OffSec’s learning platform  
* **Lab Environment:** Tooling representative of modern SIEMs and endpoint platforms  

### Modules (as of Sept/Oct 2024 when I took the course)

1. **Threat Hunting Concepts and Practices** — Introduces foundational methodologies, mindsets, and workflows for proactive hunting.  
2. **Threat Actor Landscape Overview** — Explores well-known adversaries, tactics, and how to map them to ATT&CK.  
3. **Communication and Reporting for Threat Hunters** — Emphasizes clear documentation, stakeholder communication, and reporting discipline.  
4. **Hunting With Network Data** — Focuses on telemetry from network traffic, logs, and SIEM correlation.  
5. **Hunting on Endpoints** — Investigates system activity, processes, and anomalies from endpoint telemetry.  
6. **Threat Hunting Without IoCs** — Covers hypothesis-driven hunting in absence of indicators, stressing creativity and analytical rigor.  
7. **Threat Hunting Challenge Labs** — Practical scenario that ties together course concepts in a hands-on environment.  

> *Update: OffSec has since added a new module — **Threat Hunting in Azure** — extending the scope of the course into cloud hunting. This was not present when I originally took the course.*

---

## Exam Overview

* **Certification Name:** Offensive Security Threat Hunter (OSTH)  
* **Length:** 32 hours total — **8 hours** active hunting + **24 hours** report writing  
* **Passing Score:** At least **50 out of 70** points  
* **Format:** Remote proctoring with **VPN or in-browser (KiB/WiB)** access via the OffSec portal  
* **Structure:** Investigate simulated hunting scenarios, collect evidence, and produce a structured report with timelines, queries, and screenshots. The reporting requirement mirrors real SOC workflows.  

> *Note: Vendor specificity is intentionally omitted here to avoid any potential exam compromise.*

---

## Strengths

* One of the very few threat-hunting certifications available at this price point, filling a real gap.  
* Hands-on practice with commonly deployed enterprise tools.  
* Emphasis on reporting discipline (timelines, queries, screenshots) mirrors real SOC expectations.  
* Proctored, time-boxed format better represents an actual hunting sprint than multiple-choice exams.  
* Fits naturally in OffSec’s Learn ecosystem for candidates already using OffSec training.  

---

## Limitations

* Course is much shorter than OffSec’s broader defensive track: roughly **~41 hours vs ~374 hours** for SOC-200/OSDA.  
* Course delivery is vendor-heavy, which limits vendor neutrality and portability to other stacks.  
* Narrow scope: focused on hunting over broader blue-team operations (which SOC-200/OSDA covers).  
* As a standalone purchase, value is debatable; **bundles** (Learn One / Learn Unlimited) improve the proposition.  

---

## Comparable Courses and Certifications

### Broader Defensive Training (Courses and Certifications)

* **SOC-200 / OSDA (OffSec Defense Analyst):** OffSec’s broader blue-team program (~374 hours). Covers detection engineering, SIEM, threat intel, and IR beyond just hunting.  
* **BTL1 (Blue Team Level 1):** Vendor-neutral introduction to blue-team practices; wider SOC/DFIR coverage, less hunting-specific.  

### Splunk Training

* **Splunk Core Power User (exam)** + free Splunk training content: certification exam validates SIEM usage; training materials widely available from Splunk.  

### SANS Training and Certifications

* **SANS SEC503 / GCIA:** Intrusion Detection In-Depth (network focus).  
* **SANS SEC511 / GMON:** Continuous Monitoring & Security Operations (SOC monitoring and hunting).  

---

## Comparison Table

| Course / Certification       | Provider           |  Cost (Course + Exam) | Notes                                                                                                 |
| ---------------------------- | ------------------ | --------------------: | ----------------------------------------------------------------------------------------------------- |
| **TH-200 / OSTH**            | OffSec             |           **$1,749**  | 90-day Course + Exam bundle. Also in Learn One (**$2,749/yr**) and Learn Unlimited (**$6,099/yr**). |
| **SOC-200 / OSDA**           | OffSec             |           **$1,749**  | Same model as TH-200; substantially longer curriculum.                                                |
| **BTL1 (Blue Team Level 1)** | Security Blue Team |          **£399 GBP** | Includes course + exam.                                                                               |
| **Splunk Core Power User**   | Splunk             | **$130 (exam only)**  | Training content available free from Splunk.                                                          |
| **SANS SEC503 / GCIA**       | SANS               |           **$9,779**  | Typical OnDemand price **$8,780 + $999** GIAC exam.                                                   |
| **SANS SEC511 / GMON**       | SANS               |           **$9,779**  | Typical OnDemand price **$8,780 + $999** GIAC exam.                                                   |

---

## Final Ratings

| Category                              | Rating            |
| ------------------------------------- | ----------------- |
| 🧠 Knowledge Depth                    | ★★★☆☆☆☆☆☆☆ (3/10) |
| 🧪 Real-World Applicability           | ★★★★★☆☆☆☆☆ (5/10) |
| 💰 Value for Cost                     | ★★★★☆☆☆☆☆☆ (4/10) |
| 📚 Study Requirements                 | ★★★☆☆☆☆☆☆☆ (3/10) |
| 🌍 Industry Relevance & Accessibility | ★★★★★★★☆☆☆ (7/10) |

**Overall Score:** **4.4 / 10**

### Rating Explanations

* **Knowledge Depth (3/10):** Short runtime and narrow scope compared to SOC-200/SANS; solid fundamentals, limited breadth.  
* **Real-World Applicability (5/10):** Practical SIEM/endpoint hunting and reporting; portability depends on your stack.  
* **Value for Cost (4/10):** Much better in **Learn** bundles; as standalone, alternatives may offer more breadth.  
* **Study Requirements (3/10):** Manageable under ~50 hours; reflects the limited depth.  
* **Industry Relevance & Accessibility (7/10):** Few hands-on threat-hunting certs at this price point; OffSec branding and enforced reporting help entry-level defenders.  

---

## Final Thoughts

**TH-200 / OSTH** is a certification I’m glad I pursued, but one I view with mixed feelings. On the positive side, the exam forced me to slow down and document my work in a disciplined way — timelines, queries, screenshots, and structured narrative. That part felt authentic, and it mirrors the kind of reporting discipline expected of professional threat hunters. The eight-hour hunting window followed by a full day to write the report created a pressure that was challenging but fair, and I walked away more confident in my ability to communicate findings clearly.

Where it fell short for me was in scope and depth. The course is lean — you can get through it quickly, and you’ll probably wish there was more. I certainly did. For the price of a standalone, I would have found that frustrating. Inside Learn One or Learn Unlimited, though, it makes sense as an add-on track. Taken that way, it’s a specialized certification that builds on broader defensive training and adds a practical hunting element, not a full blue-team curriculum.

Other reviewers have echoed the same: the reliance on a couple of vendors limits portability, and the learning path doesn’t match the breadth of something like SOC-200 or BTL1. But it also fills a space those programs don’t — a targeted, hands-on validation of hunting skills that aren’t usually tested at this price point.

In the end, I’d describe OSTH as **a worthwhile credential if you manage your expectations.** If you want deep, wide-ranging coverage, look elsewhere. If you want to validate that you can think like a hunter, use real telemetry, and produce a clear report under exam conditions, OSTH does exactly that. For me, it was a useful, confidence-building milestone and a rare chance to get assessed in threat hunting without needing a $9K SANS budget.

---

> *Note: AI-assisted editing was used to improve grammar, clarity, and formatting. All technical content and opinions are original.*

