---
title: Reviews
category: Reviews
tag: ignore
---

Below you'll find blog-style reviews of courses I've taken in the past.
{% for post in site.posts %}
  {% if post.category != 'Reviews' or post.tags contains 'ignore' %}
    {% continue %}
  {% endif %}
  <a href="{{ post.url }}">{{ post.title }}</a> - <small>{{ post.date | date: "%B %e, %Y" }}</small>
{% endfor %}
