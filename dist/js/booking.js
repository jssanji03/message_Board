const resourcesData = [
            {
                id: '301',
                title: '301 Room',
                content:"可容納8~10人",
                image_url:"/dist/img/avatar.png",
                eventColor: "#88c6d1",
        eventTextColor: 'white',
                
                // children: [
                //             {
                //                 id: '301-1',
                //                 title: 'Jacky',
                //                 content:null,
                //             },
                //         ]
            },
            {
                id: '303',
                title: '303 Room',
                content:"可容納8~10人",
                image_url:"/dist/img/avatar2.png",
                eventColor: "#7fcaeb",
                eventTextColor: 'white',
                children:[]
            },
            {
                id: '101',
                title: '101 Room',
                content:"可容納12~16人",
                image_url:"/dist/img/avatar3.png",
                eventColor: "#FEA500",
                eventTextColor: 'white',
                children:[]
            },
            {
                id: '306',
                title: '306 Room',
                content:"可容納4~6人",
                image_url: "/dist/img/avatar4.png",
                children:[]
            },
]
const eventData =[
    {
        resourceId: '301',
        userName:'Jacky',
        title  : 'event1',
        start: '2022-04-26T12:30:00', 
        end: '2022-04-26T12:30:00',
    }, {
        resourceId: '301', 
        userName:'Mary',
        title  : 'event2',
        start:  '2022-04-26T09:30:00', 
        end: '2022-04-26T11:30:00',
    }
]
$(function(){
  ShowCalendar();
});
const calendarEl = document.getElementById('calendar');
const calendar = new FullCalendar.Calendar(calendarEl, {
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
    timeZone: "UTC",
    headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
    },
    initialView: 'resourceTimelineDay',
    aspectRatio: 1.5,
    firstDay: 1,
    hiddenDays: [6, 0],
    contentHeight: 'auto',
    views: {
        resourceTimelineDay: {
            buttonText: '今天',
            slotDuration: '00:30',
            slotMinTime: '09:00:00',
            slotMaxTime:'18:00:00'
        },
        resourceTimelineWeek: {
            buttonText: '週',
            slotDuration: '00:30',
            slotMinTime: '09:00:00',
            slotMaxTime: '18:00:00',
            
        },
    },
    // resourceGroupField: 'id',
    resourceAreaColumns: [
        {
            field: 'title',
            headerContent: 'Room',
        },
        // {
        //     field: 'content',
        //     headerContent: '說明'
        // }
        
    ],
    resources: resourcesData,
    events: function(info, successCallback, failureCallback ) {
      successCallback(eventData);
    },
    resourceLabelDidMount: function (info) {
      var questionMark = document.createElement('small');
      questionMark.innerHTML = info.resource.extendedProps.content;

      info.el.querySelector('.fc-datagrid-cell-main')
        .appendChild(questionMark);
    }
});

function ShowCalendar() {
    calendar.render();
}

const bookingBtn = document.querySelector(".js-saveData")
const formNewEvent = document.querySelector(".js-addForm")
const bookingAllday = document.querySelector("#booking-allDay")
const bookingStartDate = document.querySelector("#booking-StartDate")
const bookingStartTime = document.querySelector("#booking-StartTime")
const bookingEndDate = document.querySelector("#booking-EndDate")
const bookingEndTime = document.querySelector("#booking-EndTime")
bookingBtn.addEventListener("click", addData)
bookingAllday.addEventListener("click", (e) => {
    if (e.target.checked == true) {
        bookingEndDate.value = bookingStartDate.value;
        bookingEndTime.value = "T18:00:00"
    } else {
        bookingEndDate.value = "";
        bookingEndTime.value = "T09:00:00"
    }
})

function addData(e) {
    e.preventDefault();
    const userName = document.querySelector("#booking-name")
    const bookingTitle = document.querySelector(".booking-title")
    const bookingRoom = document.querySelector("#booking-room")
    const resourceItem = {
        title: userName.value,
        content:null,
    }
    // const resourceItem = {}
    // resourcesData.forEach((item, i) => {
    //     if (bookingRoom.value == item.title) {
    //         for (let itemId = 0; itemId < resourcesData[i].children.length; itemId++){
    //             resourceItem.id = `${item.id}-${itemId+ 1}`
    //             resourceItem.title = userName.value
    //             resourceItem.content = null
    //         }
    //         resourcesData[i].children.push(resourceItem)
    //     }
    // })
    const event = {
        resourceId: bookingRoom.value, 
        userName:userName.value, 
        title  : `${userName.value}預約 : ${bookingTitle.value}`,
        start:  bookingStartDate.value+bookingStartTime.value, 
        end: bookingEndDate.value+bookingEndTime.value,
    }
    
    if (bookingAllday.checked == true) {
        event.allDay = true
    }
    eventData.push(event)
    // Add
    calendar.refetchEvents();
    formNewEvent.reset()
}

