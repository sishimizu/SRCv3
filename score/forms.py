from django import forms
from .models import Run,Count,Score

class CountForm(forms.ModelForm):
  class Meta:
    model = Count
    fields = ("run","m1_count","m2_count","m2h_count","m3_count","m3h_count","m4_count","m4h_count","m5_count","m6_count","m6h_count","m7_count","bonus1_count","bonus2_count","perfect","clear_time")
    labels = {
      "run":'チーム名',
      "m1_count":'基地一秒ストップ',
      "m2_count":'荷物を取る',
      "m2h_count":'荷物をとる（神の手）',
      "m3_count":'荷物を置く（MoonBase1）',
      "m3h_count":'荷物を置く（MoonBase1）半分',
      "m4_count":'荷物を置く（MoonBase2）',
      "m4h_count":'荷物を置く（MoonBase2）半分',
      "m5_count":'S字コースに移動',
      "m6_count":'荷物を置く（MoonBase3）',
      "m6h_count":'荷物を置く（MoonBase3）半分',
      "m7_count":'MoonBase4に完全停止',
      "bonus1_count":'障害物回避する',
      "bonus2_count":'3周してスタートへ',
      "perfect":'完全制覇',
      "clear_time":'クリアタイム',
    }