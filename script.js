// history time-line stuff
let title = document.querySelector(".title");
let timeLine = document.querySelector(".time");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");

function change(elem) {
    elem.classList.add("clicked");
}

function changeBack(elem) {
    elem.classList.remove("clicked");
}

function energyConsultant() {
    title.innerText = "Energy Consultant"
    timeLine.innerText = "Feb 2021 - Jul 2022"
    p1.innerText = "-> Brought in thousands of dollars in residual revenue for each respective company."
    p2.innerText = "-> Led and managed multiple business to customer relations in the process of contacting, signing and installing solar panels."
    p3.innerText = "-> Efficiently communicated with our install team and each customer to ensure the process was efficient."
}

function accountExecutive() {
    title.innerText = "Account Executive"
    timeLine.innerText = "Jun 2020 - Jan 2021"
    p1.innerText = "-> Communicated the potential of Chiropractic and Dental practices through the use of our software platform in phone, video and face-to-face conversations. "
    p2.innerText = "-> Guided potential clients through the use of our platform and the step by step path to a 7 figure practice."
    p3.innerText = "-> Initialized client accounts using Terminal and remote computer access to link their account to their practice's server."
}

function fitnessConsultant() {
    title.innerText = "Fitness Consultant"
    timeLine.innerText = "Apr 2020 - Jun 2020"
    p1.innerText = "-> Made around 80-100 cold phone calls daily, on top of other tasks, in order to schedule and bring in new clients."
    p2.innerText = "-> Greeted potential clients and answered their questions while touring the facility and giving a brief introduction to different types of workouts."
    p3.innerText = ""
}

function missionary() {
    title.innerText = "Volunteer Missionary"
    timeLine.innerText = "Jul 2018 - Apr 2020"
    p1.innerText = "-> Planned, organized, and taught lessons of the gospel of Jesus Christ and personal improvement to the Peruvian community in both Spanish and English"
    p2.innerText = "-> Selected as Zone leader and supervised 20-30 missionaries for a total of 6 months; organized and conducted conferences, facilitated training programs and measured progress/results of organization."
    p3.innerText = ""
}