$(document).ready(function() {
    $(".buton-show-link").click(function() {
        $(".link-header-content").css("right", "0%");
    })
    
    $(".link-header-content").click(function() {
        $(".link-header-content").css("right", "-100%");
    })
    $(".show-search").click(function() {
        $(".form-search-header").css("top", "0%");
    })
    $(".exeit-search").click(function() {
        $(".form-search-header").css("top", "-23%");
    })
    $(".links-header").click(function(e) {
        e.stopPropagation()
    })

    $(".allsections-box").click(function() {
        $(this).addClass("active-allsections");
        $(this).siblings(".active-allsections").removeClass("active-allsections");
    })


    $(".eye-passord").click(function() {
        $(this).toggleClass("fa-eye-slash fa-eye")
        if ($(this).hasClass("fa-eye-slash")) {
            $(this).siblings(".input-login").attr("type", "password");
        } else {
            $(this).siblings(".input-login").attr("type", "text");
        }
    })

    $(".contanue-code").click(function(e) {
        e.preventDefault();
        $(".form-logon-2").show();
        $(".form-logon-1").hide();
    })


    $(".clickto-code").click(function(e) {
        e.preventDefault();
        $(".form-logon-2").hide();
        $(".form-logon-3").show();
    })

    $(".exeit-form-code").click(function(e) {
        e.preventDefault();
        $(".form-logon-3").hide();
        $(".form-logon-1").show();
        $(".form-logon-5").hide();
    })

    $(".exeit-form-login").click(function(e) {
        e.preventDefault();
        $(".form-logon-2").hide();
        $(".form-logon-1").show();
    })

    $(".forgot-password").click(function(e) {
        e.preventDefault();
        $(".form-logon-1").hide();
        $(".form-logon-4").show();
    })

    $(".exit-form-number").click(function(e) {
        e.preventDefault();
        $(".form-logon-1").show();
        $(".form-logon-4").hide();
    })

    $(".form-code-number").click(function(e) {
        e.preventDefault();
        $(".form-logon-4").hide();
        $(".form-logon-5").show();
    })

    $(".contanue-pass").click(function(e) {
        e.preventDefault();
        $(".form-logon-5").hide();
        $(".form-logon-6").show();
    })

    $(".show-popup-login").click(function(e) {
        e.preventDefault();
        $(".popup").fadeIn();
    })

    $(".hide-popup-login").click(function(e) {
        e.preventDefault();
        $(".popup").fadeOut();
        $(".form-logon-6").hide();
        $(".form-logon-1").show();
    })

    $(".toggle-like").click(function() {
        $(".thumbs-gall").toggleClass("fa-regular fa-solid");
    })

    $(".toggle-love").click(function() {
        $(".heart-gall").toggleClass("fa-regular fa-solid");
    })

    $(".button-chose-tshirt").click(function() {
        $(this).addClass("actvie-chose-tshirt");
        $(this).siblings().removeClass("actvie-chose-tshirt");
    })

    $(".submit-chose-tshirt").click(function(e) {
        e.preventDefault();
        $(".popup-chose-tshirt").hide();
        $(".popup-chose-mony").show();
    })

    $(".pull-mony").click(function(e) {
        e.preventDefault();
        $(".popup-chose-mony").hide();
        $(".popup-done-mony").show();
    })

    $(".exit-popup-gallery").click(function() {
        $(".popup").fadeOut()
    })

    $(".popup-exchange").click(function() {
        $(".popup-exchange-elment").fadeIn();
    })

    $(".popup").click(function() {
        $(this).fadeOut()
    })
    $(".popup-box").click(function(e) {
        e.stopPropagation()
    })

    $(".toggle-Report").click(function() {
        $(".popup-Report").fadeIn()
    })

    $(".mony-sotorage").click(function() {
        localStorage.setItem("monystorage", "mony")
    })

    $(".rotate-storage-link").click(function() {
        localStorage.setItem("monystorage", "rotete")
    })

    if(localStorage.getItem("monystorage") == "mony") {
        $(".dollar-storage").show();
        $(".rotate-storage").hide();
        $(".time-gall").show();
    } else {
        $(".dollar-storage").hide();
        $(".rotate-storage").show();
        $(".time-gall").hide();
    }

    let inputfile = $(".inputchange-profile")
    inputfile.change(function(e) {
        let preview = $(".user-profile");
        let reader = new FileReader();
        reader.onload = function () {
            preview.prop("src", reader.result);
        };  
        reader.readAsDataURL(e.target.files[0]);
    })


    $(".button-harassment button").click(function() {
        $(this).addClass("button-harassment-active");
        $(this).siblings().removeClass("button-harassment-active")
    })


    $(".select-harassment").change(function() {
        localStorage.setItem("select", $(this).val())
        if ($(this).val() == "2") {
            $(".harassment-box .item").text("طلب بدل")
        } else {
            $(".harassment-box .item").text("طلب نقدي")
        }
    })

    if(localStorage.getItem("select") == "1") {
        $(".dollar-consent").show()
    } else {
        $(".rotate-consent").show()
        $(".dollar-consent").hide()

    }

    $(".new-orderbtn").click(function() {
        let buttonharassment = $(".harassment-content");
        $(buttonharassment[6]).parent().parent().show();
        $(buttonharassment[5]).parent().parent().show();
        $(buttonharassment[4]).parent().parent().show();
        $(buttonharassment[3]).parent().parent().show();
        $(".sender-box-2").hide()
        $(".sender-box-1").show()
        $(".edit-inhert-gall").show()
        $(".section-gallery").show()
        $(".section-inhert").hide()
    })

    $(".current-orderbtn").click(function() {
        let buttonharassment = $(".harassment-content");
        $(buttonharassment[6]).parent().parent().hide();
        $(buttonharassment[5]).parent().parent().hide();
        $(buttonharassment[4]).parent().parent().hide();
        $(buttonharassment[3]).parent().parent().hide();
        $(".sender-box-2").hide()
        $(".sender-box-1").show()
        $(".edit-inhert-gall").hide()
        $(".section-gallery").show()
        $(".section-inhert").hide()
    })

    $(".finished-orderbtn").click(function() {
        let buttonharassment = $(".harassment-content");
        $(buttonharassment[6]).parent().parent().hide();
        $(buttonharassment[5]).parent().parent().hide();
        $(buttonharassment[4]).parent().parent().hide();
        $(buttonharassment[3]).parent().parent().show();
        $(".sender-box-2").show()
        $(".sender-box-1").hide()
        $(".section-gallery").hide()
        $(".section-inhert").show()
    })


    setTimeout(function() {
        $(".submit-consent").show()
        $(".open-schat-content").show()
        $(".advertisers-done-settimeout").show()
        $(".waiting-toggle").hide()
    },2000)

    $(".submit-consent, .button-width-small").click(function() {
        $(".popup").fadeIn();
    })

    $(".done-consent").click(function() {
        $(".popup").fadeOut();
        $(".text-true").text("تم الانتهاء والاتفاق بنجاح")
        $(".mony-waiting").hide()
        $(".submit-consent").hide()
        $(".buttons-notification").hide()
    })

    $(".btnno-consent").click(function() {
        $(".advertisers-done").hide();
        $(".advertisers-eror").show();
        $(".popup").fadeOut();
        $(".submit-consent").hide()
        $(".advertisers-done-two").hide()
        $(".buttons-notification").hide()
    })

    $(".remove-content").click(function(e) {
        e.preventDefault()
        $(".waiting-advertisers").hide()
    })

    $(".button-number").click(function(e) {
        e.preventDefault()
        $(".form-seating-1").hide()
        $(".form-seating-2").show()
    })

    $(".btn-seating-code").click(function(e) {
        e.preventDefault()
        $(".form-seating-4").show()
        $(".form-seating-3").hide()
    })

    $(".button-formseating-2").click(function(e) {
        e.preventDefault()
        $(".form-seating-3").show()
        $(".form-seating-2").hide()
    })
    $(".show-popup-acount").click(function(e) {
        e.preventDefault()
        $(".popup").fadeIn()
        $(".popup-box h6").text("تم تغيير رقم الجوال بنجاح")
    })

    $(".hide-popup-seating").click(function() {
        $(".popup").fadeOut();
        $(".form-seating-4").hide()
        $(".form-seating-1").show()
        $(".form-seating-5").hide()
    })

    $(".button-password").click(function(e) {
        e.preventDefault()
        $(".form-seating-1").hide()
        $(".form-seating-5").show()
    })

    $(".popup-acount-pass").click(function(e) {
        e.preventDefault()
        $(".popup").fadeIn();
        $(".popup-box h6").text("تم تغيير كلمه المرور بنجاح")
    })


    $(".button-toggle").click(function(e) {
        e.preventDefault()
        $(".subsection").fadeIn()
    })

    $(".select-color").change(function() {
        $(".text-color").text($(this).val())
        if($(this).val() == "اختر اللون") {
            $(".text-change-2").hide()
        } else {
            $(".text-change-2").show()
            $(".text-change-2").html(`${$(".text-color").text()} <i class="fa-solid fa-x box-clickchange"></i>`)
        }
    })

    $(".select-measuring").change(function() {
        $(".text-measuring").text($(this).val())
    })

    $(".btn-close-color").click(function(e) {
        e.preventDefault()
        $(this).parent().fadeOut()
    })

    $(".button-features").click(function(e) {
        e.preventDefault()
        $(".features").fadeIn()
    })



    $(".plus-change-click").click(function(e) {
        e.preventDefault()
        $(".text-change-2").html(`${$(".text-color").text()} <i class="fa-solid fa-x box-clickchange"></i>`)
        if($(".text-color").text() == "اختر اللون")  {
            $(".box-change-text").hide()
        } else {
            $(".box-change-text").show()
            $(".text-change-2").html(`${$(".text-color").text()} <i class="fa-solid fa-x box-clickchange"></i>`)
        }
    })



    $("body").on("click", ".box-clickchange" ,function() {
        $(this).parent().fadeOut()
    })




    $(".conversation-button").click(function(e) {
        e.preventDefault()
        $(this).addClass("conversation-gall-3")
        $(this).siblings().removeClass("conversation-gall-3")
    })




    var number = 0;
    $('.change-advertisement').on('change', function(){
        var filelists = this.files || [];        
        $.each(filelists, function(i, filelist){
            var reader = new FileReader();
    
            reader.onload = function (e) {
                $( '.preview-' + number ).html('<img class="image-preview" src="'+ e.target.result +'" /> <button class="preview-close"><img class="dsa" src="image/close.png"></button>'); 
                number ++ ;
                
            }
            reader.readAsDataURL(filelist);
             
        });  
       
    });

    $(document).on("click", ".preview-close", function(e) {
        e.preventDefault()
        $(this).parent().fadeOut()

    })


    $(".button-change-item").click(function(e) {
        e.preventDefault()
        $(this).addClass("button-active")
        $(this).siblings().removeClass("button-active")
        if($(".button-change-item-2").hasClass("button-active")) {
            $(".form-inner").hide()
            $(".form-inner-2").show()
            $(".hide-label").show()
            $(".features-box-2").show()
            $(".features-box-1").hide()
        } else {
            $(".form-inner").show()
            $(".form-inner-2").hide()
            $(".hide-label").hide()
            $(".features-box-2").hide()
            $(".features-box-1").show()
        }
    })



    $(".button-postad").click(function(e) {
        e.preventDefault()
        $(".popup").fadeIn()
    })






    $(".submit-send-message").click(function(e) {
        e.preventDefault()
        if ($(".input-message").val() === "") {
            console.log("ssdasad")
        } else {
            $(".form-message").before(`
            <div class="conversation-message mb-5">
            <div class="message-box-img">
                <img class="message-img" src="image/photo-user.avif" alt="">
                <p class="black-white">منذ 1 دقيقه</p>
            </div>
            <div class="messege-text-box">
                <p class="messege-text">${$(".input-message").val()}</p>
            </div>
        </div>
            `)
        }
        $(".input-message").val("")
    })






    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        rtl: true,
        dots:true,
        dotsContainer: '#carousel-custom-dots',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    $('.owl-dot').click(function () {
        $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
      });






		// $(".team-slider").owlCarousel({
		// 	dotsContainer: '.team-slider-thumb',
		// 	nav: true,
		// 	loop: true,
		// 	items: 1,
		// 	animateIn: 'fadeIn',
		// 	animateOut: 'fadeOut',
		// });

	


})