from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import generics # type: ignore
from rest_framework.permissions import AllowAny # type: ignore

# Create your views here.
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
