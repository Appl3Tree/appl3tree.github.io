---
layout: default
title: Programming
permalink: /tags
---
{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <hr />
  <ul>{{ site.tags.tag[0] }}</ul>
{% endfor %}
