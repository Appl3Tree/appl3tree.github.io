---
title: Categories
category: ignore
---

{{ site.categories }}
{% for cat in site.categories %}
  {{ cat[0] }}
{% endfor %}
