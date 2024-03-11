# Materi Promosi

Lihat atau unduh materi promosi.

{% for page in site.categories.events %}
    * [{{ page.path | split: '/' | last }}]({{ page.path | split: '/' | last }})
{% endfor %}
