from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import CustomeUser
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
import jwt, datetime
# Create your views here.
class RegisterView(APIView):

    def post(self, request): 
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = CustomeUser.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("User not found!")

        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password!")
        
        payload = {

            'id': user.id,

            'exp': datetime.datetime.now(datetime.UTC)+ datetime.timedelta (minutes=68),

            'iat': datetime.datetime.now(datetime.UTC)}

        
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {'jwt': token}

        return response

class UserView(APIView):

    def get(self, request):

        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload=jwt.decode(token, 'secret', algorithms=['HS256'])

        except jwt.ExpiredSignatureError:

            raise AuthenticationFailed('Unauthenticated!')
        user = CustomeUser.objects.filter(id= payload['id']).first()
        serializer= UserSerializer (user)

        return Response(serializer.data)

class LogoutView(APIView):

    def post(self, request):

        response = Response()
        response.delete_cookie('jwt')
        response.data = {
        'message': 'logout success'}

        return response
# @api_view(['POST'])
# @permission_classes([AllowAny])
# def user_reg(request):
#     if request.method == 'POST':
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# @permission_classes([AllowAny])
# def user_login(request):
#     serializer = LoginSerializer(data=request.data)
#     if serializer.is_valid():
#         email = serializer.validated_data['email']
#         password = serializer.validated_data['password']

#         user = authenticate(request, email=email, password=password)
#         if user is not None:
#             token, _ = Token.objects.get_or_create(user=user)
#             return Response({'token': token.key}, status=status.HTTP_200_OK)
#         return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def user_logout(request):
#     try:
#         print(f"Authenticated user: {request.user}")
#         print(f"User token: {request.auth}")

#         if request.auth and hasattr(request.user, 'auth_token'):
#             request.user.auth_token.delete()
#             return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
#         else:
#             return Response({'error': 'Token not found or user not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)
#     except Exception as e:
#         return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# # class RegisterView(generics.CreateAPIView):
# #     queryset = User.objects.all()
# #     serializer_class = UserSerializer

# # class LoginView(APIView):
    
# #     def post(self, request, *args, **kwargs):
# #         serializer = LoginSerializer(data=request.data)
# #         serializer.is_valid(raise_exception=True)
        
# #         user = authenticate(
# #             email = serializer.validated_data['email'],
# #             password = serializer.validated_data['password']
# #         )

# #         if user:
# #             token, created = Token.objects.get_or_create(user=user)
# #             return Response({'Token':token.key}, status=status.HTTP_200_OK)
# #         return Response({'Error':'Invalid Creds'}, status=status.HTTP_400_BAD_REQUEST)
    
# # class LogoutView(APIView):
# #     def post(self, request, *args, **kwargs):
# #         try:
# #             request.user.auth_token.delete()
            
# #         except:
# #             pass
# #         return Response(status= status.HTTP_204_NO_CONTENT)
    

