# Generated by Django 3.1 on 2022-10-21 08:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('score', '0002_run_order'),
    ]

    operations = [
        migrations.AlterField(
            model_name='run',
            name='order',
            field=models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10), (11, 11), (12, 12), (13, 13), (14, 14), (15, 15), (16, 16), (17, 17), (18, 18), (19, 19), (20, 20)], unique=True),
        ),
    ]