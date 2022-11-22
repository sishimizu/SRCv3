//あべさん阿部さん改良版
// タイマー部
let stop;
let progress;
let addition = 0;
const record = document.querySelector("input#id_clear_time");
// カウンター
function timer() {
const start = new Date().getTime();
stop = setInterval(function() {
progress = new Date().getTime() - start + addition;
const noms = progress / 1000;
const millisecond = progress ? ("0" + String(noms).split(".")[1]).slice(-2) : "00";
const nos = Math.trunc(noms);
const second = nos ? ("0" + (nos % 86400 % 3600 %60)).slice(-2) : "00";
const minute = nos >= 60 ? ("0" + Math.trunc(nos % 86400 % 3600 / 60)).slice(-2) : "00";
const hour = nos >= 360 ? ("0" + Math.trunc(nos % 86400 / 3600)).slice(-2) : "00";
if (progress < 240000) {
  record.value =  minute + ":" + second + "." + millisecond;
}else {
  record.value = "time over"; }}, 10);
}
// ボタン部
const startButton = document.querySelector("button.start");
const stopButton = document.querySelector("button.stop");
const submit = document.getElementById("send");
//---------------- ここから下を書き換えてます -------------------//
//初期化時：
//スタート時：
//ストップ時：各項目は変更可(レース後に入力＆確認する)
//※スタート後にストップしたら送信可能になる？(間違いタップ防止)
//リセット時：初期化＋値も初期化
//送信ボタンを押したら自動的に順位ページに移動


stopButton.disabled = true;
record.disabled = true;

let score_mode = 0;			//モード設定 リセット：0 スタート:1 ストップ:2
Disnable_Elements(1,0);	//画面初期化時に各項目を使用不可にする
//遷移元のページでボタンの押せる押せないを決める
var ref = document.referrer

const msg = document.getElementById("error_msg");
var now_ref =location.href
if (ref.indexOf('http://127.0.0.1:8000/confirm') !== -1 ||now_ref =='http://127.0.0.1:8000/confirm') {
	Enable_All_Elements();
	console.log('再入力')
}else if(ref.indexOf('http://127.0.0.1:8000/') !== -1){
	Disnable_Elements();
	console.log("チームからきた");
}

// スタートボタンがクリックされた
startButton.addEventListener("click", function() {
progress = 0; timer(); startButton.disabled = true; stopButton.disabled = false;
Enable_Elements();		//項目を使用可にする
score_mode = 1;
});

// ストップボタンがクリックされた 各項目は操作可能のまま
//ストップボタンを押したら送信可能にする？
stopButton.addEventListener("click", function() {
	clearInterval(stop); addition = progress; startButton.disabled = true; stopButton.disabled = true;
	document.getElementById("send").disabled = false;	//「送信」使用可
	Enable_All_Elements(); //要素をすべて変更可能に
//	document.getElementById("id_m6_count").disabled = false;			//「荷物を置く（MoonBase3）」使用可
//	document.getElementById("id_m6h_count").disabled = false;	//「荷物を置く（MoonBase3）半分」使用可
	score_mode = 2;
});

//送信ボタンが押された
submit.addEventListener("click", function() {
	startButton.disabled = false;
});


function Enable_Elements(){
//走行、チーム名はスタート前でも操作可能にする
	document.getElementById("id_m1_count").disabled = false;			//「基地一秒ストップ」使用可
	document.getElementById("id_m2_count").disabled = false;			//「荷物を取る」使用可
	document.getElementById("id_m2h_count").disabled = false;	//「荷物をとる（神の手）」使用可
	document.getElementById("id_m3_count").disabled = false;			//「荷物を置く（MoonBase1）」使用可
	document.getElementById("id_m3h_count").disabled = false;	//「荷物を置く（MoonBase1）半分」使用可
	document.getElementById("id_m4_count").disabled = false;			//「荷物を置く（MoonBase2）」使用可
	document.getElementById("id_m4h_count").disabled = false;	//「荷物を置く（MoonBase2）半分」使用可
//document.getElementById("id_m5_count").disabled = ;						//「S字コースに移動」


	document.getElementById("id_bonus1_count").disabled = false;			//「障害物回避する」使用可
//document.getElementById("id_bonus2_count").disabled = ;						//「3周してひょうたん..」
	document.getElementById("id_perfect").disabled = false;			//「完全制覇」使用可

//S字コースなら下2つ許可
	if(document.getElementById("id_m5_count").checked){
		document.getElementById("id_m6_count").disabled = false;		//「荷物を置く（MoonBase3）」使用可
		document.getElementById("id_m6h_count").disabled = false;//「荷物を置く（MoonBase3）半分」使用可
		document.getElementById("id_m7_count").disabled = false;			//「MoonBase4に完全停止」使用可
	}else{
		document.getElementById("id_m6_count").disabled = true;			//「荷物を置く（MoonBase3）」使用不可
		document.getElementById("id_m6h_count").disabled = true;	//「荷物を置く（MoonBase3）半分」使用不可
		document.getElementById("id_m7_count").disabled = true;			//「MoonBase4に完全停止」使用可
	}
};

