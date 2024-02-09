---
layout: default
---
# Index
_____
{% for post in site.posts %}
  <h3><a href="https://appl3tree.github.io/notes{{ post.url }}">{{ post.title }}</a></h3>
  <p><small><strong>{{ post.date | date: "%B %e, %Y" }}</strong> - {{ post.category }}</small></p>
{% endfor %}
_____
