# Generated by Django 2.2.10 on 2020-08-16 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('converter', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ads',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ads', models.TextField(max_length=200, verbose_name='Ads.txt:- ')),
            ],
        ),
    ]
