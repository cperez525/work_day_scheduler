var workHours = ["8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm"]

function renderTime() {
    $("#currentDay").text(moment().format('dddd, MMM Do YYYY, LTS'))
}
renderTime()
setInterval(renderTime,1000)

for (h = 0; h < workHours.length; h++) {

    var blockRow = $("<article>").addClass("row")
    var hourBlock = $("<section>").addClass("hour")
    var hourText = $("<p>").addClass("hour-text")
    var timeBlock = $("<textarea>").addClass("time-block")
    var saveBtn = $("<button>").addClass("saveBtn")

    hourBlock.append(hourText.text(workHours[h]))
    blockRow.attr("data-log", workHours[h])
    timeBlock.attr("data-name", workHours[h])

    var blockHour = moment("'" + hourText.text() + "'", "h a").startOf("hour").format("HH")
    var currentHour = moment().startOf("hour").format("HH")

    if (blockHour > currentHour){

        timeBlock.addClass("future")
    }
    else if (blockHour === currentHour){
        timeBlock.addClass("present")
    }
    else if(blockHour < currentHour){
        timeBlock.addClass("past")
    }

    $(".container").append(blockRow)    

    blockRow.append(hourBlock, timeBlock, saveBtn)
}

function renderScheduledItems() {
    for (var k = 0; k < localStorage.length; k++) {

        var storedTime = localStorage.key(k)
        var storedMessage = localStorage.getItem(storedTime)

        $("[data-name='" + storedTime + "']").text(storedMessage)
    }
}

renderScheduledItems()
$(".saveBtn").on("click", function() {

    var storeKey = $(this).prev().attr("data-name")
    var storeVal = $(this).prev().val()

    console.log(storeKey, storeVal)

    localStorage.setItem(storeKey, storeVal)
})