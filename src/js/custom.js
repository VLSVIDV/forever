$(function () {

    /*==========FOR SVG ==============*/
    svg4everybody();

    /*MODAL*/
    var modal=$(".modal"),
        btnModal = $(".btn-open"),
        btnCloseModal = $(".btn-close"),
        overLay = $(".modal-overlay");

    btnModal.on('click', function(event) {
        event.preventDefault();
        modal.addClass('open');
    });

    btnCloseModal.on('click', function(event) {
        event.preventDefault();
        modal.removeClass('open');
    });

    overLay.on('click', function(event) {
        event.preventDefault();
        modal.removeClass('open');
    });

    /*FOR MENU*/

    $('.burger').click(function (e) {
        e.preventDefault();
        $('#menu').addClass('open-menu');

    });

    $('.close-menu').click(function (e) {
        e.preventDefault();
        $('#menu').removeClass('open-menu');

    });



    //select

    $('select').selectBox({
        mobile: true,
        menuSpeed: 'fast'
    });

    /*==========FOR SVG ==============*/
    svg4everybody();



    /*VALIDATE*/

    //modal__form

    $(".modal__form").validate({

        rules: {
            rev: {
                required: true
            },
            name: {
                required: true
            },
            mail: {
                required: true
            }
        },
        messages: {
            rev: "Enter review",
            name: "Enter password",
            mail: "Enter email"
        }
    });


    $(".modal__form").validate({
        submitHandler: function(element) {
            $(".modal").addClass('validate');
            $('.modal-thanks').addClass('open');
        }
    });

    //footer-block__form

    $(".footer-block__form").validate({

        rules: {
            mail: {
                required: true
            }
        },
        messages: {
            mail: "Enter email"
        }
    });

    //form_contacts

    $(".form_contacts").validate({

        rules: {
            subj: {
                required: true
            },
            name: {
                required: true
            },
            mail: {
                required: true
            }
        },
        messages: {
            subj: "Enter subject",
            name: "Enter name",
            mail: "Enter email"
        }
    });

    //form_login

    $(".form_login").validate({

        rules: {
            name: {
                required: true
            },
            pass: {
                required: true
            }
        },
        messages: {
            name: "Enter name or email",
            pass: "Enter password"
        }
    });

    //form_billing

    $(".form_checkout").validate({

        rules: {
            name1: {
                required: true
            },
            address: {
                required: true
            },
            name2: {
                required: true
            },
            company: {
                required: true
            },
            city: {
                required: true
            },
            mail: {
                required: true
            },
            country: {
                required: true
            },
            phone: {
                required: true
            },
            postcode: {
                required: true
            }
        },
        messages: {
            name1: "Enter first name",
            address: "Enter address",
            name2: "Enter last name",
            company: "Enter company name",
            city: "Enter city",
            mail: "Enter email",
            country: "Enter country",
            phone: "Enter phone",
            postcode: "Enter postcode"
        }
    });

    //product-inner__form

    $(".product-inner__form").validate({

        rules: {
            area: {
                required: true
            },
            name: {
                required: true
            },
            mail: {
                required: true
            }
        },
        messages: {
            name: "Enter name",
            mail: "Enter email",
            area: "Enter review"
        }
    });

    /*MODAL*/
    var modal=$(".modal"),
        btnModal = $(".btn-open"),
        btnCloseModal = $(".btn-close"),
        overLay = $(".modal-overlay");

    btnModal.on('click', function(event) {
        event.preventDefault();
        modal.addClass('open');
    });

    btnCloseModal.on('click', function(event) {
        event.preventDefault();
        modal.removeClass('open');
    });

    overLay.on('click', function(event) {
        event.preventDefault();
        modal.removeClass('open');
    });

    /*----------------------------------------
     TRANSITION SCROLL
     ----------------------------------------*/
    $('.scroll').on("click", function(e) {
        // e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
    });

    // slider - 1
    $('.js-slider').slick({
        arrows:false,
        autoplay:false,
        dots:true
    });

    // slider - 1
    $('.js-products').slick({
        arrows:true,
        dots:false,
        responsive: [
            {
                breakpoint: 6000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



});


/*ACCORDEON*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        console.log(panel.style.display);

        if (panel.style.display === "block" || !panel.style.display) {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// basket-number

var basketBtnPlus = document.getElementsByClassName("basket__btn_plus");

for (i = 0; i < basketBtnPlus.length; i++) {
    basketBtnPlus[i].addEventListener("click", function(e) {
        var number = this.closest('.basket-quan').querySelector('.basket-quan__number');
        var quan = number.innerHTML;

        number.innerHTML = ++quan;
    });
}

var basketBtnMinus = document.getElementsByClassName("basket__btn_minus");

for (i = 0; i < basketBtnMinus.length; i++) {
    basketBtnMinus[i].addEventListener("click", function(e) {
        var number = this.closest('.basket-quan').querySelector('.basket-quan__number');
        var quan = number.innerHTML;

        if (quan > 0) {
            number.innerHTML = --quan;
        }

    });
}
