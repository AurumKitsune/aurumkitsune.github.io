const rootElement = document.getRootNode();
const buttonElement = document.getElementById('theme-button');

let theme = 'dark';

const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
if (prefersLightTheme) {
    switchTheme();
}

function switchTheme() {
    if (theme == 'light') {
        buttonElement.textContent = '';
        rootElement.classList.remove('light');
        theme = 'dark';
    }
    else if (theme == 'dark') {
        buttonElement.textContent = '';
        rootElement.classList.add('light');
        theme = 'light';
    }
}
