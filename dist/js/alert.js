const alertForm = document.querySelector(".alertForm");
const laterText = document.querySelector(".js-later");
const laterInput = document.querySelector(".js-laterTime");
const alertDate = document.querySelector("#alert-date");
const alertTime = document.querySelector("#alert-time");
const alertContainer = document.querySelector(".js-alertCancel");
const addTodoList = document.querySelector(".js-saveData");
const todoList = document.querySelector(".js-list");
const completedTasksHolder = document.querySelector(".js-complatedList")

const todoData = []
const applyName = document.querySelector("#apply-name")
const applyTitle = document.querySelector("#apply-title")
const repeatNum = document.querySelector("#repeatNum")
const repeatTime = document.querySelector("#repeatTime")
const alertEndDate = document.querySelector("#alert-EndDate")
const checkEvent = document.querySelectorAll(".js-checkEvent")
const now = new Date();
now.setHours(now.getHours() + 3);
const time = now.getHours().toLocaleString();

function alert() {
    laterText.innerHTML = `今日稍後 ${time}:00`
    laterInput.addEventListener("click", (e) => {
        if (e.target.checked == true) {
            alertDate.value = now.toLocaleDateString('en-CA')
        } else {
            return
        }
    })
    alertDate.addEventListener("change", () => {
        if (alertDate.value != now.toLocaleDateString('en-CA')) {
            laterInput.checked = false
        }
    })
}
alert()
addTodoList.addEventListener("click",addList)

function ListTemplate(item) {
    let tr = document.createElement('tr');
    tr.dataset.id=item.id
    let repeatIcon = `<i class="fas fa-redo mx-1"></i>`
    let hasRepeat = 
        `
            <td style="width:5%">
                <div class="form-check">
                    <input class="form-check-input js-checkEvent" type="checkbox">
                </div>
            </td>
            <td>${item.content}</td>
            <td class="text-end showAlert">
                <i class="fas fa-calendar mx-1"></i>${item.endDate}
                ${repeatIcon}
                <span class="js-dot">・</span>
                <i class="fas fa-bell mx-1"></i>${item.alertDate}
            </td>
    `
    let noRepeat = 
        `
            <td style="width:5%">
                <div class="form-check">
                    <input class="form-check-input js-checkEvent" type="checkbox" >
                </div>
            </td>
            <td>${item.content}</td>
            <td class="text-end showAlert">
                <i class="fas fa-calendar mx-1"></i>${item.endDate}
                <span class="js-dot">・</span>
                <i class="fas fa-bell mx-1"></i>${item.alertDate}
            </td>
    `
    if (item.repeat == null) {
        tr.innerHTML = noRepeat
        todoList.insertBefore(tr, todoList.firstChild);
        bindTaskEvents(tr)
        
    } else {
        tr.innerHTML = hasRepeat
        todoList.insertBefore(tr, todoList.firstChild);
        bindTaskEvents(tr)
    }
}

function addList() {
    let obj = {}
    obj.id = todoData.length
    obj.name = applyName.value
    obj.content = applyTitle.value
    obj.alertDate = alertDate.value
    obj.alertTime = alertTime.value
    obj.repeat = `${repeatNum.value}${repeatTime.value}`
    obj.endDate = alertEndDate.value
    obj.done = false
    
    if (laterInput.checked == true) {
        obj.alertTime = `'T${time}:00:00'`
    }
    if (repeatNum.value == "") {
        obj.repeat = null
    }
    
    alert()
    todoData.push(obj)
    ListTemplate(obj)
    alertForm.reset()
    console.log(todoData);
}

// Mark a task as incomplete
const taskIncomplete = function(e) {
    console.log("Task incomplete"); 
   //Append the task li to #incomplete-tasks
    const listItem = e.closest("tr");
    const listText = e.closest("td").nextElementSibling;
    const thisID = listItem.getAttribute("data-id")
    todoData[thisID].done = false
    todoList.appendChild(listItem);
    listText.classList.remove("text-del")
    // bindTaskEvents(listItem,taskCompleted)
}


const taskCompleted = function(e) {
    console.log("Task complete");
   //Append the task li to the #completed-tasks
    const listItem = e.closest("tr");
    const listText = e.closest("td").nextElementSibling;
    const thisID = listItem.getAttribute("data-id")
    todoData[thisID].done = true
    completedTasksHolder.appendChild(listItem); 
    listText.classList.add("text-del")
}

const bindTaskEvents = function (input) {
    children = input.querySelector(".js-checkEvent");
    children.addEventListener("change", (e) => {
        if (e.target.checked == true) {
            taskCompleted(e.target)
        } else {
            taskIncomplete(e.target)
        }
    })
}

