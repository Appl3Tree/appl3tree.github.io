---
title: Categories
category: ignore
---
{% assign sorted_cats = site.categories | sort %}
{% for cat in sorted_cats %}
  {% assign num_posts = site.categories.cat[0] | size %}
  {% if num_posts < 1 %}
    {% continue %}
  {% endif %}
  <h3>{{ cat[0] }}</h3>
  <hr />
  
  <ul>
  {% assign sorted_posts = site.posts | sort %}
  {% for post in sorted_posts %}
    {% if post.category == cat[0] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
