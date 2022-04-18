const data = [
    {
        id: 0,
        img:"https://picsum.photos/id/10/700/400",
        name: "Aidan Knight",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/05",
    },
    {
        id: 1,
        img:"https://picsum.photos/id/19/300/200",
        name: "Aidan Knight",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 2,
        img:"https://picsum.photos/id/122/300/300",
        name: "Aidan Knight",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 3,
        img:"https://picsum.photos/id/32/300/400",
        name: "Aidan Knight",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 4,
        img:"https://picsum.photos/id/33/250/250",
        name: "Aidan Knight",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
    {
        id: 5,
        img:"https://picsum.photos/id/26/300/500",
        name: "Aidan Knight",
        comments: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        time: "2022/04/15",
    },
]

const board = document.querySelector(".waterfall")
const messageItem = document.querySelector(".js-messageItem")
function init() {
    data.forEach((item) => {
        let template = ''
        template = `
        <div class="box">
            <div class="card">
                <img src="${item.img}">
                <div class="card-body">
                    <h5 class="card-title">${item.id}${item.name}</h5>
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
        board.innerHTML += template
    })
    
}
if (board !== undefined) {
    init()
} 
const elem = document.querySelector('.waterfall');
const msnry = new Masonry( elem, {
    itemSelector: '.box',
    columnWidth: 250,
    gutter: 20,
    horizontalOrder: true,
});
imagesLoaded( elem ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});

function detail() {
    const commentButton = document.querySelectorAll(".js-comment")
        commentButton.forEach((x) => {
            x.addEventListener("click", (e) => {
                const currentTarget = e.target.dataset.message
                const currentData = data[currentTarget]
                localStorage.setItem('testObject', JSON.stringify(currentData));
            })
        })
}
detail()