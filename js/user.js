var ans = "A procedure to solve question"

console.log('hi');

function toggle_card(){
    var ans_style, qns_style;
    document.getElementsByClassName('board-text')[0].innerHtml = "Answer";
}

document.getElementById("question").addEventListener('click', (evt) =>{
    // console.log(evt);
    toggle_card();
});