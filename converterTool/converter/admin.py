from django.contrib import admin
from converter.models import *
from import_export.admin import ImportExportModelAdmin


admin.site.register(Ads)
admin.site.register(Advertisement)
admin.site.register(Post)

@admin.register(Cetegories)
class CetegoriesResources(ImportExportModelAdmin):
    pass


@admin.register(Tools)
class ToolsResources(ImportExportModelAdmin):
    pass




