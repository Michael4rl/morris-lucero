let wrapper = document.querySelectorAll('.wrapper');
let loadMoreBtn = document.querySelector('#loadMore');
let currentRow = 2
loadMoreBtn.addEventListener('click', function() {
    for (let i = currentRow; i < currentRow + 2; i++) {
        if(wrapper[i]){
           wrapper[i].style.display = 'block';
        }
    }
    currentRow += 2;
    if(currentRowItems >= wrapper.length){
        event.target.style.display = 'none';
    }
})