# Generated by Django 3.1 on 2022-11-03 05:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Run',
            fields=[
                ('order', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('team', models.CharField(choices=[('SpaceValkyrie', 'SpaceValkyrie'), ('チームカズシ', 'チームカズシ'), ('こぐま座', 'こぐま座'), ('チームユウシ', 'チームユウシ'), ('アノマロ', 'アノマロ'), ('スペースエクスプローラーズ', 'スペースエクスプローラーズ'), ('12時20分', '12時20分'), ('にゅうさんきん', 'にゅうさんきん'), ('PISTOL STAR', 'PISTOL STAR'), ('PUMA', 'PUMA'), ('Iriko', 'Iriko'), ('流れ星★', '流れ星★'), ('OSHIRO', 'OSHIRO'), ('H', 'H'), ('TOMATO人', 'TOMATO人'), ('SFK', 'SFK'), ('ロワン', 'ロワン'), ('はると', 'はると'), ('素数少年', '素数少年')], max_length=50)),
                ('run', models.CharField(choices=[('第1走行', '第1走行'), ('第2走行', '第2走行')], max_length=50)),
                ('status', models.CharField(choices=[('走行前', '走行前'), ('走行後', '走行後'), ('棄権', '棄権')], max_length=50)),
                ('rank', models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('m1_score', models.IntegerField(default=0)),
                ('m2_score', models.IntegerField(default=0)),
                ('m2h_score', models.IntegerField(default=0)),
                ('m3_score', models.IntegerField(default=0)),
                ('m3h_score', models.IntegerField(default=0)),
                ('m4_score', models.IntegerField(default=0)),
                ('m4h_score', models.IntegerField(default=0)),
                ('m5_score', models.IntegerField(default=0)),
                ('m6_score', models.IntegerField(default=0)),
                ('m6h_score', models.IntegerField(default=0)),
                ('m7_score', models.IntegerField(default=0)),
                ('bonus1_score', models.IntegerField(default=0)),
                ('bonus2_score', models.IntegerField(default=0)),
                ('total', models.IntegerField(default=0)),
                ('run', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='score.run')),
            ],
        ),
        migrations.CreateModel(
            name='Count',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('m1_count', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0)),
                ('m2_count', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0)),
                ('m2h_count', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0)),
                ('m3_count', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0)),
                ('m3h_count', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0)),
                ('m4_count', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0)),
                ('m4h_count', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0)),
                ('m5_count', models.BooleanField(default=False)),
                ('m6_count', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0)),
                ('m6h_count', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0)),
                ('m7_count', models.BooleanField(default=False)),
                ('bonus1_count', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0)),
                ('bonus2_count', models.BooleanField(default=False)),
                ('perfect', models.BooleanField(default=False)),
                ('clear_time', models.CharField(default='00:00:00', max_length=8)),
                ('sign', models.ImageField(upload_to='img/')),
                ('run', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='score.run')),
            ],
        ),
    ]
