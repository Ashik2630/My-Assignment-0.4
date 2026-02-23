let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';
// Step-1 get Count Add
let total = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

// Step-2 Get Toggle button
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");

// Step-1 Function Count
function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();
// Step-2 Toggle Button
function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewFilterBtn.classList.remove("bg-[#FFFFFF]", "text-white");
  rejectedFilterBtn.classList.remove("bg-[#FFFFFF]", "text-white");

  allFilterBtn.classList.add("bg-[#FFFFFF]", "text-black");
  interviewFilterBtn.classList.add("bg-[#FFFFFF]", "text-black");
  rejectedFilterBtn.classList.add("bg-[#FFFFFF]", "text-black");


  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.remove("bg-[#FFFFFF]", "text-black");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  if(id === 'interview-filter-btn'){
    
    allCardSection.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    renderInterview();
  }
  else if(id === 'all-filter-btn'){
    allCardSection.classList.remove('hidden');
    filteredSection.classList.add('hidden')
  }
  else if(id === 'rejected-filter-btn'){
    allCardSection.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    renderRejected();
  }
}

mainContainer.addEventListener("click", function (event) {

// interview-button event Listener
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const jobTitle = parentNode.querySelector(".jobTitle").innerText;
    const companySalary = parentNode.querySelector(".companySalary").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".status").innerText = 'Interview';

    const cardInfo = {
      companyName,
      jobTitle,
      companySalary,
      status: 'Interview',
      notes,
    };

    const companyExists = interviewList.find(
      (item) => item.companyName === cardInfo.companyName);

    if (!companyExists) {
      interviewList.push(cardInfo);
    }


    rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName);

    if(currentStatus === "rejected-filter-btn"){
        renderRejected();
    }

    calculateCount();

  }

// rejected-button event Listener
  if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const jobTitle = parentNode.querySelector(".jobTitle").innerText;
    const companySalary = parentNode.querySelector(".companySalary").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".status").innerText = 'Rejected';

    const cardInfo = {
      companyName,
      jobTitle,
      companySalary,
      status: 'Rejected',
      notes,
    };

    const companyExists = rejectedList.find(
      (item) => item.companyName === cardInfo.companyName);

    if (!companyExists) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName);

    if(currentStatus === "interview-filter-btn"){
        renderInterview()
    }

    calculateCount();

  }
});

// renderInterview create function
function renderInterview() {
  filteredSection.innerHTML = "";

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.innerHTML = `
        <div class="flex justify-between p-5 shadow-xl rounded-md mb-10">
          <div class="left">
            <div>
              <h2 class="companyName text-xl font-bold text-[#002C5C] mb-1">
                ${interview.companyName}
              </h2>
              <p class="jobTitle text-[#64748B] mb-5">${interview.jobTitle} </p>
            </div>
            <p class="companySalary text-[#64748B]">
              ${interview.companySalary}
            </p>
            <button class="status bg-[#EEF4FF] px-2 py-2 ml-2 mt-5">
              ${interview.status}
            </button>
            <p  class="notes mt-2 text-[#323B49]">
              ${interview.notes}
            </p>
            <div class="mt-5 flex gap-5">
              <p
                class="interview-btn uppercase cursor-pointer font-bold text-[15px] border border-[#10B981] px-4 py-2 text-[#10B981] shadow rounded-md"
              >
                Interview
              </p>
              <button
                class="rejected-btn text-[15px] uppercase  font-bold border border-[#EF4444] px-4 py-2 text-[#EF4444] shadow rounded-md"
              >
                Rejected
              </button>
            </div>
          </div>
          <div class="right text-[#64748B] mt-4 mr-2 text-xl">
            <button class="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
        `;
        filteredSection.appendChild(div);
        
  }
}

// renderRejected create function
function renderRejected() {
  filteredSection.innerHTML = "";

  for (let rejected of rejectedList) {
    let div = document.createElement("div");
    div.innerHTML = `
        <div class="flex justify-between p-5 shadow-xl rounded-md mb-10">
          <div class="left">
            <div>
              <h2 class="companyName text-xl font-bold text-[#002C5C] mb-1">
                ${rejected.companyName}
              </h2>
              <p class="jobTitle text-[#64748B] mb-5">${rejected.jobTitle} </p>
            </div>
            <p class="companySalary text-[#64748B]">
              ${rejected.companySalary}
            </p>
            <button class="status bg-[#EEF4FF] px-2 py-2 ml-2 mt-5">
              ${rejected.status}
            </button>
            <p  class="notes mt-2 text-[#323B49]">
              ${rejected.notes}
            </p>
            <div class="mt-5 flex gap-5">
              <p
                class="interview-btn uppercase cursor-pointer font-bold text-[15px] border border-[#10B981] px-4 py-2 text-[#10B981] shadow rounded-md"
              >
                Interview
              </p>
              <button
                class="rejected-btn text-[15px] uppercase  font-bold border border-[#EF4444] px-4 py-2 text-[#EF4444] shadow rounded-md"
              >
                Rejected
              </button>
            </div>
          </div>
          <div class="right text-[#64748B] mt-4 mr-2 text-xl">
            <button class="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
        `;
        filteredSection.appendChild(div);
        
  }
}
