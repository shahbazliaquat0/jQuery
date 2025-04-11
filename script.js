
// hide element on click 

// $(document).ready(function(){
//     $(".hide-that").click(function(){
//         $("h2").hide();
//     });
// });


// show element on click 

// $(document).ready(function(){
//     $(".show-that").click(function(){
//         $("h2").show();
//     });
// });

// toggle element

// $(document).ready(function(){
//     $(".hide-that").click(function(){
//         $("h2").toggle();
//     });
// });


// fade in / fade out / toggle fade

// fade in
    // $(document).ready(function(){
    //     $("button").click(function(){
    //         $(".first").fadeIn("fast");
    //         $(".second").fadeIn("slow");
    //         $(".third").fadeIn(2000);
    //         $(".fourth").fadeIn(5000);
    //     });
    // });

    // fade out
    $(document).ready(function(){
        $("button").click(function(){
            $(".first").fadeOut(2000);
            $(".second").fadeOut(1000);
            $(".third").fadeOut(500);
            $(".fourth").fadeOut("fast");
        });
    });
