---
title: Categories
category: ignore
---

{% assign sorted_cats = site.categories | sort %}

{% for cat in sorted_cats %}
  {% if cat[0] == 'notes' or cat[0] == 'ignore' %}
    {% continue %}
  {% endif %}
  | <a href="#{{ cat[0] }}">{{ cat[0] }}</a> |
{% endfor %}

{% for cat in sorted_cats %}
  {% if cat[0] == 'notes' or cat[0] == 'ignore' %}
    {% continue %}
  {% endif %}
  <h3 id="{{ cat[0] }}">{{ cat[0] }}</h3>
  <hr />
  
  <ul>
  {% assign sorted_posts = site.posts | sort %}
  {% for post in sorted_posts %}
    {% if post.category == cat[0] or post.categories contains cat[0] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
