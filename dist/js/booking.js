const resourcesData = [
            {
                id: '301 Room',
                title: '301 Room',
                content:"可容納8~10人",
                image_url:"/dist/img/avatar.png",
                eventColor: "#88c6d1",
                eventTextColor: 'white',
            },
            {
                id: '303 Room',
                title: '303 Room',
                content:"可容納8~10人",
                image_url:"/dist/img/avatar2.png",
                eventColor: "#7fcaeb",
                eventTextColor: 'white',
            },
            {
                id: '101 Room',
                title: '101 Room',
                content:"可容納12~16人",
                image_url:"/dist/img/avatar3.png",
                eventColor: "#FEA500",
                eventTextColor: 'white',
            },
            {
                id: '306 Room',
                title: '306 Room',
                content:"可容納4~6人",
                image_url:"/dist/img/avatar4.png",
            },
]
const eventData =[
    {
        resourceId: '301 Room', 
        title  : 'event1',
        start: '2022-04-21T12:30:00', 
        end: '2022-04-21T12:30:00',
    }, {
        resourceId: '306 Room', 
        title  : 'event2',
        start:  '2022-04-21T09:30:00', 
        end: '2022-04-21T11:30:00',
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
    // resourceGroupField: 'building',
    resourceAreaColumns: [
        {
            field: 'title',
            headerContent: 'Room',
            // cellDidMount:function (arg) {
            //     // console.log(arg.el);
            //     var extendedProps = arg.resource.extendedProps;
            //     const img = arg.el.querySelector(".fc-datagrid-cell .fc-datagrid-cell-cushion")
            //     let image_url = document.createElement('img')
            //     image_url.setAttribute("src", extendedProps.image_url)
            //     img.appendChild(image_url)
            // },
            // cellDidMount: function (arg) { 
            //     const extendedProps = arg.resource.extendedProps;
            //     console.log(extendedProps.content);
            //     let mark = document.createElement('small');
            //     mark.innerText = extendedProps.content;
            //     arg.el.appendChild(mark);
            // }
        },
        {
            field: 'content',
            headerContent: '說明'
        }
        
    ],
    resources: resourcesData,
    events: function(info, successCallback, failureCallback ) {
      successCallback(eventData);
    },
    // resourceLabelDidMount: function (info) {
    //     console.log(info);
    //   var questionMark = document.createElement('span');
    //   questionMark.innerText = ' (?) ';

    //   info.el.appendChild(questionMark);

    //   var tooltip = new Tooltip(questionMark, {
    //     title: info.resource.title + '!!!',
    //     placement: 'top',
    //     trigger: 'hover',
    //     container: 'body'
    //   });
    // },

    
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
    
    const event = {
        resourceId: bookingRoom.value, 
        title  : bookingTitle.value,
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