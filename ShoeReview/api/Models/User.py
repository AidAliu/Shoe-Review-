from django.db import models

class User(models.Model):
    UserID = models.AutoField(primary_key=True)  
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name
