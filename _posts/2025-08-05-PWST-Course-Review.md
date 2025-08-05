---
title: "Practical Web Application Security and Testing (PWST) Review"
date: 2025-08-05 00:00:00 +0000
categories:
  - Course Reviews
tags:
  - PWST
  - TCM
  - TaggartInstitute
  - training
  - course
  - review
  - cybersecurity
  - webapp
  - pentesting
  - owasp
description: "AppleTree's in-depth review of Michael Taggart’s Practical Web Application Security and Testing (PWST) course, including full curriculum highlights, lab experience, and methodology insights."
show_image_post: true
image: /assets/img/infocards/PWST-Review.png
---

# Practical Web Application Security and Testing (PWST) Review

## Overview
- **Instructor:** Michael Taggart  
- **Platform:** Taggart Institute / TCM Security Academy  
- **Format:** Video-based training with hands-on labs (VM or Docker-based)  
- **Recommended Prep:** Basic understanding of HTTP, web application architecture, and general penetration testing workflow  

Michael Taggart’s Practical Web Application Security and Testing is a full-spectrum web application security course that carefully blends methodology, tooling, and lab work into a cohesive learning experience.  

Michael is well known for his philosophy that **finances should not be a barrier to quality security education**. This course exemplifies that ethos. The content is well produced, comprehensive, and built with an eye toward accessibility — all while retaining professional-grade rigor. If you have the means, I strongly encourage supporting Michael’s work, as it sustains initiatives like this that make security learning available to so many.

## Course Experience
The course is laid out in a logical, progressive sequence that builds from foundational concepts to advanced assessment techniques.  

### **Lab Setup & Environment**
Right from the start, the course gives students the option of using **VMs (Hyper-V or VirtualBox)** or **Docker-based labs** for the hands-on portion. This flexibility is excellent — Docker offers quick deployment and minimal setup effort, while VM users can choose a more traditional setup if they prefer. Both options let students focus on the testing process without getting lost in unnecessary environment troubleshooting.

### **Content Structure & Flow**
The curriculum is thoughtfully organized into clear sections:

- **Prologue & Setup:** Covers expectations, lab setup (Hyper-V, VirtualBox, Kali Linux, Docker), and tooling.  
- **Web Application Concepts:** Fundamentals of servers, clients, HTTP, HTML/CSS/JS, and a smooth introduction to OWASP ZAP with hands-on enumeration.  
- **Server-Side Applications:** PHP, WordPress, DVWA, and common server-side vulnerabilities with dedicated labs.  
- **OWASP Top 10:** A deep dive into each risk category, paired with practical exercises — Broken Access Control, Cryptographic Failures, Injection attacks (XSS, SQLi, Command Injection), Insecure Design, Security Misconfiguration, Outdated Components, Authentication Failures, Data Integrity, Logging & Monitoring Failures, SSRF, and additional practice.  
- **Client-Side Applications:** Juice Shop and frontend security considerations.  
- **Pentesting Methodology:** Step-by-step coverage of preparation, scoping, enumeration, manual and automated testing.  
- **Juice Shop Pentest:** A simulated real-world pentest walking through enumeration, authentication, purchasing workflows, customer support, API testing, and legacy code review.  
- **Reporting:** Clear guidance on professional report structure and writing tips.  
- **API Testing:** Focused section on APIs in web apps, using Insomnia and VAPI labs to test for common API vulnerabilities.  
- **Final Thoughts:** Exhibition of mastery, suggested next steps, and feedback.

### **Focus on ZAP & Reporting**
What truly stood out to me was Michael’s choice to center much of the practical demonstration on **OWASP ZAP**. While the course does introduce a variety of tools, the emphasis on mastering one free, accessible tool is a strength. Coming from a background where I’ve primarily used Burp Suite and Postman, this focus offered a new perspective.  

The **reporting section** is another highlight. Many technical courses neglect the delivery of findings, but Michael thoroughly covers how to present results in a professional, client-ready format.

## Pros
- **Accessibility Commitment:** Michael’s philosophy of keeping quality education affordable or even free when needed.
- **Smooth Lab Experience:** Docker or VM-based labs minimize setup headaches.
- **Thorough Coverage:** OWASP Top 10, APIs, and full pentest methodology from scoping to reporting.
- **Practical Workflow:** Realistic Juice Shop pentest mirrors actual engagements.
- **Reporting Focus:** Strong emphasis on producing professional deliverables.

## Cons
- **ZAP-Centric Approach:** Burp Suite advanced users will need supplemental material for advanced workflows.
- **Foundational Pacing:** Experienced testers may find early sections move slowly, though they provide a valuable refresh.

### Final Ratings
| Category | Rating |
|----------|--------|
| 🧠 Knowledge Depth | ★★★★☆ |
| 🧪 Real-World Applicability | ★★★★★ |
| 💰 Value for Cost | ★★★★★ |
| 📚 Study Requirements | ★★★★☆ |

**Exact Numeric Average:** 4.5  
**Overall Score:** 4.6 / 5  

**Why this rating is slightly above the average:**  
The course’s combination of structured methodology, practical labs, and professional reporting guidance elevates it above many entry-level web application pentesting courses. The flexibility of lab setup (VM or Docker) and the focus on a free, powerful tool like OWASP ZAP make it both accessible and practical.  

PWST is a **comprehensive, methodology-driven course** that leaves learners with not only technical skills but also a professional process for conducting web application assessments. Whether you’re just starting in web app pentesting or refining your methodology, this course is a strong investment of time — and well worth supporting if you can.

---

> _Note: AI-assisted editing was used to improve grammar, clarity, and formatting. All technical content and opinions are original._
