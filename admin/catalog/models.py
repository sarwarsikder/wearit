from django.db import models


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(default=None)
    meta_title = models.CharField(max_length=255, null=True)
    meta_description = models.CharField(max_length=255, null=True)
    meta_keyword = models.CharField(max_length=255, null=True)
    created_date = models.CharField(max_length=255, null=True)
    updated_date = models.CharField(max_length=255, null=True)

    class Meta:
        indexes = [
            models.indexes(fields=['name'])
        ]
