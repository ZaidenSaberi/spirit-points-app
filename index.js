//Variables to store the points in for all the grades
var freshman_SP = 20;
var sophomore_SP = 10;
var junior_SP = 10;
var senior_SP  =10;
var m_8_SP  =10;
var m_7_SP = 10;

//Sets the text content of the labels to the variable
document.getElementById("freshman-points").textContent = freshman_SP;
document.getElementById("sophmore-points").textContent = sophomore_SP
document.getElementById("junior-points").textContent = junior_SP
document.getElementById("senior-points").textContent = senior_SP

document.getElementById("m_7-points").textContent = m_7_SP
document.getElementById("m_8-points").textContent = m_8_SP

//Admin Alert
var modal = document.getElementById('login');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
