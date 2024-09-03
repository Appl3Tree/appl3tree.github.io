---
description: >-
  Appl3Tree's writeup on the xxx-difficulty xxx machine xxx from 
  https://www.hackthebox.com
title: Hack The Box - Writeup Template                    # Add title of the machine here
date: 2020-04-14 08:00:00 -0600                           # Change the date to match completion date
categories: [Hack the Box, Templates]                     # Change Templates to Writeup
tags: [htb, hacking, hack the box, template, redteam]     # TAG names should always be lowercase; replace template with writeup, and add relevant tags
show_image_post: false                                    # Change this to true
#image: /assets/img/machine-0-infocard.png                # Add infocard image here for post preview image
---

## HTB - Machine_Name

## Overview

![Descriptive information card about this machine](<machine>-infocard.png)

Short description to include any strange things to be dealt with

## Useful Skills and Tools

### Useful thing 1

Description with generic example

### Useful thing 2

Description with generic example

## Enumeration

### Nmap scan

I started my enumeration with an nmap scan of `xx.xx.xx.xxx`.  The options I regularly use are: 

| `Flag` | Purpose |
| :--- | :--- |
| `-p-` | A shortcut which tells nmap to scan all ports |
| `-vvv` | Gives very verbose output so I can see the results as they are found, and also includes some information not normally shown |
| `-sC` | Equivalent to `--script=default` and runs a collection of nmap enumeration scripts against the target |
| `-sV` | Does a service version scan |
| `-oA $name` | Saves all three formats \(standard, greppable, and XML\) of output with a filename of `$name` |

## Initial Foothold

## Road to User

### Further enumeration

### Finding user creds

### User.txt


## Path to Power \(Gaining Administrator Access\)

### Enumeration as user `username`

### Getting a shell

### Root.txt

Thanks to [`<box_creator>`](https://www.hackthebox.eu/home/users/profile/<profile_num>) for something interesting or useful about this machine.
