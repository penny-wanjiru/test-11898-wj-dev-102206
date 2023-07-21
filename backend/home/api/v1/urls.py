from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BookViewSet,CountryViewSet,HomeViewSet,ReadsViewSet,TrialViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('book', BookViewSet )
router.register('home', HomeViewSet )
router.register('trial', TrialViewSet )
router.register('country', CountryViewSet )
router.register('reads', ReadsViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
