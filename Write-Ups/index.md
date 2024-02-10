---
title: Write-Ups
category: ignore
---

> _Take a look!_
<a href="#HackTheBox/">HackTheBox</a>
<a href="#TryHackMe/">TryHackMe</a>

{% assign sorted_posts = site.posts | sort %}
<h3 id="HackTheBox">HackTheBox</h3>
<hr />
<ul>
{% for post in sorted_posts %}
    {% if post.tags contains "HackTheBox" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<h3 id="TryHackMe">TryHackMe</h3>
<hr />
<ul>
{% for post in sorted_posts %}
    {% if post.tags contains "TryHackMe" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>