function Disnable_Elements(){
//各項目を使用不可に。S字と3周は使用可にする
	document.getElementById("id_m1_count").disabled = true;			//「基地一秒ストップ」使用不可
	document.getElementById("id_m2_count").disabled = true;			//「荷物を取る」使用不可
	document.getElementById("id_m2h_count").disabled = true;	//「荷物をとる（神の手）」使用不可
	document.getElementById("id_m3_count").disabled = true;			//「荷物を置く（MoonBase1）」使用不可
	document.getElementById("id_m3h_count").disabled = true;	//「荷物を置く（MoonBase1）半分」使用不可
	document.getElementById("id_m4_count").disabled = true;			//「荷物を置く（MoonBase2）」使用不可
	document.getElementById("id_m4h_count").disabled = true;	//「荷物を置く（MoonBase2）半分」使用不可
	document.getElementById("id_m5_count").disabled = false;		//「S字コースに移動」使用可
	document.getElementById("id_m6_count").disabled = true;			//「荷物を置く（MoonBase3）」使用不可
	document.getElementById("id_m6h_count").disabled = true;	//「荷物を置く（MoonBase3）半分」使用不可
	document.getElementById("id_m7_count").disabled = true;			//「MoonBase4に完全停止」使用不可
	document.getElementById("id_bonus1_count").disabled = true;			//「障害物回避する」使用不可
	document.getElementById("id_bonus2_count").disabled = false;		//「3周してひょうたん..」使用可
	document.getElementById("id_perfect").disabled = true;		//「完全制覇」使用不可
	document.getElementById("send").disabled = true;			//「送信」使用不可
};

//戻ったときにすべて編集可能にしておく
function Enable_All_Elements(){
	document.getElementById("id_m1_count").disabled = false;
	document.getElementById("id_m2_count").disabled = false;
	document.getElementById("id_m2h_count").disabled = false;
	document.getElementById("id_m3_count").disabled = false;
	document.getElementById("id_m3h_count").disabled = false;
	document.getElementById("id_m4_count").disabled = false;
	document.getElementById("id_m4h_count").disabled = false;
	document.getElementById("id_m5_count").disabled = false;
	document.getElementById("id_m6_count").disabled = false;
	document.getElementById("id_m6h_count").disabled = false;
	document.getElementById("id_m7_count").disabled = false;
	document.getElementById("id_bonus1_count").disabled = false;
	document.getElementById("id_bonus2_count").disabled = false;
	document.getElementById("id_perfect").disabled = false;
	document.getElementById("id_clear_time").disabled = false;
	document.getElementById("send").disabled = false;
};

function Reset_Elements(){
//値を初期化する
//セレクトボックスは0番目の値にする
//チェックボックスはチェックしてない状態にする
	document.getElementById("id_m1_count").selectedIndex = 0;			//「基地一秒ストップ」
	document.getElementById("id_m2_count").selectedIndex = 0;			//「荷物を取る」
	document.getElementById("id_m2h_count").selectedIndex = 0;	//「荷物をとる（神の手）」
	document.getElementById("id_m3_count").selectedIndex = 0;			//「荷物を置く（MoonBase1）」
	document.getElementById("id_m3h_count").selectedIndex = 0;	//「荷物を置く（MoonBase1）半分」
	document.getElementById("id_m4_count").selectedIndex = 0;			//「荷物を置く（MoonBase2）」
	document.getElementById("id_m4h_count").selectedIndex = 0;	//「荷物を置く（MoonBase2）半分」
	document.getElementById("id_m5_count").checked = false;				//「S字コースに移動」
	document.getElementById("id_m6_count").selectedIndex = 0;			//「荷物を置く（MoonBase3）」
	document.getElementById("id_m6h_count").selectedIndex = 0;	//「荷物を置く（MoonBase3）半分」
	document.getElementById("id_m7_count").checked = false;				//「MoonBase4に完全停止」
	document.getElementById("id_bonus1_count").selectedIndex = 0;			//「障害物回避する」
	document.getElementById("id_bonus2_count").checked = false;				//「3周してひょうたん..」
	document.getElementById("id_perfect").checked = false;			//「完全制覇」

};




