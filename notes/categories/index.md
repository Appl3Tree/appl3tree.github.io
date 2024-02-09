---
title: Categories
category: ignore
---

{% assign existing_cats = [] %}
{% for post in site.posts %}
  {% if site.categories contains site.category %}
    %{ existing_cats += site.category %}
  {% endif %}
{% endfor %}
{% assign sorted_cats = existing_cats | sort %}

{% for cat in sorted_cats %}
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
