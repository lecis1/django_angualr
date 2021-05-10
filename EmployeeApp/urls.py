from django.urls import path, re_path
from EmployeeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('department/', views.departmentApi),
    re_path('department/([0-9]+)$', views.departmentApi),

    path('employee/', views.employeeApi),
    re_path('employee/([0-9]+)$', views.employeeApi),

    path('SaveFiles/', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)