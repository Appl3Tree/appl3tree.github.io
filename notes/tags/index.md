---
title: Tags
category: ignore
---
{% assign ignore_tags = "ignore" | split: "," %}
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
  {% if ignore_tags contains tag %}
    {% continue %}
  {% endif %}
  <a href="#{{ tag[0] }}">{{ tag[0] }}</a>
{% endfor %}

{% for tag in sorted_tags %}
  {% if ignore_tags contains tag %}
    {% continue %}
  {% endif %}
  <h3 id="{{ tag[0] }}">{{ tag[0] }}</h3>
  <hr />
  
  <ul>
  {% assign sorted_posts = site.posts | sort %}
  {% for post in sorted_posts %}
    {% if post.tags contains tag[0] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
