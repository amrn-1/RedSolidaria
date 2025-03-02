document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const settingsBtn = document.getElementById('settings-btn');
    const editBtn = document.getElementById('edit-btn');
    const login = document.getElementById('login');
    const userBtn = document.querySelector('.header-right .icon-btn:nth-child(3)'); // Botón de usuario (tercero en header-right)

    // Función para abrir modal de login
    function openLoginModal() {
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.style.display = 'block';
        }
    }

    // Función para cerrar modal de login
    function closeLoginModal() {
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.style.display = 'none';
        }
    }

    // Redirigir a Cuenta.html al hacer clic en el botón de configuración
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            window.location.href = 'Cuenta.html';
        });
    }
    
    if (editBtn) {
        editBtn.addEventListener('click', function() {
            window.location.href = 'principal.html';
        });
    }

    // Abrir modal de login al hacer clic en el botón de usuario
    if (userBtn) {
        userBtn.addEventListener('click', function() {
            openLoginModal();
        });
    }

    // Cerrar modal de login si el usuario hace clic fuera
    window.onclick = function(event) {
        const loginModal = document.getElementById('loginModal');
        if (event.target === loginModal) {
            closeLoginModal();
        }
    };
});

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