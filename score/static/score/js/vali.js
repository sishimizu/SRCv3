
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


var m2 = document.getElementById('id_m2_count');
var m2h = document.getElementById('id_m2h_count');
var m3 = document.getElementById('id_m3_count');
var m3h = document.getElementById('id_m3h_count');
var m4 = document.getElementById('id_m4_count');
var m4h = document.getElementById('id_m4h_count');
var m6 = document.getElementById('id_m6_count');
var m6h = document.getElementById('id_m6h_count');


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

//基地一秒ストップ
//荷物を取る
//荷物をとる（神の手）
//荷物を置く（MoonBase1）
//荷物を置く（MoonBase1）半分
//荷物を置く（MoonBase2）
//荷物を置く（MoonBase2）半分
//S字コースに移動
//荷物を置く（MoonBase3）
//荷物を置く（MoonBase3）半分
//MoonBase4に完全停止
//障害物回避する
//3周してスタートへ

//==============================================
//===「基地一秒ストップ」がクリックされたとき===
document.getElementById("id_m1_count").addEventListener("change", 
  function() {
		check_perfect();	//完全制覇チェック

});

//==============================================
//===「荷物を取る」がクリックされたとき===
document.getElementById("id_m2_count").addEventListener("change", 
  function() {
//荷物をとる数の制限
//とった数によって神の手の選択肢を変えるようにする
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

	check_block(m2);	//荷物のエラーチェック
	check_perfect();	//完全制覇チェック
});

//==============================================
//===「荷物をとる（神の手）」がクリックされたとき===
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

	check_block(m2h);	//荷物のエラーチェック
	check_perfect();	//完全制覇チェック
  });

//==============================================
//===「荷物を置く（MoonBase1）」がクリックされたとき===
document.getElementById("id_m3_count").addEventListener("change", 
  function() {
	check_block(m3);	//荷物のエラーチェック
	check_perfect();	//完全制覇チェック
});
//==============================================
//===「荷物を置く（MoonBase1）半分」がクリックされたとき===
document.getElementById("id_m3h_count").addEventListener("change", 
  function() {
	check_block(m3h);	//荷物のエラーチェック
	check_perfect();	//完全制覇チェック
});
//==============================================
//===「荷物を置く（MoonBase2）」がクリックされたとき===
document.getElementById("id_m4_count").addEventListener("change", 
  function() {
	check_block(m4);	//荷物のエラーチェック
	check_perfect();	//完全制覇チェック
});
//==============================================
//===「荷物を置く（MoonBase2）半分」がクリックされたとき===
document.getElementById("id_m4h_count").addEventListener("change", 
  function() {
	check_block(m4h);	//荷物のエラーチェック
	check_perfect();	//完全制覇チェック
});
//==============================================
//===「S字コースに移動」がクリックされたとき===
document.getElementById("id_m5_count").addEventListener("click", function() {
	if(document.getElementById("id_m5_count").checked){
		document.getElementById("id_bonus2_count").disabled = true;		//「3周してスタートへ」使用不可
		//スタート時とストップ時なら下2つの項目を使用可にするそうでなければ不可
		//if(score_mode == 1 || score_mode == 2){
			document.getElementById("id_m6_count").disabled = false;		//「荷物を置く（MoonBase3）」使用可
			document.getElementById("id_m6h_count").disabled = false;		//「荷物を置く（MoonBase3）半分」使用可
			document.getElementById("id_m7_count").disabled = false;		//「MoonBase4に完全停止」使用可
			document.getElementById("id_perfect").disabled = false;			//「完全制覇」使用可
		//}
	}else{
		document.getElementById("id_bonus2_count").disabled = false;	//「3周してスタートへ」使用可
		document.getElementById('id_m6_count').selectedIndex = 0;			//「荷物を置く（MoonBase3）」を0にする
		document.getElementById("id_m6_count").disabled = true;				//「荷物を置く（MoonBase3）」使用不可
		document.getElementById('id_m6h_count').selectedIndex = 0;		//「荷物を置く（MoonBase3）半分」を0にする
		document.getElementById("id_m6h_count").disabled = true;			//「荷物を置く（MoonBase3）半分」使用不可
		document.getElementById("id_m7_count").checked = false;				//「MoonBase4に完全停止」チェックを外す
		document.getElementById("id_m7_count").disabled = true; 			//「MoonBase4に完全停止」使用不可
		document.getElementById("id_perfect").disabled = true;				//「完全制覇」使用不可
	}
	check_block(m4h);	//荷物のエラーチェック
	check_perfect();	//完全制覇チェック
});
//==============================================
//===「荷物を置く（MoonBase3）」がクリックされたとき===
document.getElementById("id_m6_count").addEventListener("change", 
  function() {
	check_block(m6);	//荷物のエラーチェック
	check_perfect();	//完全制覇チェック
});
//==============================================
//===「荷物を置く（MoonBase3）半分」がクリックされたとき===
document.getElementById("id_m6h_count").addEventListener("change", 
  function() {
	check_block(m6h);	//荷物のエラーチェック
	check_perfect();	//完全制覇チェック
});
//==============================================
//===「MoonBase4に完全停止」がクリックされたとき===
document.getElementById("id_m7_count").addEventListener("change", 
  function() {
	check_perfect();	//完全制覇チェック
});

