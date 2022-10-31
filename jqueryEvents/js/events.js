$(document).ready(function(){
    // Step 1
    $("#clickButton").click(function() {
        window.alert("Button 1 has been clicked!");
    });

    // Step 2
    $("#bindButton").bind("click", function() {
        window.alert("Button 2 has been clicked!");
    });

     // Step 3
     $("#onButton").on("click", function() {
        window.alert("Button 3 has been clicked!");
    });

    // Step 4
    $("body").on({
        click: function() {
            window.alert("One of the button of step 4 has been clicked!");
        }
    }, ".step4_btn");

    // Step 5
    $("#div1").css({ "width" : "400px" , "height":"400px", "background": "gray" });
    $("#div1").on({
        click: function() {
            window.alert("div was clicked!");
        },
        mouseenter: function() {
            window.alert("Mouse entered the div!");
        },
        mouseleave: function() {
            window.alert("Mouse left the div!");
        }
    });

    // Step 6
    $("#div1").css({ "width" : "400px" , "height":"400px", "background": "gray" });
    $("#div1").on({
        click: function(event) {
            $("span").html(event.target.nodeName + " was clicked!");
        },
        mouseenter: function(event) {
            $("span").html("User enterd " + event.target.nodeName);
        },
        mouseleave: function(event) {
            $("span").html("User left " + event.target.nodeName);
        }
    });

    // Step 7
    $("a").click( function(event) {
        event.preventDefault();
        $("this").css("color", "red");
        window.alert(event.target.nodeName + " triggered the event!");
    });

     // Step 8
     $(window).resize(function() {
        $("#step8").text("Width: " + $(window).width() + "px, Height: " + $(window).height() + "px.");
    });

     // Step 9 
    $("#text").on({
        focus: function() {
            $("#text").css("background", "lightgray");
        },
        focusout: function() {
            $("#text").css("background", "white");
        }
   });

    // Step 10
    // as soon as user starts typing name
    // we want to reset the border color to normal
    $("#name").on({
        change: function() {
            $("#name").css("border", "1px solid");
        },
    });

    // as soon as user starts typing email
    // we want to reset the border color to normal
    $("#email").on({
        change: function() {
            $("#email").css("border", "1px solid");
        },
    });

    
   $("#mySubmit").on("click", function(event) {
        // prevent default browser reload on submit
        event.preventDefault();

        var name= $("#name").val();
        var email = $("#email").val();

        if(name === "") {
            alert("Name is required!");
            // invalid name, set red border
            $("#name").css("border", "3px solid red");
        } else {
            // valid name, set green border
            $("#name").css("border", "3px solid green");
        }
        if(email === "") {
            alert("Email is required!");
            // invalid email, set red border
            $("#email").css("border", "3px solid red");
        } else {
            // valid email, set green border
            $("#email").css("border", "3px solid green");
        }
    });
});