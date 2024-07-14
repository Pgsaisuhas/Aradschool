from .models import CustomeUser
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomeUser
        fields  = ['name', 'email', 'password']
        kwargs = {'password': {'write_only':True}}
    def create(self, validated_data):

        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    # def create(self, validated_data):
    #     user = CustomeUser(
    #         email = validated_data['email'],
    #         first_name = validated_data['first_name']
    #     )
    #     user.set_password(validated_data['password'])
    #     user.save()
    #     return user
    
# class LoginSerializer(serializers.ModelSerializer):
#     email = serializers.EmailField()
#     password = serializers.CharField()
#     class Meta:
#         model = CustomeUser
#         fields = ['email', 'password']

# class LogoutSerializer(serializers.ModelSerializer):
#     pass

        
