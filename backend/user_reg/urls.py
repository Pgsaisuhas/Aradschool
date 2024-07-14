from .views import RegisterView, LoginView, UserView, LogoutView, DeleteAccountView
from django.urls import path
urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('deleteacc/', DeleteAccountView.as_view()),
    
]