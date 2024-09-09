var ghymat_dolar_jadid = ''; 
// دلار
var ghymat_yoro_jadid='';
// یورو 
var ghymat_hijda_jadid='';
// هیجده عیار 
var ghymat_bistchahar_jadid='';
// بیست چهار عیار
var ghymat_tala_jadid = " "
setInterval(function(){
    $("#dar_hal_lod").show();
    $.get("https://tools.daneshjooyar.com/api/v1/currencies", (function (t) {
        var ghymat = "طلای هیجده عیار " + t.data.golds[0].price + "  \nطلای 24 عیار  " + t.data.golds[1].price + " \nدلار   " + t.data.currencies[0].price + "\nیورو  " + t.data.currencies[1].price;
    let gheymat_jadid=  ` قیمت عوض شد 
    `+ ghymat
        // بررسی مقدار جدید و مقدار قبلی
        if (ghymat !== ghymat_tala_jadid) {
            console.log("مقدار جدید و مقدار قبلی مساوی نیستند!");
            // انجام سایر عملیات مورد نیاز
            $.post("https://notificator.ir/api/v1/send", {
                to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                text: gheymat_jadid
            });
        }
        ghymat_tala_jadid = ghymat; // به روزرسانی مقدار قبلی با مقدار جدید

}))
$("#dar_hal_lod").hide()
},300000)
// قیمت کلی 
setInterval(function(){
    $("#dar_hal_lod").show();
    $.get("https://tools.daneshjooyar.com/api/v1/currencies", (function (t) {
        let ghymat = "طلای هیجده عیار " + t.data.golds[0].price 
    let gheymat_jadid=  ` قیمت عوض شد 
    `+ (ghymat_hijda_jadid -  ghymat) +" تغییر قیمت "  + `
`+ ghymat
        // بررسی مقدار جدید و مقدار قبلی
        if (ghymat !== ghymat_hijda_jadid) {
            console.log("مقدار جدید و مقدار قبلی مساوی نیستند!");
            // انجام سایر عملیات مورد نیاز
            $.post("https://notificator.ir/api/v1/send", {
                to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                text: gheymat_jadid
            });
        }
        ghymat_hijda_jadid = ghymat; // به روزرسانی مقدار قبلی با مقدار جدید
}))
$("#dar_hal_lod").hide()
},300000)
 





setInterval(function(){
    $("#dar_hal_lod").show();
    $.get("https://tools.daneshjooyar.com/api/v1/currencies", (function (t) {
        let ghymat = "  \nطلای 24 عیار  " + t.data.golds[1].price 
    let gheymat_jadid=  ` قیمت عوض شد 
    `+ (ghymat_hijda_jadid -  ghymat) +" تغییر قیمت "  + `
`+ ghymat
        // بررسی مقدار جدید و مقدار قبلی
        if (ghymat !== ghymat_hijda_jadid) {
            console.log("مقدار جدید و مقدار قبلی مساوی نیستند!");
            // انجام سایر عملیات مورد نیاز
            $.post("https://notificator.ir/api/v1/send", {
                to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                text: gheymat_jadid
            });
        }
        ghymat_hijda_jadid = ghymat; // به روزرسانی مقدار قبلی با مقدار جدید
}))
$("#dar_hal_lod").hide()
},300000)








setInterval(function(){
    $("#dar_hal_lod").show();
    $.get("https://tools.daneshjooyar.com/api/v1/currencies", (function (t) {
        let ghymat = "طلای هیجده عیار " + t.data.golds[0].price 
    let gheymat_jadid=  ` قیمت عوض شد 
    `+ (ghymat_hijda_jadid -  ghymat) +" تغییر قیمت "  + `
`+ ghymat
        // بررسی مقدار جدید و مقدار قبلی
        if (ghymat !== ghymat_hijda_jadid) {
            console.log("مقدار جدید و مقدار قبلی مساوی نیستند!");
            // انجام سایر عملیات مورد نیاز
            $.post("https://notificator.ir/api/v1/send", {
                to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                text: gheymat_jadid
            });
        }
        ghymat_hijda_jadid = ghymat; // به روزرسانی مقدار قبلی با مقدار جدید
}))
$("#dar_hal_lod").hide()
},300000)






setInterval(function(){
    $("#dar_hal_lod").show();
    $.get("https://tools.daneshjooyar.com/api/v1/currencies", (function (t) {
        let ghymat = "طلای هیجده عیار " + t.data.golds[0].price 
    let gheymat_jadid=  ` قیمت عوض شد 
    `+ (ghymat_hijda_jadid -  ghymat) +" تغییر قیمت "  + `
`+ ghymat
        // بررسی مقدار جدید و مقدار قبلی
        if (ghymat !== ghymat_hijda_jadid) {
            console.log("مقدار جدید و مقدار قبلی مساوی نیستند!");
            // انجام سایر عملیات مورد نیاز
            $.post("https://notificator.ir/api/v1/send", {
                to: "j8Bac1HIcIO9g06aShwehymOJXd40igH4ojrTlrk",
                text: gheymat_jadid
            });
        }
        ghymat_hijda_jadid = ghymat; // به روزرسانی مقدار قبلی با مقدار جدید
}))
$("#dar_hal_lod").hide()
},300000)
