jQuery(function($)
        {
            $.scrollTo(0);
               
            $('#link1').click(function() { $.scrollTo($('#first-section'), 1000); });     
            $('#link2').click(function() { $.scrollTo($('#first-section'), 500); });     
            $('#link3').click(function() { $.scrollTo($('#second-section'), 500); });     
            $('#link4').click(function() { $.scrollTo($('#third-section'), 500); });       
            $('.link5').click(function() { $.scrollTo($('#first-section'), 500); });       
            $('.link6').click(function() { $.scrollTo($('#second-section'), 500); });       
            $('.link7').click(function() { $.scrollTo($('#third-section'), 500); });       
            
            $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });         
        }
        );
               
               $(window).scroll(function()
             {
                   
            }
            );   