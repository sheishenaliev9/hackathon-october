# Generated by Django 4.2.6 on 2023-10-17 10:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_profile_status_delete_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='idea',
            name='category',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
