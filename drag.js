function drag(box){
    var box = document.querySelector(box);

    var parent = box.parentNode;

    box.addEventListener("mousedown",down);

    var mouse = {
        x:0,
        y:0
    };
    var boxLocation = {
        l:0,
        y:0
    };

    function down(e){
        mouse.x = e.clientX;
        boxLocation.l = box.offsetLeft;

        document.addEventListener("mousemove",move);
        document.addEventListener("mouseup",up);
    }

    function move(e){
        var disX = e.clientX - mouse.x;
        var nowL = boxLocation.l + disX;


        var wrapRect = parent.getBoundingClientRect();
        var boxRect = box.getBoundingClientRect();
        //限制范围 xianzhilefamwei
        if(nowL < wrapRect.left + parent.clientLeft){
            nowL = wrapRect.left + parent.clientLeft;
        } else if(nowL > wrapRect.right - boxRect.width - parent.clientLeft){
            nowL = wrapRect.right - boxRect.width - parent.clientLeft;
        }


        box.style.left = nowL +'px';
    }

    function up(){
        document.removeEventListener("mousemove",move);
        document.removeEventListener("mouseup",up);
    }
}
