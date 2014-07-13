(function ($) {
    $.ajax({
        dataType: 'json',
        //url: 'http://www.mokoversity.com/1/post/tags/fullstack',
        url: 'http://booklog.io/1/post',
        //url: 'http://localhost:3000/1/post',
        success: function (data){
        	$('#postTemplate').tmpl(data.posts).appendTo('#content');

        	var subjects = $('[id=subject]');
    			$.each( subjects, function(index,obj){
    				console.log(obj);
    				var id = $(obj).data("id");
    				$(obj).click(function(){
    						var targeturl ='http://booklog.io/1/post/' + id; 
  						console.log(targeturl);
  						$.ajax({
  							dataType: 'json',
  							url: targeturl,
  							success: function(data){
  								//console.log(targeturl);
  								var html = '<h1>';
  								html += data.post.content;
  								html += '</h1>'; 
  								var contents= $('.innerContent');
  								contents[index].innerHTML = html;  
  							}
  						})  ;	
    				});
			   });
		  }
    });


 $.ajax({
        dataType: 'json',
        url: 'http://localhost:3000/1/user',
        success: function (data){
          console.log(data);
          $('#userTemplate').tmpl(data.posts).appendTo('#user_list');

        }
  });



})($);
