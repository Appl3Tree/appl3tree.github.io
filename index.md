---
layout: default
---
All tags can be browsed <a href="tags/index.md">here</a>.
{% assign sorted_cats = site.categories | sort %}
{% for cat in sorted_cats %}
  <a href="categories/{{ cat[0] }}.md">{{ cat[0] }}</a>
{% endfor %}
