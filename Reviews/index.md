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
  <h3><a href="{{ post.url }}">{{ post.title }}</a><small><strong>{{ post.date | date: "%B %e %Y" }}</strong></small></h3>
{% endfor %}
