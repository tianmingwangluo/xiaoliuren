//社会主义核心价值观js
var a_idx = 0;
		var b_idx = 0;
		$(document).ready(function($){
		
		    /**
		     * 富强民主文明和谐
		     */
		    $("body").click(function(e) {
		        var a = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善", "手麻了", "歇会儿"];
		        var b = ["#fe6673", "#2ae0c8", "#acf6ef", "#fad8be", "#bdf3d4"];
		        var $i = $("<span/>").text(a[a_idx]);
		        a_idx = (a_idx + 1) % a.length;
		        var x = e.pageX,
		            y = e.pageY;
		        $i.css({
		            "z-index": 9999,
		            "top": y - 20,
		            "left": x,
		            "position": "absolute",
		            "font-weight": "bold",
		            "color": b[b_idx]
		        });
		        b_idx = (b_idx + 1) % b.length;
		        $("body").append($i);
		        $i.animate({
		            "top": y - 180,
		            "opacity": 0
		        },
		        1500,
		        function() {
		            $i.remove();
		        });
		    });
		});