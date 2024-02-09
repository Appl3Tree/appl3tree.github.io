---
layout: default
title: Programming
permalink: /tags
---
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
  <h3>{{ tag[0] }}</h3>
  <hr />
  
  <ul>
  {% for post in site.posts %}
    {% if post.tags contains tag[0] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
