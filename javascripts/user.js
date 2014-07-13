(function ($) {
 $.ajax({
        dataType: 'json',
        url: 'http://localhost:3000/1/user',
        success: function (data){
          console.log(data);
          $('#userTemplate').tmpl(data).appendTo('#user_list');

        }
  });
})($);
