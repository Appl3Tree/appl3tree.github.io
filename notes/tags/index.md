---
title: Tags
category: ignore
---
{% assign ignore_tags = "ignore" | split: "," %}
{% assign sorted_tags = site.tags | sort %}

_The below index can be clicked to jump to a specific category. Ideally this will be useful once there are several different posts._
<table>
<tbody>
{% for tag in sorted_tags %}
  {% if ignore_tags contains tag[0] %}
    {% continue %}
  {% endif %}
  <tr><td><a href="#{{ tag[0] }}">{{ tag[0] }}</a></td></tr>
{% endfor %}
</tbody>
</table>
  

{% for tag in sorted_tags %}
  {% if ignore_tags contains tag[0] %}
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
