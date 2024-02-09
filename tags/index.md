---
layout: default
title: Programming
permalink: /tags
---
{% for tag in site.tags %}
  ### {{ tag[0] }}
  _____
  * {{ site.tags.tag[0] }}
{% endfor %}
