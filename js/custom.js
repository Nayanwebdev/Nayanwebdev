$(".slick-carousel").slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true, // Adds the dots on the bottom
    responsive: [{
        breakpoint: 1291,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    smartSpeed: 1000,
    responsive: [{
        breakpoint: 1291,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            adaptiveHeight: true
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }]
}, {
    breakpoint: 600,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
});
$('.autoplay-client').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    smartSpeed: 1000,
    responsive: [{
        breakpoint: 1291,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        }
    }]
});

$(document).ready(function() {
    $(".hidden").css("display", "none");

    $("#filter button").each(function() {
        $(this).on("click", function() {
            var filter = $(this).attr("class");

            if ($(this).attr("class") == "all") {
                $(".hidden").contents().appendTo("#posts").hide().show("slow");
                $("#filter button").removeClass("active");
                $(this).addClass("active");
                $("#filter button").attr("disabled", false);
                $(this).attr("disabled", true);
            } else {
                $(".post").appendTo(".hidden");
                $(".hidden").contents().appendTo("#posts").hide().show("slow");
                $(".post:not(." + filter + ")")
                    .appendTo(".hidden")
                    .hide("slow");
                $("#filter button").removeClass("active");
                $(this).addClass("active");
                $("#filter button").attr("disabled", false);
                $(this).attr("disabled", true);
            }
        });
    });
});

// Dropdown Menu

$('.navbar-menu ul .dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

/*----- MOBILE_MENU_START -----*/
$(".mobile-menu-icon-dbp").click(function() {
    $(".menu-toggle-btn-hp").toggleClass("open");
    $("body").toggleClass("sidebar-open-mob-dbp");
    $('body').addClass("reduce-sidebar-mob-dbp");
    //$("body").toggleClass("hide-scroll");
});

// counter js
$(document).ready(function() {
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 40);
    };

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});