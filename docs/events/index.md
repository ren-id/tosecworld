# Materi Promosi

Lihat atau unduh materi promosi.

{% for file in site.static_files %}
  {% if file.path contains "events/" %}
    * [{{file.name}}]({{file.path}})
  {% endif %}
{% endfor %}
