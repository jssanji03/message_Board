const data = [
    {
        id: 0,
        img:"https://picsum.photos/id/10/700/400",
        name: "Joseph",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/05",
    },
    {
        id: 1,
        img:"https://picsum.photos/id/19/300/200",
        name: "John",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 2,
        img:"https://picsum.photos/id/122/300/300",
        name: "Mary",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 3,
        img:"https://picsum.photos/id/32/300/400",
        name: "Kate",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 4,
        img:"https://picsum.photos/id/33/250/250",
        name: "Chris",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 5,
        img:"https://picsum.photos/id/26/300/500",
        name: "Da",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 6,
        img:"https://picsum.photos/id/33/250/250",
        name: "Christina",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 7,
        img:"https://picsum.photos/id/16/300/500",
        name: "KK",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 8,
        img:"https://picsum.photos/id/267/300/500",
        name: "QQ",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 9,
        img:"https://picsum.photos/id/30/300/500",
        name: "LL",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 10,
        img:"https://picsum.photos/id/46/300/500",
        name: "JJ",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
]

const board = document.querySelector(".waterfall")
const messageItem = document.querySelector(".js-messageItem")
function init() {
    let postElement = ""
    data.forEach((item, i) => {
        postElement = `
        <div class="box col">    
            <div class="card">
                <img class="card-img-top" src="${item.img}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.comments}</p>
                </div>
                <div class="card-footer text-muted p-0">
                    <div class="btn-group" role="group">
                        <a>
                            <i class="fas fa-clock mr-1"></i><span>${item.time}</span>
                        </a>
                        <a class="js-comment" data-message="${item.id}" href="message_detail.html">
                            <i class="fas fa-comment mr-1"></i>Comment
                        </a>
                        <a class="">
                            <label class="toggle-love">
                            <input type="checkbox">
                            <div class="icon">
                                <i class="far fa-heart"></i>
                            </div>Like
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `
        if (i >= 6) {
            return false
        } else {
            board.innerHTML += postElement;
        };
    })
    
}
init()
function template(item) {
    return   `
            <div class="card">
                <img src="${item.img}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.comments}</p>
                </div>
                <div class="card-footer text-muted p-0">
                    <div class="btn-group" role="group">
                        <a>
                            <i class="fas fa-clock mr-1"></i><span>${item.time}</span>
                        </a>
                        <a class="js-comment" data-message="${item.id}" href="message_detail.html">
                            <i class="fas fa-comment mr-1"></i>Comment
                        </a>
                        <a class="">
                            <label class="toggle-love">
                            <input type="checkbox">
                            <div class="icon">
                                <i class="far fa-heart"></i>
                            </div>Like
                        </a>
                    </div>
                </div>
            </div>
        `
}
// const msnry = new Masonry( board, {
//     itemSelector: '.box',
//     columnWidth: 250,
//     gutter: 20,
//     horizontalOrder: true,
//     // percentPosition: true,
//     // stagger: 30,
//     // // nicer reveal transition
//     // visibleStyle: { transform: 'translateY(0)', opacity: 1 },
//     // hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
// });



function readURL(input){
  if(input.files && input.files[0]){
    imageTagID = input.getAttribute("targetID");
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = document.getElementById(imageTagID);
        img.setAttribute("src", e.target.result)
    }
    reader.readAsDataURL(file);
  }

}

const formArea = document.querySelector(".js-addForm")
const addFormToList = document.querySelector(".js-addToList-Btn")
const formName = document.querySelector(".js-name");
const formDate = document.querySelector(".js-date")
const formImg = document.querySelector("#preview_img")
const formContent = document.querySelector(".js-content")

addFormToList.addEventListener("click",addNewList)
function addNewList() {
    let obj = {}
    obj.id = data.length
    obj.img = formImg.getAttribute("src")
    obj.time = formDate.value.replace(/-/gi, '/')
    obj.name = formName.value
    obj.comments = formContent.value
    data.push(obj)
    console.log(data);
    // init()
    let div = document.createElement('div');
    div.classList.add("box")
    const items = template(obj)
    div.innerHTML = items
    board.insertBefore( div, board.firstChild );
    
    // imagesLoaded( board); 
    formArea.reset()
    detail()
}

function detail() {
    const commentButton = document.querySelectorAll(".js-comment")
    commentButton.forEach((x) => {
            x.addEventListener("click", (e) => {
                const currentTarget = e.target.dataset.message
                const currentData = data[currentTarget]
                localStorage.setItem('testObject', JSON.stringify(currentData));
                console.log(currentData);
                // console.log(localStorage.setItem('testObject', JSON.stringify(currentData)));
            })
        })
}
detail()
//-------------------------------------//
// init Infinte Scroll
const loading = document.querySelector('.loading');
var loopLength = 3; //Set loop length
var initItemsLength = 6; //Set loop length


function showLoading() {
	// show loading animation
    for (i = 0; i < loopLength; i++) { 
        loading.classList.add('show');
        setTimeout(() => {
            // remove loading animation after 1 second
            loading.classList.remove('show');
            setTimeout(() => {
                // create new posts after a little while (wait for the loading to dissappear)
                console.log("ajax request");
                if (initItemsLength < data.length) {
                        let div = document.createElement('div');
                        div.classList.add("box")
                        const items = template(data[initItemsLength])
                        div.innerHTML = items
                        board.appendChild(div);
                    initItemsLength += 1;
                    
                } 
                else {
                    $(".page-load-status").fadeIn();
                };
                detail()
            }, 300);
        }, 1000);
        
    }
}

// Scroll
window.addEventListener('scroll', () => {
	
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	// console.log('scroll', scrollTop + clientHeight, scrollHeight - 50);
	// console.log( scrollTop ,clientHeight, scrollHeight);
	
	if(scrollTop + clientHeight >= scrollHeight - 5) {
		showLoading();
	}
});



//-------------------------------------//
// const isloading  = false;
// const nextpage = 1;
// function load_more() {
//     if ( isloading === false) {
//         // var url = "api.php?type=loadmore&page=" + this.nextpage;
//         //這邊url,我們拿來測試到時要接正式的資料
//         const url = data;
//         console.log(url);
//         // isloading = true;    
//         $.getJSON(url, function (data) {
//             console.log(data);
//             // if (data.html !== null && data.html.length > 0) {
//             //     //這邊就是將資料撈取後放到哪個div 之下？？
//             //     $('body').append(data.html);
//             //     //針對每次scroll 會新增一個參數，讓頁面一直往下載入正確的內容
//             //     nextpage++;
//             // }
//             // this.isloading = false;
//         })
           
//       }
// }


//-------------------------------------//
// init Infinte Scroll
// Get an API key for your demos at https://unsplash.com/developers
// const unsplashID = '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';


// let infScroll = new InfiniteScroll( board, {
//   path: function() {
//     return `https://api.unsplash.com/photos?client_id=${unsplashID}&page=${this.pageIndex}`;
//   },
//     // path:'.card',
//   // load response as JSON
//   responseBody: 'json',
//   history: false,
// });
// // use element to turn HTML string into elements
// // let proxyElem = document.createElement('div');

// infScroll.on('load', function (event, body) {
//     showLoading()
// });
