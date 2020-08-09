var workHours = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"]
for (h = 0; h < workHours.length; h++) {

    var blockRow = $("<article>").addClass("row")
    var hourBlock = $("<section>").addClass("hour")
    var timeBlock = $("<textarea>").addClass("time-block past")
    var saveBtn = $("<button>").addClass("saveBtn")

    console.log(workHours[h])
    $(".container").append(blockRow)
    hourBlock.text(workHours[h])
    timeBlock.attr("data-log", workHours[h])
    blockRow.append(hourBlock, timeBlock, saveBtn)
}