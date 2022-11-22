
//====================================================================-

var drawing = false;
// 前回の座標を記録する（初期値：０）
var before_x = 0;
var before_y = 0;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//背景色を指定する(しないと黒？)
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillRect(0,0,500, 300);

canvas.addEventListener('mousemove', draw_canvas);


//******** マウスをクリックしてる時 ********
canvas.addEventListener('mousedown', function(e) {
		drawing = true;
		var rect = e.target.getBoundingClientRect();
		before_x = e.clientX - rect.left;
		before_y = e.clientY - rect.top;
	});

//******** マウスをクリックしてない時 ********
canvas.addEventListener('mouseup', function() {
		drawing = false;
});

//******** 描画の処理 ********
function draw_canvas(e) {
	// drawingがtrueじゃなかったら返す
	if (!drawing){
		return
	};
	var rect = e.target.getBoundingClientRect();
	var x = e.clientX - rect.left;
	var y = e.clientY - rect.top;
	var w = 2;
	var r   = 0;
	var g = 0;
	var b  = 0;
	// 描画
	ctx.lineCap = 'round';
	ctx.strokeStyle = 'rgb('+ r + ',' + g + ',' + b + ')';
	ctx.lineWidth = w;
	ctx.beginPath();
	ctx.moveTo(before_x, before_y);
	ctx.lineTo(x, y);
	ctx.stroke();
	ctx.closePath();
	// 描画最後の座標を前回の座標に代入する
	before_x = x;
	before_y = y;
}

//******** 全消しボタンがクリックされた時 ********
document.getElementById("clear-button").addEventListener("click", 
  function() {
		ctx.fillRect(0,0,500, 300);
});


