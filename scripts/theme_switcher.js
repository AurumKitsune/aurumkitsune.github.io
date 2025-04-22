const body = document.body;
const buttonElement = document.getElementById('theme-button');

let theme = 'dark';

body.classList.add('notransition');
if (document.cookie.includes('color-scheme=light')) {
    switchTheme();
}
else if (window.matchMedia('(prefers-color-scheme: light)').matches)
{
    switchTheme();
}
setTimeout(() => body.classList.remove('notransition'), 200);

function switchTheme() {
    if (theme == 'light') {
        buttonElement.textContent = '';
        body.classList.remove('light');
        theme = 'dark';
    }
    else if (theme == 'dark') {
        buttonElement.textContent = '';
        body.classList.add('light');
        theme = 'light';
    }

    document.cookie = `color-scheme=${theme}`
}