//==============================================
//===「障害物回避する」がクリックされたとき===

//==============================================
//===「3周してスタートへ」がクリックされたとき===
document.getElementById("id_bonus2_count").addEventListener("click", function() {
	if(document.getElementById("id_bonus2_count").checked){
		document.getElementById("id_m5_count").disabled = true;		//「S字コースに移動」使用不可
		document.getElementById("id_m5_count").checked = false;		//「S字コースに移動」チェックを外す
		document.getElementById('id_m6_count').selectedIndex = 0;	//「荷物を置く（MoonBase3）」を0にする
		document.getElementById("id_m6_count").disabled = true;		//「荷物を置く（MoonBase3）」使用不可
		document.getElementById('id_m6h_count').selectedIndex = 0;//「荷物を置く（MoonBase3）半分」を0にする
		document.getElementById("id_m6h_count").disabled = true;	//「荷物を置く（MoonBase3）半分」使用不可
		document.getElementById("id_perfect").disabled = true;   	//「完全制覇」使用不可
		document.getElementById("id_perfect").checked = false;   	//「完全制覇」チェックを外す
		document.getElementById("id_m7_count").disabled = true; 	//「MoonBase4に完全停止」使用不可
	}else{
		document.getElementById("id_m5_count").disabled = false;
	}
	check_block(m4h);	//荷物のエラーチェック
});



//***** 荷物のエラーチェック *****//
function check_block(selbox){
  let get_block = Number(m2.value)+ Number(m2h.value);
  let put_block = Number(m3.value)+Number(m3h.value)+Number(m4.value)+Number(m4h.value)+Number(m6.value)+Number(m6h.value);

  if(get_block>=put_block){
		//全部クリア
		document.getElementById('id_m2_count_error').style.visibility = "hidden";
		document.getElementById('id_m2h_count_error').style.visibility = "hidden";
		document.getElementById('id_m3_count_error').style.visibility = "hidden";
		document.getElementById('id_m3h_count_error').style.visibility = "hidden";
		document.getElementById('id_m4_count_error').style.visibility = "hidden";
		document.getElementById('id_m4h_count_error').style.visibility = "hidden";
		document.getElementById('id_m6_count_error').style.visibility = "hidden";
		document.getElementById('id_m6h_count_error').style.visibility = "hidden";
	}else if(document.getElementById(selbox.id).value == 0){
		//0にしたら他に関係なくエラーは消す
		document.getElementById(selbox.id + "_error").style.visibility = "hidden";
  }else{
		//selbox.value=0;
    document.getElementById(selbox.id + "_error").style.visibility = "visible";
  }


};

//***** 完全制覇チェック *****//
function check_perfect(){
	if(	//条件を全部ANDでチェック
		document.getElementById('id_m1_count').selectedIndex == 3 && 	//「基地一秒ストップ」が3
		document.getElementById('id_m2_count').selectedIndex == 3 && 	//「荷物を取る」が3
		document.getElementById('id_m2h_count').selectedIndex == 0 &&	//「荷物をとる（神の手）」が0
		document.getElementById('id_m3_count').selectedIndex == 1 && 	//「荷物を置く（MoonBase1）」が1
		document.getElementById('id_m3h_count').selectedIndex == 0 &&	//「荷物を置く（MoonBase1）半分」が0
		document.getElementById('id_m4_count').selectedIndex == 1 && 	//「荷物を置く（MoonBase2）」が1
		document.getElementById('id_m4h_count').selectedIndex == 0 &&	//「荷物を置く（MoonBase2）半分」が0
		document.getElementById('id_m5_count').checked == true &&			//「S字コースに移動」にチェックある
		document.getElementById('id_m6_count').selectedIndex == 1 && 	//「荷物を置く（MoonBase3）」が1
		document.getElementById('id_m6h_count').selectedIndex == 0 && //「荷物を置く（MoonBase3）半分」が0
		document.getElementById('id_m7_count').checked == true				//「MoonBase4に完全停止」にチェックある
 	){
		document.getElementById('id_perfect').checked = true;	//完全制覇にチェックする
	}else{
		document.getElementById('id_perfect').checked = false;//完全制覇にチェックしない
	}
};
