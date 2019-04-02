$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-trans]:checked").each(function(){
      var  workTransMode = $(this).val();
      $("#work-responses").append(workTransMode + "<br>");
    });

    $("#fun-responses").show();
    $("input:checkbox[name=fun-trans]:checked").each(function() {
      var funTransMode = $(this).val();
      $("#fun-responses").append(funTransMode + "<br>");
    });
    $("#survey").hide();

  });
});
