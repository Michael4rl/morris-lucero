//An Array uses square brackets [] but an Object uses curly braces {}
let loadMore = () => {
    let boxes = document.getElementsByClassName("d-none");
    console.log(boxes)
    // let boxesArray = Object.values(boxes)
    // console.log(boxesArray[0])
    boxes[0].classList.remove("d-none");
}