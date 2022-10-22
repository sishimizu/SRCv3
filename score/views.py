from django.shortcuts import render
from .forms import CountForm
from .models import Run,Count,Score
from django.views.generic import TemplateView,CreateView,ListView,UpdateView,FormView
from django.urls import reverse_lazy
from django.contrib import messages

# Create your views here.
#走行順にチーム名が並んでいるページ
#チーム名をクリックすると得点入力のページに移動する
class Index(TemplateView):
  template_name = 'score/index.html'
  model = Run
  def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        run = Run.objects.all().order_by("order","status")
        context['runs'] = run
        #context['form'] = CountForm
        return context

  def get(self, request, *args, **kwargs):
    return super().get(request, *args, **kwargs)

#得点入力のページに飛んできたときの処理
#Getの場合はフォームを表示する
#確認画面から戻ってくる場合はFormの値を保持したまま
class Create(FormView):
  template_name = "score/create.html"
  model = Count
  form_class = CountForm
  def get_form_kwargs(self):
        kwargs = super( Create, self).get_form_kwargs()
        if self.request.method=="GET":
            kwargs.update(self.request)
        return kwargs
  
  def get_initial(self):
    initial = super().get_initial()
    initial["run"] = self.kwargs['pk']
    return initial
  
  def form_valid(self, form):
    context ={'form':form}
    return render(self.request, 'score/create.html',context)

#確認画面の処理
#得点入力画面で送信ボタンを押されたらこちらの処理に飛んでくる
#カウントから得点を計算して確認画面のテンプレートに送る
class Confirm(FormView):
  form_class = CountForm
  template_name = "score/confirm.html"
  #得点を計算するための自作関数
  def calc_score(self, form):
    m1_score = form.cleaned_data['m1_count'] * 100
    m2_score = form.cleaned_data["m2_count"] * 400
    m2h_score = form.cleaned_data["m2h_count"] * 200
    m3_score = form.cleaned_data["m3_count"] * 400
    m3h_score = form.cleaned_data["m3h_count"] * 200
    m4_score = form.cleaned_data["m4_count"] * 600
    m4h_score = form.cleaned_data["m4h_count"] * 300
    m6_score = form.cleaned_data["m6_count"] * 1000
    m6h_score = form.cleaned_data["m6h_count"] * 500
    bonus1_score = form.cleaned_data["bonus1_count"] * 200
    if(form.cleaned_data["m5_count"] == True):
      m5_score = 500
    else:
      m5_score = 0
      
    if(form.cleaned_data["m7_count"] == True):
      m7_score = 500
    else:
      m7_score = 0
      
    if(form.cleaned_data["bonus2_count"] == True):
      bonus2_score = 200
    else:
      bonus2_score = 0
    total = m1_score + m2_score + m2h_score +m3_score + m3h_score + m4_score + m4h_score + m6_score + m6h_score + m5_score +m7_score + bonus2_score + bonus1_score
    
    score = {
      'm1_score':m1_score,
      'm2_score':m2_score,
      'm2h_score':m2h_score,
      'm3_score':m3_score,
      'm3h_score':m3h_score,
      'm4_score':m4_score,
      'm4h_score':m4h_score,
      'm5_score':m5_score,
      'm6_score':m6_score,
      'm6h_score':m6h_score,
      'm7_score':m7_score,
      'bonus1_score':bonus1_score,
      'bonus2_score':bonus2_score,
      'total':total,
    }
    return score
  #フォームが送られたときに実行される
  #必要な変数をテンプレートへ送る
  def form_valid(self, form):
    score = self.calc_score(form)
    pk = self.request.POST['run']
    run = Run.objects.get(id=pk)
    context ={
      'form':form,
      'pk':pk ,
      'run':run,
      'score':score
      }
    return render(self.request, 'score/confirm.html',context)
  
  #フォームに何か問題があったときの処理
  #入力画面に戻る
  def form_invalid(self, form):
    context ={'form':form}
    return render(self.request, 'score/create.html',context)

#確定のボタンを押したときの処理
class Determine(CreateView):
  form_class = CountForm
  model = Count
  success_url = reverse_lazy('rank')
  def calc_score(self, form):
    m1_score = form.cleaned_data['m1_count'] * 100
    m2_score = form.cleaned_data["m2_count"] * 400
    m2h_score = form.cleaned_data["m2h_count"] * 200
    m3_score = form.cleaned_data["m3_count"] * 400
    m3h_score = form.cleaned_data["m3h_count"] * 200
    m4_score = form.cleaned_data["m4_count"] * 600
    m4h_score = form.cleaned_data["m4h_count"] * 300
    m6_score = form.cleaned_data["m6_count"] * 1000
    m6h_score = form.cleaned_data["m6h_count"] * 500
    bonus1_score = form.cleaned_data["bonus1_count"] * 200
    if(form.cleaned_data["m5_count"] == True):
      m5_score = 500
    else:
      m5_score = 0
      
    if(form.cleaned_data["m7_count"] == True):
      m7_score = 500
    else:
      m7_score = 0
      
    if(form.cleaned_data["bonus2_count"] == True):
      bonus2_score = 200
    else:
      bonus2_score = 0
    total = m1_score + m2_score + m2h_score +m3_score + m3h_score + m4_score + m4h_score + m6_score + m6h_score + m5_score +m7_score + bonus2_score + bonus1_score
    
    score = {
      'm1_score':m1_score,
      'm2_score':m2_score,
      'm2h_score':m2h_score,
      'm3_score':m3_score,
      'm3h_score':m3h_score,
      'm4_score':m4_score,
      'm4h_score':m4h_score,
      'm5_score':m5_score,
      'm6_score':m6_score,
      'm6h_score':m6h_score,
      'm7_score':m7_score,
      'bonus1_score':bonus1_score,
      'bonus2_score':bonus2_score,
      'total':total,
    }
    return score
  #フォームが通らなかった時の処理
  def form_invalid(self, form):
    context ={'form':form}
    return render(self.request, 'score/create.html', context)
  #フォームが通ったときの処理
  def form_valid(self, form):
    #Countの保存
    count_obj = form.save(commit=False)
    count_obj.save()
    #Scoreの保存
    score = self.calc_score(form)
    pk = self.request.POST['run']
    run = Run.objects.get(id=pk)
    score_obj = Score(
      run=run,
      m1_score=score["m1_score"],
      m2_score=score["m2_score"],
      m2h_score=score["m2h_score"],
      m3_score=score["m3_score"],
      m3h_score=score["m3h_score"],
      m4_score=score["m4_score"],
      m4h_score=score["m4h_score"],
      m5_score=score["m5_score"],
      m6_score=score["m6_score"],
      m6h_score=score["m6h_score"],
      m7_score=score["m7_score"],
      bonus1_score=score["bonus1_score"],
      bonus2_score=score["bonus2_score"],
      total=score["total"]
      )
    score_obj.save()
    #RunのStatusの変更
    run_obj = Run.objects.get(id=pk)
    run_obj.status = "走行後"
    run_obj.save()
    return super().form_valid(form)

class Rank(TemplateView):
  Model = Run
  template_name = 'score/rank.html'     
      
  def get_context_data(self, **kwargs):
    score = Score.objects.order_by("total").reverse()
    context = super().get_context_data(**kwargs)
    context.update({
      'scores':score,
    })
    return context
  
  def get(self, request, *args, **kwargs):
    scores = Score.objects.all().order_by('total').reverse()
    for i,score in enumerate(scores,1):
      order = score.run.order
      team = Run.objects.get(order=order)
      team.rank = i
      team.save()
    return super().get(request, *args, **kwargs)
