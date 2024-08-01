from django.contrib import admin
from feedback.models import Feedback
from user_reg.models import CustomeUser

# Register your models here.
admin.site.register(Feedback)
admin.site.register(CustomeUser)