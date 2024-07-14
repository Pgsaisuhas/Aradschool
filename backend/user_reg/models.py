from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomeUser(AbstractUser):
    name = models.CharField(max_length=255, blank=True)

    email = models.EmailField(unique=True) 
    password = models.CharField(max_length=255)

    username = None

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []
