---
title: programming
category: ignore
tags: C Python C++ C# Bash Powershell
---
{% assign sorted_tags = site.tags | sort %}
{% for tag in page.tags %}
  <h3>{{ tag[0] }}</h3>
  <hr />

  <ul>
  {% assign sorted_posts = site.posts | sort %}
  {% for post in sorted_posts %}
    {% if post.category == 'Programming' %}
      {% if post.tags contains tag %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endif %}
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
