    var i = 0 
        var daghighe =  5
        var  saniye = 0
        var matn_2 = " اماده شد برای چک کردن این که خطا نداشته باشد کد های خود را چک کنید "
        var ghymat_previous = ""
        var ghaaymat_previous = ""
        var gold_price_previous = ''
        var gold_18_price_previous = ''
        var gold_24_price_previous = ''
        var euro_price_previous = ''
        $("#dar_hal_lod").hide()
        $("#mn").hide()
        $("#baba").hide()
        $("button").click((function () {
        $("#dar_hal_lod").show()

}));
setInterval((function () {
    $.get("https://tools.daneshjooyar.com/api/v1/currencies", (function (t) {
        var ghymat = "طلای هیجده عیار " + t.data.golds[0].price + "  \nطلای 24 عیار  " + t.data.golds[1].price + " \nدلار   " + t.data.currencies[0].price + "\nیورو  " + t.data.currencies[1].price;
      
        if (ghymat !== ghymat_previous) {
            console.log("مقدار جدید و مقدار قبل2ی مساوی نیستند!");
            $.post("https://notificator.ir/api/v1/send", {
                to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                text: ghymat
            });
            $("#baba").show();
            $.post("https://notificator.ir/api/v1/send", {
                to: "Off9hhVqVt9WxxKA7ASaXyviOZBemSKeqj4jwajA",
                text: ghymat
            });
        }
        ghymat_previous = ghymat; 

        $("#mn").show();
    }));
    $("#dar_hal_lod").hide();
}), 36e5);
setInterval(function () {
    $("#dar_hal_lod").show();
    $.get("https://tools.daneshjooyar.com/api/v1/currencies", (function (t) {
        var ghymatqw = "طلای هیجده عیار " + t.data.golds[0].price + "  \nطلای 24 عیار  " + t.data.golds[1].price + " \nدلار   " + t.data.currencies[0].price + "\nیورو  " + t.data.currencies[1].price;
        var  gqheymat_jadid = ` قیمت عوض شد 
`+ ghymatqw
        if (ghymatqw !== ghymat_previous) {
            console.log("مقدار جدید و مقدار 3قبلی مساوی نیستند!");
            // انجام سایر عملیات مورد نیاز
            $.post("https://notificator.ir/api/v1/send", {
                to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                text: gqheymat_jadid
            });
        }
        ghymat_previous = ghymatqw; 
    }))
    $("#dar_hal_lod").hide()
},1000)
setInterval(function () {
    $("#dar_hal_lod").show();
    $.get("https://tools.daneshjooyar.com/api/v1/currencies", (function (t) {
        let ghaymat = "دلار"+ t.data.currencies[0].price 
        let gheymat_jadid = ` قیمت  دلار عوض شد 
`+ ghaymat
        
        if (ghaymat !== ghaaymat_previous) {
            console.log("مقدار جدید و مقدار قبلی مساوی نیستند!");
            // انجام سایر عملیات مورد نیاز
            $.post("https://notificator.ir/api/v1/send", {
                to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                text: gheymat_jadid
            });
        }else{
           console.log(i++)
        }
        ghaaymat_previous = ghaymat; 
    }))
    $("#dar_hal_lod").hide()
}, 1000)
function checkGoldPrices() {
    $.ajax({
        url: "https://tools.daneshjooyar.com/api/v1/currencies",
        method: "GET",
        success: function (a) {
            var gold_price = a.data.golds[2].price
            var gold_18_price = a.data.golds[0].price;
            var gold_24_price = a.data.golds[1].price;
            var euro_price = a.data.currencies[1].price;
            var matn_tala24 = `قیمت طلای بیست چهار عیار عوض شد 
            `+gold_24_price
                        var matn_tala18 = `قیمت طلای هیجده عیار عوض شد
            `+gold_18_price
                        var matn_tamam  = `قیمت سکه تمام بهار ازادی  عوض شد 
            `+gold_price
                        var matn_yoro   = `قیمت یورو عوض شد 
            `+euro_price
          
            if (gold_price !== gold_price_previous) {
                $.post("https://notificator.ir/api/v1/send", {
                    to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                    text: matn_tamam
                });
            }else{    
            }
           
            if (gold_18_price !== gold_18_price_previous) {
                $.post("https://notificator.ir/api/v1/send", {
                    to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                    text: matn_tala18
                });
            }else{   
            }
            
            if (gold_24_price !== gold_24_price_previous) {
                $.post("https://notificator.ir/api/v1/send", {
                    to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                    text: matn_tala24
                });
            }else{
            }
           
            if (euro_price !== euro_price_previous) {
                $.post("https://notificator.ir/api/v1/send", {
                    to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                    text: matn_yoro
                });
            }else{
            }
            
            gold_price_previous = gold_price;
            gold_18_price_previous = gold_18_price;
            gold_24_price_previous = gold_24_price;
            euro_price_previous = euro_price;
        },
        error: function (xhr, status, error) {
            console.log("دریافت اطلاعات با خطا مواجه شد.");
        }
    });
}
checkGoldPrices();
setInterval(checkGoldPrices, 1000); 
setInterval(function(){
    if(daghighe == 0 && saniye == 1 ){
         daghighe =  5  
         saniye = 59 
    console.log("ok ")

    
    }
    if(saniye==0){
    daghighe--
    saniye = 59
    } 
    
    var tq = saniye -- 
    $('#s').html(   daghighe + " " + tq )
    },1000)