
//選択肢のリスト
var residue_3 =[
  {cd:0, label:"0"},
  {cd:1, label:"1"},
  {cd:2, label:"2"},
  {cd:3, label:"3"}
];

var residue_2 =[
  {cd:0, label:"0"},
  {cd:1, label:"1"},
  {cd:2, label:"2"},
];
var residue_1 =[
  {cd:0, label:"0"},
  {cd:1, label:"1"},
];
var residue_0 =[
  {cd:0, label:"0"},
];
var residue = 0;
var pre_cnt = [0,0,0,0,0,0];
var pre_put = [0,0]
var targetArr;
//チーム名を変えられないようにする
const url = location.href;
const pk = url.slice(-1);
var select = document.getElementById("id_run");
var options = select.options;
for (var i = options.length - 1; 0 <= i; --i) {
	if(!options[i].selected) {
		select.removeChild(options[i]);
	}
}

//荷物をとる数の制限
//とった数によって神の手の選択肢を変えるようにする
document.getElementById("id_m2_count").addEventListener("change", 
  function() {
    var sel = document.getElementById("id_m2_count")
    if(sel.value == 0){
      targetArr = residue_3;
      pre_put[0] = 0;
    }else if(sel.value == 1){
      targetArr = residue_2;
      pre_put[0] = 1;
    }else if(sel.value == 2){
      targetArr = residue_1;
      pre_put[0] = 2;
    }else if(sel.value == 3){
      targetArr = residue_0;
      pre_put[0] = 3;
    }else{
      targetArr = new Array();
    }
  var selObj = document.getElementById('id_m2h_count');
  while(selObj.lastChild){
    selObj.removeChild(selObj.lastChild);
  }
  for(var i=0;i<targetArr.length;i++){
    let op = document.createElement("option");
    op.value = targetArr[i].cd;
    op.text = targetArr[i].label;
    selObj.appendChild(op);
  }
  document.getElementById('id_m2h_count').value = pre_cnt[1];
  pre_cnt[0] = document.getElementById('id_m2_count').value;
  residue = pre_put[0]+pre_put[1];
  });

document.getElementById("id_m2h_count").addEventListener("change", 
  function() {
    var sel = document.getElementById("id_m2h_count")
    if(sel.value == 0){
      targetArr = residue_3;
      pre_put[1] = 0;
    }else if(sel.value == 1){
      targetArr = residue_2;
      pre_put[1] = 1;
    }else if(sel.value == 2){
      targetArr = residue_1;
      pre_put[1] = 2;
    }else if(sel.value == 3){
      targetArr = residue_0;
      pre_put[1] = 3;
    }else{
      targetArr = new Array();
    }
  var selObj = document.getElementById('id_m2_count');
  while(selObj.lastChild){
    selObj.removeChild(selObj.lastChild);
  }
  for(var i=0;i<targetArr.length;i++){
    let op = document.createElement("option");
    op.value = targetArr[i].cd;
    op.text = targetArr[i].label;
    selObj.appendChild(op);
  }
  document.getElementById('id_m2_count').value = pre_cnt[0];
  pre_cnt[1] = document.getElementById('id_m2h_count').value;
  residue = pre_put[0]+pre_put[1];
  });

//荷物を置く数の制限
//合計で3になるように比較して調整
var m3 = document.getElementById('id_m3_count');
var m3_kami = document.getElementById('id_m3h_count');
var m4 = document.getElementById('id_m4_count');
var m4_kami = document.getElementById('id_m4h_count');
var m6 = document.getElementById('id_m6_count');
var m6_kami = document.getElementById('id_m6h_count');
function select_change(selObj){
  while(selObj.lastChild){
    selObj.removeChild(selObj.lastChild);
  }
  for(var i=0;i<targetArr.length;i++){
    let op = document.createElement("option");
    op.value = targetArr[i].cd;
    op.text = targetArr[i].label;
    selObj.appendChild(op);
  }
}

/*
document.getElementById("id_m3_count").addEventListener("change", 
  function() {
    residue = residue - document.getElementById("id_m3_count").value + pre_cnt[0]
    if(residue<0){
      alert("コンテナの数が合いません")
      residue = document.getElementById('id_m2h_count').value+document.getElementById('id_m2_count').value;
      document.getElementById("id_m3_count").value =0;
    }else{
      if(residue == 0){
        targetArr = residue_0;
      }else if(residue == 1){
        targetArr = residue_1;
      }else if(residue == 2){
        targetArr = residue_2;
      }else if(residue == 3){
        targetArr = residue_3;
      }else{
        targetArr = new Array();
      }
      select_change(m3_kami);
      select_change(m4);
      select_change(m4_kami);
      select_change(m6);
      select_change(m6_kami);
      pre_cnt[0] = document.getElementById('id_m3_count').value;
    }
});

document.getElementById("id_m3h_count").addEventListener("change", 
  function() {
    residue = residue - document.getElementById("id_m3h_count").value + pre_cnt[1]
    if(residue<0){
      alert("コンテナの数が合いません")
      residue = 3;
      document.getElementById("id_m3h_count").value =0;
    }else{
      if(residue == 0){
        targetArr = residue_0;
        pre_cnt[1]=3;
      }else if(residue == 1){
        targetArr = residue_1;
        pre_cnt[1]=2;
      }else if(residue == 2){
        targetArr = residue_2;
        pre_cnt[1]=1;
      }else if(residue == 3){
        targetArr = residue_3;
        pre_cnt[1]=0;
      }else{
        targetArr = new Array();
      }
      var m3 = document.getElementById('id_m3_count');
      var m4 = document.getElementById('id_m4_count');
      var m4_kami = document.getElementById('id_m4h_count');
      var m6 = document.getElementById('id_m6_count');
      var m6_kami = document.getElementById('id_m6h_count');
      select_change(m3);
      select_change(m4);
      select_change(m4_kami);
      select_change(m6);
      select_change(m6_kami);
    }
});
*/