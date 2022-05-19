const currentData = JSON.parse(localStorage.getItem('testObject'))
const messageItem = document.querySelector(".js-messageItem")
const submitMessage = document.querySelector(".js-submitMsg")
function display(currentData) {
    messageItem.innerHTML += 
    `
                <div class="box">
                    <div class="card">
                        <img src="${currentData.img}">
                        <div class="card-body">
                            <h5 class="card-title">${currentData.id}${currentData.name}</h5>
                            <p class="card-text">${currentData.comments}</p>
                        </div>
                        <div class="card-footer text-muted p-0">
                            <div class="btn-group" role="group">
                                <a>
                                    <i class="fas fa-clock mr-1"></i><span>${currentData.time}</span>
                                </a>
                                <a class="js-comment" data-message="${currentData.id}" href="#">
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
}
display(currentData)
console.log(currentData);

submitMessage.addEventListener("click", () => {
    const msg = document.querySelector("#messageTextarea")
    const name =document.querySelector(".js-name").textContent
    const newNode = document.createElement("li")
    newNode.className = "list-group-item"
    newNode.innerHTML =`
        <span class="comment-name mr-5">${name}</span>
        <small class="comment-time float-right">2022/04/15 08:30</small>
        <div class="comment-message">${msg.value}</div>
    ` 
    document.querySelector(".js-list").insertBefore(newNode, document.querySelector(".js-list").firstChild)  
    msg.value=""

})