function openModal() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    // Elementos del DOM
    const notificationsBtn = document.getElementById("notificationsBtn");
    const notificationsMenu = document.getElementById("notificationsDropdown");
    const userBtn = document.getElementById("userBtn");
    const username = document.querySelector('.username');
    const userDropdown = document.getElementById("userDropdown");
    const settingsBtn = document.getElementById('settings-btn');
    const editBtn = document.getElementById('edit-btn');
    const profile = document.getElementById('profile-btn'); // Corregido "porfile" a "profile"

    // Redirecciones
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


    if (profile) {
        profile.addEventListener('click', function() {
            window.location.href = 'Perfil.html';
        });
    }

    // Función para cerrar todos los menús/dropdowns
    function closeAllMenus() {
        if (notificationsMenu) notificationsMenu.style.display = "none";
        if (userDropdown) userDropdown.classList.remove('active');
    }

    // Manejar el menú de notificaciones
    if (notificationsBtn && notificationsMenu) {
        notificationsBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            notificationsMenu.style.display = (notificationsMenu.style.display === "block") ? "none" : "block";
        });
    }

    // Manejar el dropdown de usuario
    if (userBtn && userDropdown) {
        userBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });
    }

    if (username && userDropdown && userBtn) {
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
        if (userBtn && userDropdown && !userBtn.contains(e.target) && !userDropdown.contains(e.target) && (!username || !username.contains(e.target))) {
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
        const logoutConfirm = document.getElementById('logoutConfirm');
        if (logoutConfirm) logoutConfirm.style.display = 'flex';
    };

    window.closeLogoutConfirm = function() {
        const logoutConfirm = document.getElementById('logoutConfirm');
        if (logoutConfirm) logoutConfirm.style.display = 'none';
    };

    window.logout = function() {
        closeLogoutConfirm();
        const logoutMessage = document.getElementById('logoutMessage');
        if (logoutMessage) logoutMessage.style.display = 'flex';
    };

    window.closeLogoutMessage = function() {
        const logoutMessage = document.getElementById('logoutMessage');
        if (logoutMessage) {
            logoutMessage.style.display = 'none';
            window.location.href = 'index.html'; // Redirigir al login
        }
    };

    // Elementos adicionales
    const serviceBtn = document.querySelector('.action-btn'); // Botón "Anuncia un nuevo servicio"
    const statsBtn = document.querySelector('.stats-btn');
    const editIcon = document.querySelector('.edit-icon');

    // Función para abrir modales genéricos
    function openModalById(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'block';
    }

    // Función para cerrar modales genéricos
    function closeModalById(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'none';
    }

    // Abrir modal de servicio al hacer clic en el botón o el ícono de edición
    if (serviceBtn) {
        serviceBtn.addEventListener('click', function() {
            openModalById('serviceModal');
        });
    }

    if (editIcon) {
        editIcon.addEventListener('click', function() {
            openModalById('serviceModal');
        });
    }

    // Abrir modal de estadísticas al hacer clic en el botón "Estadísticas"
    if (statsBtn) {
        statsBtn.addEventListener('click', function() {
            openModalById('statsModal');
        });
    }

    // Cerrar modales al hacer clic en la "X" o fuera del modal
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModalById(modal.id);
            }
        });
    });

    window.addEventListener('click', function(event) {
        document.querySelectorAll('.modal').forEach(modal => {
            if (event.target === modal) {
                closeModalById(modal.id);
            }
        });
    });
});
