from django.urls import path, re_path
from EmployeeApp import views

urlpatterns = [
    path('department/', views.departmentApi),
    re_path('department/([0-9]+)$', views.departmentApi),

    path('employee/', views.employeeApi),
    re_path('employee/([0-9]+)$', views.employeeApi),
]