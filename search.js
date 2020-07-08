$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     $.getJSON('result.json', function(data) {
      $.each(data, function(key, value){
       if (value.Name.search(expression) != -1 || value.Rollno.search(expression) != -1 || value.Branch.search(expression) != -1)
       {
        $('#result').append('<li class="list-group-item link-class"> '+value.Name+' | <span class="text-muted">'+value.Rollno+' | </span><span class="text-muted">'+value.Branch+' | </span><span class="text-muted">YEAR:'+value.Year+' | </span><span class="text-muted">CGPA:'+value.Cgpa+'  </span></li>');
       }
      });   
     });
    });
    
    $('#result').on('click', 'li', function() {
     var click_text = $(this).text().split('|');
     $('#search').val($.trim(click_text));
     $("#result").html('');
    });
   });