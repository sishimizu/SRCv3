from django.db import models

# Create your models here.
#チームの選択肢
class TeamChoices(models.TextChoices):
  TEAM1 = ('SpaceValkyrie','SpaceValkyrie')
  TEAM2 = ('チームカズシ','チームカズシ')
  TEAM3 = ('こぐま座','こぐま座')
  TEAM4 = ('チームユウシ','チームユウシ')
  TEAM5 = ('アノマロ','アノマロ')
  TEAM6 = ('スペースエクスプローラーズ','スペースエクスプローラーズ')
  TEAM7 = ('12時20分','12時20分')
  TEAM8 = ('にゅうさんきん','にゅうさんきん')
  TEAM9 = ('PISTOL STAR','PISTOL STAR')
  TEAM10 = ('PUMA','PUMA')
  TEAM11 = ('Iriko','Iriko')
  TEAM12 = ('流れ星★','流れ星★')
  TEAM13 = ('OSHIRO','OSHIRO')
  TEAM14 = ('H','H')
  TEAM15 = ('TOMATO人','TOMATO人')
  TEAM16 = ('SFK','SFK')
  TEAM17 = ('ロワン','ロワン')
  TEAM18 = ('はると','はると')
  TEAM19 = ('素数少年','素数少年')

#走行順の選択肢
class RunChoices(models.TextChoices):
  First = ('第1走行','第1走行')
  Seconds = ('第2走行','第2走行')

#状態の選択肢
class StatusChoices(models.TextChoices):
  before = ('走行前','走行前')
  after = ('走行後','走行後')
  abstention = ('棄権','棄権')

#Run_Table
#あらかじめ入力しておくテーブル
#チーム、第何走行か、状態、順位を入れておく

class Run(models.Model):
  '''
  OrderChoices = [
        (1,1),
        (2,2),
        (3,3),
        (4,4),
        (5,5),
        (6,6),
        (7,7),
        (8,8),
        (9,9),
        (10,10),
        (11,11),
        (12,12),
        (13,13),
        (14,14),
        (15,15),
        (16,16),
        (17,17),
        (18,18),
        (19,19),
        (20,20),
  ]
  '''
  order = models.IntegerField(blank=False,null=False,unique=True, primary_key=True)
  team = models.CharField( max_length=50,blank=False,choices=TeamChoices.choices)
  run = models.CharField(max_length=50,blank=False,choices=RunChoices.choices)
  status = models.CharField(max_length=50,blank=False,choices=StatusChoices.choices)
  rank = models.IntegerField(blank=True,null=True)
  def __str__(self):
        return self.team + "/" + self.run

#Count_Table
#このテーブルをModelFormとして利用する(予定)
#上限などの設定はjsで行うのが楽
class Count(models.Model):
  CountChoices = [
        (0,0),
        (1,1),
        (2,2),
        (3,3)
  ]
  run = models.OneToOneField("score.Run", on_delete=models.CASCADE,blank=True,unique=True,null=True)
  m1_count = models.IntegerField(default=0,choices=CountChoices,blank=False)
  m2_count =  models.IntegerField(default=0,choices=CountChoices,blank=False)
  m2h_count = models.IntegerField(default=0,choices=CountChoices,blank=False)
  m3_count = models.IntegerField(default=0,choices=CountChoices,blank=False)
  m3h_count = models.IntegerField(default=0,choices=CountChoices,blank=False)
  m4_count = models.IntegerField(default=0,choices=CountChoices,blank=False)
  m4h_count = models.IntegerField(default=0,choices=CountChoices,blank=False)
  m5_count = models.BooleanField(default=False)
  m6_count = models.IntegerField(default=0,choices=CountChoices,blank=False)
  m6h_count = models.IntegerField(default=0,choices=CountChoices,blank=False)
  m7_count = models.BooleanField(default=False)
  bonus1_count = models.IntegerField(default=0,choices=CountChoices,blank=False)
  bonus2_count = models.BooleanField(default=False)
  perfect = models.BooleanField(default=False)
  clear_time = models.CharField(max_length=8,default="00:00:00")
  sign = models.ImageField(upload_to='media',blank=True,null=True)  
  def __str__(self):
        return str(self.run)
  

#Score_Table
#Countからデータを読み取ってForm送信後にViewで入力と保存を行う
#rankのページに遷移をする際に読み込みが必要
class Score(models.Model):
  run = models.OneToOneField("score.Run",on_delete=models.CASCADE,unique=True,null=True)
  m1_score = models.IntegerField(default=0,blank=False)
  m2_score = models.IntegerField(default=0,blank=False)
  m2h_score = models.IntegerField(default=0,blank=False)
  m3_score = models.IntegerField(default=0,blank=False)
  m3h_score = models.IntegerField(default=0,blank=False)
  m4_score = models.IntegerField(default=0,blank=False)
  m4h_score = models.IntegerField(default=0,blank=False)
  m5_score = models.IntegerField(default=0,blank=False)
  m6_score = models.IntegerField(default=0,blank=False)
  m6h_score = models.IntegerField(default=0,blank=False)
  m7_score = models.IntegerField(default=0,blank=False)
  bonus1_score = models.IntegerField(default=0,blank=False)
  bonus2_score = models.IntegerField(default=0,blank=False)
  total = models.IntegerField(default=0,blank=False)
  def __str__(self):
        return str(self.run)

