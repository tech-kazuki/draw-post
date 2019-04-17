$(document).on('turbolinks:load', function() {

    $('.menuicon').on('mouseover', function(){
        $(this).css('opacity', '0.8');
    }).on('mouseout', function(){
        $(this).css('opacity', '1.0');
    });

  var canvas = document.getElementById('draw-area');
  if (canvas) {

    var defosize = 7;
    var defocolor = "#555555";
    var defoalpha = 1.0;
    var mouseX = "";
    var mouseY = "";

    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 700, 500);

    canvas.addEventListener('mousemove', onMove, false);
    canvas.addEventListener('mousedown', onClick, false);
    canvas.addEventListener('mouseup', drawEnd, false);
    canvas.addEventListener('mouseout', drawEnd, false);

    function onMove(e) {
        if (e.buttons === 1 || e.witch === 1) {
            var rect = e.target.getBoundingClientRect();
            var X = ~~(e.clientX - rect.left);
            var Y = ~~(e.clientY - rect.top);
            //draw 関数にマウスの位置を渡す
            draw(X, Y);
        };
    };

    function onClick(e) {
        if (e.button === 0) {
            var rect = e.target.getBoundingClientRect();
            var X = ~~(e.clientX - rect.left);
            var Y = ~~(e.clientY - rect.top);
            //draw 関数にマウスの位置を渡す
            draw(X, Y);
        }
    };

    function draw(X, Y) {
        ctx.beginPath();
        ctx.globalAlpha = defoalpha;
        //マウス継続値によって場合分け、直線の moveTo（スタート地点）を決定
        if (mouseX === "") {
            //継続値が初期値の場合は、現在のマウス位置をスタート位置とする
            ctx.moveTo(X, Y);
        } else {
            //継続値が初期値ではない場合は、前回のゴール位置を次のスタート位置とする
            ctx.moveTo(mouseX, mouseY);
        }
        //lineTo（ゴール地点）の決定、現在のマウス位置をゴール地点とする
        ctx.lineTo(X, Y);
        //直線の角を「丸」、サイズと色を決める
        ctx.lineCap = "round";
        ctx.lineWidth = defosize * 2;
        ctx.strokeStyle = defocolor;
        ctx.stroke();
        //マウス継続値に現在のマウス位置、つまりゴール位置を代入
        mouseX = X;
        mouseY = Y;
    };

    //左クリック終了、またはマウスが領域から外れた際、継続値を初期値に戻す
    function drawEnd() {
        mouseX = "";
        mouseY = "";
        let imageUrl = canvas.toDataURL();
        let input = document.getElementById('picture_image');
        input.value = imageUrl;
    };

    //メニューのアイコン関係
    var menuIcon = document.getElementsByClassName("menuicon");
    for (i = 0; i < menuIcon.length; i++) {
        menuIcon[i].addEventListener("click", canvasMenu, false)
    }

    //メニューボタン管理
    function canvasMenu() {
        //id 値によって場合分け
        var thisId = this.id;
        if (thisId.indexOf("size") + 1) {
            defosize = this.id.slice(4);
        }
        if (thisId.indexOf("color") + 1) {
            defocolor = "#" + this.id.slice(5);
        }
        if (thisId.indexOf("alpha") + 1) {
            defoalpha = (this.id.slice(5)) / 10;
        }
        if (thisId.indexOf("fill") + 1) {
            ctx.fillStyle = defocolor;
            ctx.fillRect(0, 0, 700, 500);
        }
        if (thisId.indexOf("clear") + 1) {
            //全消しボタン、OKされた場合は fillRect 長方形で覆います
            if (confirm("すべて消去しますか？")) {
                ctx.beginPath();
                ctx.fillStyle = "#fff";
                ctx.globalAlpha = 1.0;
                ctx.fillRect(0, 0, 700, 500);
            }
        }
    }
  }
});