$(document).ready(function(){
    $("#mycarousel").carousel({interval:2000});
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        }
        else{
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
    });

    //For Login Modal
    $('#showLogin').click(function(){
        $('#login').modal('toggle');
    });

    $("#closeLogin").click(function(){
        $("#login").modal('hide');
    });

    $("#cancelLogin").click(function(){
        $("#login").modal('hide');
    });

    //For Reserve a Table Modal
    $('#showReserve').click(function(){
        $('#reserveTable').modal('toggle');
    });

    $("#closeReserve").click(function(){
        $("#reserveTable").modal('hide');
    });

    $("#cancelReserve").click(function(){
        $("#reserveTable").modal('hide');
    });

});