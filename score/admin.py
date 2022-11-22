from django.contrib import admin
from .models import Run,Count,Score
from import_export import resources
from import_export.admin import ImportMixin

# Register your models here.
class RunResource(resources.ModelResource):
  class Meta:
    model = Run
    imort_order =('order','team','run','status')
    import_id_fields =['order']

class RunAdmin(ImportMixin,admin.ModelAdmin):
  resource_class=RunResource

admin.site.register(Run,RunAdmin)
admin.site.register(Count)
admin.site.register(Score)