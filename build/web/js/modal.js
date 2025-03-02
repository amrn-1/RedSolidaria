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


document.addEventListener("DOMContentLoaded", function () {
    // Elementos del DOM
    const notificationsBtn = document.getElementById("notificationsBtn");
    const notificationsMenu = document.getElementById("notificationsDropdown");
    const userBtn = document.getElementById("userBtn");
    const username = document.querySelector('.username');
    const userDropdown = document.getElementById("userDropdown");

    // Función para cerrar todos los menús/dropdowns
    function closeAllMenus() {
        notificationsMenu.style.display = "none";
        userDropdown.classList.remove('active');
    }

    // Manejar el menú de notificaciones
    if (notificationsBtn && notificationsMenu) {
        notificationsBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            notificationsMenu.style.display = (notificationsMenu.style.display === "block") ? "none" : "block";
        });
    }

    // Manejar el dropdown de usuario (usando userBtn y username)
    if (userBtn && userDropdown) {
        userBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });
    }

    if (username && userDropdown) {
        username.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            userBtn.click(); // Simula el clic en userBtn para activar el dropdown
        });
    }

    // Cerrar menús al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (notificationsBtn && notificationsMenu && !notificationsBtn.contains(e.target) && !notificationsMenu.contains(e.target)) {
            notificationsMenu.style.display = "none";
        }
        if (userBtn && userDropdown && !userBtn.contains(e.target) && !userDropdown.contains(e.target) && !username.contains(e.target)) {
            userDropdown.classList.remove('active');
        }
    });

    // Evitar que los clics dentro de los menús cierren el dropdown
    if (notificationsMenu) {
        notificationsMenu.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }
    if (userDropdown) {
        userDropdown.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    // Cerrar modales con botones de cerrar (close-btn)
    document.querySelectorAll(".close-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        });
    });

    // Funciones para manejar cerrar sesión
    window.showLogoutConfirm = function() {
        document.getElementById('logoutConfirm').style.display = 'flex';
    };

    window.closeLogoutConfirm = function() {
        document.getElementById('logoutConfirm').style.display = 'none';
    };

    window.logout = function() {
        closeLogoutConfirm();
        document.getElementById('logoutMessage').style.display = 'flex';
        
    };

    window.closeLogoutMessage = function() {
        document.getElementById('logoutMessage').style.display = 'none';
        window.location.href = 'index.html'; // Redirigir al login
    };

    // Manejar el botón "Iniciar Sesión" para abrir el modal (si existe)
    
});