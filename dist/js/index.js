
// 即時宣導 跑馬燈
$(function () {
    const marqueeData =[
        "<a target='_blank' href='http://www.google.com'>請注意於11/1將有火警警鈴修繕作業，請各位同仁聽到響鈴，不要驚慌，謝謝。請注意請注意請注意請注意請</a>",
        "<a target='_blank' href='http://www.yahoo.com.tw'>testㄉ2222222</a>",
        // "test333",
        // "test4444",
    ]
    function marqueeArr(marqueeData) {
        const marquee = document.querySelector(".marquee ul")
        const marqueeLi = marquee.childNodes;
        var html = "";
        for (let i = 0; i < marqueeData.length; i++) { 
            html += `<li class="marquee-item">${marqueeData[i]}</li>`;
        }
        marquee.innerHTML = html
        
        for (let i = 0; i < marqueeLi.length; i++) {
            const Li = marqueeLi[i];
            Li.style.animationDelay = `${i * 5}s`;
            Li.style.animationDuration = `${marqueeLi.length + 10}s`;
        }
    }
    marqueeArr(marqueeData)
})

// HomeBanner 輪播
$(function () {
    const data =[
        [
            "https://fakeimg.pl/1080x350/?text=Hello",
            "http://www.google.com.tw"
        ],
        [
            "https://fakeimg.pl/1200x350/?text=Hello",
            "http://www.yahoo.com.tw"
        ],
        [
            "https://fakeimg.pl/700x350/?text=Hello",
            "http://www.facebook.com.tw"
        ],
        [
            "https://fakeimg.pl/1080x350/?text=Hello",
            "http://www.msn.com.tw"
        ],
    ]
    function carousal (data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += `<div class="carousel-item">`;
            html += `<a class="photoLink" href=${data[i][1]} target=_blank><div class="resImg" style=" background-image:url('${data[i][0]}')"></div></a>`;
            html += "</div>";
            if (i == 9) {
                break;
            }
        }
        $(".carousel-inner").html(html); //印出html
        $(".carousel-inner>div").first().addClass("active"); 
    }
    carousal(data)
    //下方自動加入控制圓鈕
    const total = document.querySelectorAll('.carousel-item').length
    append_li();
    function append_li() {
        let li = "";
        var get_ac = $(".carousel-inner .active");
        var ac = $(".carousel .carousel-inner div").index(get_ac);

        for (var i = 0; i <= total - 1; i++) {
            if (i == (ac) / 2) {
                li += `<button type="button" data-bs-target="#carouselExampleIndicators" class="active" data-bs-slide-to="${i}" class="active"
                            aria-current="true"></button>`;
            } else {
                li += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}"
                            ></button>`;
            }
        }
        $(".carousel-indicators").append(li);
    }

    //單則隱藏控制鈕
    if (total.length < 2) {
        $('.carousel-indicators').hide();
    }
}
);

const message = document.querySelector(".js-message")
function init() {
    data.forEach((item) => {
        let template = ''
        template = `
        <li class="row">
            <div class="col-sm-7 col-12">
                <a href="#" target="_blank" class="d-inline-block text-truncate" style="max-width: 300px;">${item.comments}</a>
            </div>
            <div class="col-sm-2 col-12">
                <span class="third">${item.name}</span>
            </div>
            <div class="col-sm-3 col-12 text-sm-end text-center">
                <span class="third">${item.time}</span>
            </div>
        </li>
        `
        message.innerHTML += template
    })
}
init()
//行事曆
// $(function () {
//         const data = [
//                 {
//                     month: 'May',
//                     date: '2022/05/19',
//                     event: '公益路跑'
//                 },
//                 {
//                     month: 'May',
//                     date: '2022/05/19',
//                     event: '會議001'
//                 },
//                 {
//                     month: 'May',
//                     date: '2022/05/20',
//                     event: '會議20'
//                 },
//                 {
//                     month: 'May',
//                     date: '2022/05/23',
//                     event: '會議23'
//                 },
//                 {
//                     month: 'May',
//                     date: '2022/05/24',
//                     event: '會議24'
//                 },
//                 {
//                     month: 'May',
//                     date: '2022/05/31',
//                     event: '會議31'
//                 },
//                 {
//                     month: 'May',
//                     date: '2022/05/01',
//                     event: '慶生會'
//                 }]
// //DatePicker
//         function month() {
//             const select = document.querySelector('.ui-state-highlight')
//             const value = select.text;
//             console.log(value);
//             const monthEvent = data.map(function (item, index) {
//                 if (item.month === value) {
//                     return `<li class='third eventList lh-30'>${item.date.substr(5)}<p class='lh-20 text'>${item.event}</p></li>`
//                 }
//             });
//             $('#event').html(monthEvent)
//         }
    
// //MonthPicker
//         $(".InlineMenu").MonthPicker({
//             MaxMonth: "+7y",
//             MinMonth: "-7y",
//             OnAfterChooseMonth: function (selectedDate) {
//             const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//                 let selectMonth = month[selectedDate.getMonth()];
//                 console.log(selectMonth);
//             const monthEvent = data.map(function (item, index) {
//                 if (item.month === selectMonth) {
//                     return `<li class='third eventList lh-30'>${item.date.substr(5)}<p class='lh-20 text'>${item.event}</p></li>`
//                 }else {
//                     return ``
//                 }
//             });
//             $('#event').html(monthEvent)
//         }
//     });
//     window.onload = month
        
// });
