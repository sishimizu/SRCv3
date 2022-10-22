from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.Index.as_view(),name='index'),
    path('create/<int:pk>',views.Create.as_view(),name='create'),
    path('comfirm',views.Confirm.as_view(),name='confirm'),
    path('determine',views.Determine.as_view(),name='determine'),
    path('rank',views.Rank.as_view(),name='rank')
]