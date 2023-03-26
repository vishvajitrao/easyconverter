from django.db import models
from froala_editor.fields import FroalaField
from django.contrib.auth.models import User

# Create your models here.

# class Cetegories(models.Model):
#     name = models.CharField('Category Name:- ', max_length=30)
#     url = models.SlugField('Category URL:- ')

#     def __str__(self):
#         return self.name
#     class Meta:
#         verbose_name_plural = "Category"

# STATUS = (
#     (0,"Draft"),
#     (1,"Publish")
# )


# class Tools(models.Model):
#     category = models.ForeignKey(Cetegories, on_delete= models.CASCADE)
#     convertFrom = models.CharField('Convert From:- ', max_length=50)
#     convertTo = models.CharField('Convert To:- ', max_length=50)
#     url = models.SlugField('Tool URL:- ')
#     viceVerca = models.SlugField('Reverse URL:- ',blank=True, null=True)
#     description = models.TextField('Meta Description:- ', max_length=160, blank=True, null=True)
#     javascript = models.TextField('Java Script Code :- ', max_length=500, blank=True, null=True)
#     keywords = models.TextField('Meta Keywords:- ', max_length=100, blank=True, null=True)
#     unit_from = models.CharField('Unit from:- ', max_length=50, blank=True, null=True)
#     unit_to = models.CharField('Unit to:- ', max_length=50, blank=True, null=True)
#     one_unit_to_value = models.DecimalField('One unit to value:- ', max_digits=15, decimal_places=8, default=0)
#     content = FroalaField()
#     status = models.IntegerField(choices=STATUS, default=0)
#     def __str__(self):
#         return self.convertFrom + ' To ' + self.convertTo

#     class Meta:
#         verbose_name_plural = "Online Converter Tools Section"
        




class Ads(models.Model):
    ads = models.TextField('Ads.txt:- ', max_length=200)



class Configurations(models.Model):
    belowHead = models.TextField('Paste the code below <head> tag:- ', max_length=300)
    belowBody = models.TextField('Paste the code below <body> tag:- ',max_length=300)


# Advertisement section

AdSTATUS = (
    (0,"Enable"),
    (1,"Disable")
)

class Advertisement(models.Model):
    header = models.TextField('Header Ad:- ', max_length=200, blank=True, null=True)
    sidebar1 = models.TextField('First Sidebard Ad:- ', max_length=200, blank=True, null=True)
    sidebar2 = models.TextField('Second Sidebar Ad:- ', max_length=200, blank=True, null=True)
    inArticle1 = models.TextField('In Article Ad:- ', max_length=200, blank=True, null=True)
    inArticle2 = models.TextField('In Article Ad:- ', max_length=200, blank=True, null=True)
    inArticle3 = models.TextField('In Article Ad:- ', max_length=200, blank=True, null=True)
    status = models.IntegerField(choices=AdSTATUS, default=0)

    class Meta:
        verbose_name_plural = "Advertisement Ad Code"
    

# Online Converter's Blog Model

# class Post(models.Model):
#     category = models.ForeignKey(Cetegories, on_delete=models.CASCADE)
#     title = models.CharField('Post Title:- ',max_length=200, unique=True)
#     slug = models.SlugField('Post URL:-', max_length=200, unique=True)
#     tumbnail = models.ImageField('Featured Image:-')
#     description = models.TextField('Description:- ', max_length=160)
#     author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='blog_posts')
#     updated_on = models.DateTimeField(auto_now= True)
#     created_on = models.DateTimeField(auto_now_add=True)
#     status = models.IntegerField(choices=STATUS, default=0)
#     # content = FroalaField(theme='dark')

#     class Meta:
#         ordering = ['-created_on']
#         verbose_name_plural = 'Online Converter Blog'

#     def __str__(self):
#         return self.title



class ContactUs(models.Model):
    name = models.CharField('User Name:- ', max_length = 50)
    email = models.CharField('User Email:- ', max_length = 50)
    query = models.CharField('User Message:- ', max_length = 50)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_on']
        verbose_name_plural = 'User Contact'

    def __str__(self):
        return self.name

