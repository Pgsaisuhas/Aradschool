# Generated by Django 5.0.6 on 2024-08-01 16:34

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("user_reg", "0003_customeuser_username"),
    ]

    operations = [
        migrations.AlterModelManagers(
            name="customeuser",
            managers=[],
        ),
        migrations.RemoveField(
            model_name="customeuser",
            name="username",
        ),
    ]
