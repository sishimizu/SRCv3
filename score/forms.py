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
  def clean(self):
    cleaned_data = super().clean()
    m2 = self.cleaned_data['m2_count']
    m2h = self.cleaned_data['m2h_count']
    m3 = self.cleaned_data['m3_count']
    m3h = self.cleaned_data['m3h_count']
    m4 = self.cleaned_data['m4_count']
    m4h = self.cleaned_data['m4h_count']
    m6 = self.cleaned_data['m6_count']
    m6h = self.cleaned_data['m6h_count']
    get_block = m2 + m2h
    put_block = m3+m3h+m4+m4h+m6+m6h
    if(get_block < put_block and put_block >= 0 ):
      raise forms.ValidationError('コンテナの数が合っていません。修正してください。')
    return cleaned_data