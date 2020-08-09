var workHours = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"]

for (h = 0; h < workHours.length; h++) {

    var blockRow = $("<article>").addClass("row")
    var hourBlock = $("<section>").addClass("hour")
    var hourText = $("<p>").addClass("hour-text")
    var timeBlock = $("<textarea>").addClass("time-block past")
    var saveBtn = $("<button>").addClass("saveBtn")

    console.log(workHours[h])
    $(".container").append(blockRow)

    hourBlock.append(hourText.text(workHours[h]))

    blockRow.attr("data-log", workHours[h])


    blockRow.append(hourBlock, timeBlock, saveBtn)
}

$(".saveBtn").on("click", function() {
    
})