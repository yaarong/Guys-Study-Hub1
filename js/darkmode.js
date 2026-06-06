(function () {
    // Apply saved preference immediately to avoid flash
    if (localStorage.getItem('darkMode') === 'on') {
        document.documentElement.classList.add('dark-mode');
    }

    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.createElement('button');
        btn.id = 'dark-mode-btn';
        btn.title = 'Toggle dark mode';
        btn.innerHTML = document.documentElement.classList.contains('dark-mode') ? '☀️' : '🌙';
        document.body.appendChild(btn);

        btn.addEventListener('click', function () {
            const isDark = document.documentElement.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', isDark ? 'on' : 'off');
            btn.innerHTML = isDark ? '☀️' : '🌙';
        });
    });
})();