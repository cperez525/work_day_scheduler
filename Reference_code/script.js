var header = $(".lead")
header.text("Hi, " + localStorage.getItem("username") + "!")

function personalizeJumbotron() {    
    if (header.text() === "" ||
        header.text() === "Hi, null!") {
        var userName = prompt("What's your name?")
        localStorage.setItem("username", userName)
    }
}

personalizeJumbotron()

header.text("Hi, " + localStorage.getItem("username") + "!")





// Setting all shown work hours within an array
var workHours = ["8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm"]

// Setting the current weekday for storage
var currentDay = moment().format('dddd')

var currentDtTime = $("<h2>").addClass("headerTxt")
$("#currentDay").append(currentDtTime)

// Writes current weekday, date, and time to page
function renderTime() {

    currentDtTime.text(moment().format('dddd, MMM Do YYYY, LTS'))
    $("#currentDay").append(currentDtTime)
}
renderTime()

// Increments time so that you have a live clock displaying
setInterval(renderTime, 1000)

// Stores the current weekday in local storage
function captureCurrentDay() {

    localStorage.setItem("today", currentDay)
}

// Checks the current weekday against stored weekday, and clears stored schedule items if different
function checkCurrentDay() {

    var today = localStorage.getItem("today")

    if (today !== currentDay) {
        localStorage.clear()
    }
}

// Performs the current weekday vs stored weekday check before storing the current weekday
checkCurrentDay()

// Stores current weekday
captureCurrentDay()

// Creates Hour block (displaying work hours), text area (so user can input scheduled items), and save button elements
for (h = 0; h < workHours.length; h++) {

    // creating elements and assign appropriate classes for desired styling
    var blockRow = $("<article>").addClass("row")
    var hourBlock = $("<section>").addClass("hour")
    var hourText = $("<p>").addClass("hour-text")
    var timeBlock = $("<textarea>").addClass("time-block")
    var saveBtn = $("<button>").addClass("saveBtn")

    // Sets work hour to text in hour block
    hourBlock.append(hourText.text(workHours[h]))

    // adds data attribute to text areas for reference when writing stored items from local storage
    timeBlock.attr("data-name", workHours[h])

    // Time variables converted to Military time and comparison to add appropriate classes to text areas for proper styling
    var blockHour = moment("'" + hourText.text() + "'", "h a").startOf("hour").format("HH")
    var currentHour = moment().startOf("hour").format("HH")

    if (blockHour > currentHour) {

        timeBlock.addClass("future")
    }
    else if (blockHour === currentHour) {
        timeBlock.addClass("present")
    }
    else if (blockHour < currentHour) {
        timeBlock.addClass("past")
    }

    $(".container").append(blockRow)

    // adds elements to rows for display
    blockRow.append(hourBlock, timeBlock, saveBtn)
}

// Writes items from local storage to the text areas whose data attribute value matches the keys
function renderScheduledItems() {
    for (var k = 0; k < localStorage.length; k++) {

        var storedTime = localStorage.key(k)
        var storedMessage = localStorage.getItem(storedTime)

        $("[data-name='" + storedTime + "']").text(storedMessage)
    }
}

renderScheduledItems()

// Listener for save buttons that store the input from the correct text area
$(".saveBtn").on("click", function () {

    var storeKey = $(this).prev().attr("data-name")
    var storeVal = $(this).prev().val()

    console.log(storeKey, storeVal)

    localStorage.setItem(storeKey, storeVal)
})