---
title: Categories
category: ignore
---

{% assign sorted_cats = site.categories | sort %}
{% for cat in sorted_cats %}
  {% if cat[0] == 'ignore' %}
    {% continue %}
  {% endif %}
  <a href="{{ cat[0] }}.md">{{ cat[0] }}</a>
{% endfor %}
