/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function openModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
