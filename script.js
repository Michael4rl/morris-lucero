//An Array uses square brackets [] but an Object uses curly braces {}
let collapseBtn = document.getElementById("collapse")
let loadMoreBtn = document.getElementById("loadMore")

let loadMore = () => {
    let boxes = document.getElementsByClassName("d-none");
    console.log(boxes)
    // let boxesArray = Object.values(boxes)
    // console.log(boxesArray[0])
    boxes[0].classList.remove("d-none");
    if (boxes.length <= 1) {
        loadMoreBtn.classList.add("d-none")
        collapseBtn.classList.remove("d-none")
    }
}

let collapseRows = () => {
    let extraRows = document.querySelectorAll(".extraRow")
    console.log(extraRows)
    extraRows.forEach((row) => {
        row.classList.add("d-none")
    })
    loadMoreBtn.classList.remove("d-none")
    collapseBtn.classList.add("d-none")
}