# Materi Promosi

Lihat atau unduh materi promosi.

{% for page in site.pages %}
  {% if page.dir == 'events' %}
    * [{{ page.path | split: '/' | last }}]({{ page.path | split: '/' | last }})
  {% endif %}
{% endfor %}
