---
title: Categories
---

{% assign sorted_cats = site.categories | sort %}
{% for cat in sorted_cats %}
  <a href="categories/{{ cat[0] }}.md">{{ cat[0] }}</a>
{% endfor %}
