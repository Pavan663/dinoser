$(document).ready(function(){
    console.log("loaded");
    setInterval(function(){
        $("#obstacles").append(
            $("<div class='obstacle'></div>").animate(
                {"right":"100%"},
                2000, "linear", function(){
                $(this).remove();
                }
            )
        );
    }, 2000);
    $(document).keypress(function(e){
        console.log("bgvfvjh");
        if(e.key ===" "){
            $('#trex')
            .animate({"bottom":"150px"},300)
            .animate({"bottom":"-20px"},300)
        }
    });
    setInterval(function(){
        var pp=$('#trex').position();
        $('#obstacles').children(".obstacle").each(
                function(){
                    var ob=$(this).position();
                    var px=pp.left + 50;
                    var py=pp.right + 60; 
                    if(ob.left < px && ob.left + 70 > px && ob.top < py && ob.top + 100 > py){
                        alert("You hit the cactus!");
                    }
                }
            )
    })
});