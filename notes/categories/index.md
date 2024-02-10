---
title: Categories
category: ignore
---
{% assign ignore_cats = "ignore,notes,Reviews,Write-Ups" | split: "," %}
{% assign sorted_cats = site.categories | sort %}

_The below index can be clicked to jump to a specific category. Ideally this will be useful once there are several different posts._
<table>
<tbody>
{% for cat in sorted_cats %}
  {% if ignore_cats contains cat[0] %}
    {% continue %}
  {% endif %}
  <tr><td><a href="#{{ cat[0] }}">{{ cat[0] }}</a></td></tr>
{% endfor %}
</tbody>
</table>

{% for cat in sorted_cats %}
  {% if ignore_cats contains cat[0] %}
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
