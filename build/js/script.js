 $(document).ready(function(){

 
$('.grid').masonry({

     itemSelector: '.grid-item',
     columnWidth: 200
 });
 var elem = document.querySelector('.grid');
 var msnry = new Masonry(elem, {
     // options
     itemSelector: '.grid-item',
     columnWidth: 200
 });

 // element argument can be a selector string
 //   for an individual element
 var msnry = new Masonry('.grid', {
     // options
 });






  jQuery.ajaxSetup({
              xhr: function() {
                      //return new window.XMLHttpRequest();
                      try{
                          if(window.ActiveXObject)
                              return new window.ActiveXObject("Microsoft.XMLHTTP");
                      } catch(e) { }

                      return new window.XMLHttpRequest();
                  }
          });

  function imgGet(img) {

      if (img === undefined) {
        $.ajax({
          type: "GET",
          dataType: "json",
          cache: false,
          url: 'http://api.pixplorer.co.uk/image?word=beach&amount=7&size=tb',
          success: function(data) {
          console.log(data);
            var html = tmpl($('#grid-template').html(), data);

             $('.grid').remove();
             $('.galery').append(html);
          
          $(window).resize(function() {
           if ($(window).width() > 960) {
             var msnry = new Masonry('.grid', {
              itemSelector: '.grid-item',
                columnWidth: 50,
                gutter: 20
             
     
 });
           }
          else {
            $('.grid'). masonry({
              itemSelector: '.grid-item',
                columnWidth: 240,
                gutter: 20
               });
          }
         });

        }
        });
      } else $.ajax({
            type: "GET",
      dataType: "json",
      cache: false,
            url: 'http://api.pixplorer.co.uk/image?word=' + img + '&amount=7&size=tb',
        success: function(data) {
       console.log(data);
        
        var html = tmpl($('#grid-template').html(), data);
             $('.grid').remove();
             $('.galery').append(html);
         
          $(window).resize(function() {
           if ($(window).width() > 960) {
             $('.grid').masonry({
               itemSelector: '.grid-item',
                 columnWidth: 50,
                 gutter: 15
             });
           }
          else {
             $('.grid'). masonry({
              itemSelector: '.grid-item',
                columnWidth: 240,
                gutter: 20
            });
          }
         });

        }
        });
      }
     
$( '.search_partner').click(function( event ) {
    var img = $('#search').val();
    imgGet(img);
    event.preventDefault();
});
       imgGet();
});