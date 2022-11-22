from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.Index.as_view(),name='index'),
    path('create/<int:pk>',views.Create.as_view(),name='create'),
    path('confirm',views.Confirm.as_view(),name='confirm'),
    path('determine',views.Determine.as_view(),name='determine'),
    path('order',views.Order.as_view(),name='order'),
    path('rank',views.Rank.as_view(),name='rank'),
    path('rank2',views.Rank2.as_view(),name='rank2'),
    path('libretto',views.Libretto.as_view(),name='libretto'),
    path('reset_data',views.ResetData.as_view(),name='reset_data'),
    path('export_data',views.ExportData,name='export_data'),
    path('export_data_all',views.ExportData2,name='export_data_all'),
]