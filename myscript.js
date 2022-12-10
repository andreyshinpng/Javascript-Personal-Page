let appTheme = 'light';

document.querySelector('.option').onclick = function () {
    toggle('dropdown-links-1');
}

toggle = function (x) {
    dropdown = document.querySelector(`.${x}`);
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
};

document.querySelector('.app-theme-toggle').onclick = function () {
    if (appTheme === 'light') {
        document.querySelector('body').classList.add('body-dark');
        for ( let i of document.querySelectorAll('a') ) {
            i.classList.add('a-dark');
        }
        for ( let i of document.querySelectorAll('.nav-links') ) {
            i.classList.add('nav-links-dark');
        }
        for ( let i of document.querySelectorAll('.dropdown-links') ) {
            i.classList.add('dropdown-links-dark');
        }
        appTheme = 'dark';
    } else if (appTheme === 'dark') {
        document.querySelector('body').classList.remove('body-dark');
        for ( let i of document.querySelectorAll('a') ) {
            i.classList.remove('a-dark');
        }
        for ( let i of document.querySelectorAll('.nav-links') ) {
            i.classList.remove('nav-links-dark');
        }
        for ( let i of document.querySelectorAll('.dropdown-links') ) {
            i.classList.remove('dropdown-links-dark');
        }
        appTheme = 'light';
    }    
};