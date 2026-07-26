from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from store.views.health import health_check
from store.views.auth import LoginView, RegisterView, ProfileView, LogoutView

router = DefaultRouter()

urlpatterns = [
    path('health/', health_check),

    # Auth endpoints
    path('auth/login/', LoginView.as_view(), name='auth-login'),
    path('auth/register/', RegisterView.as_view(), name='auth-register'),
    path('auth/me/', ProfileView.as_view(), name='auth-me'),
    path('auth/logout/', LogoutView.as_view(), name='auth-logout'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='auth-token-refresh'),

    path('', include(router.urls)),
]
