function check(){
    var radioValue = 0;
    for (var i =1; i <=5; i++){
        selector = $("input[name = '" + i + "']:checked");
        if(Number(selector.val())==1)
        {
          radioValue=radioValue+ Number(selector.val());
        }
    }
    $("#p1").text("Your score is- "+radioValue+"/5");

}
