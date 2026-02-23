let interviewList = [];
let rejectedList = [];

let total = document.getElementById('totalCount')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount');

const allCardSection = document.getElementById('allCards');

function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount()