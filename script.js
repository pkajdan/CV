
function setLanguage(lang) {
    document.querySelectorAll('[data-pl], [data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}
