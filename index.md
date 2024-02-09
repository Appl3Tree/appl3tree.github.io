---
layout: default
title: Home
---
Welcome to my notes! It's a bit crazy here and I like to jump around so feel free to browse wherever your interests take you.
{% assign sorted_cats = site.categories | sort %}
{% for cat in sorted_cats %}
  <a href="categories/{{ cat[0] }}.md">{{ cat[0] }}</a>
{% endfor %}
