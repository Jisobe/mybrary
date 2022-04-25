from re import template
from django.urls import path, include
from django.contrib import admin
from django.views.generic import TemplateView
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('mybrary_api/', include('mybrary_app.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]