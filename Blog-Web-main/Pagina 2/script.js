document.addEventListener('DOMContentLoaded', function() {
    const indexList = document.getElementById('index');


    const sections = [
        { id: 'pagprincipal', text: 'Home', href: 'index.html' },
        { id: 'crud', text: 'CRUD', href: 'crud.html' },
        { id: 'contacto', text: 'Contacto', href: 'PagContacto.html' },
        { id: 'recurosos', text: 'Recursos', href: 'index1.html' },
        { id: 'equipo', text: 'Nuestro Equipo', href: 'PIA.HTML' }
    ];
    

    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = section.href;
        a.textContent = section.text;
        li.appendChild(a);
        indexList.appendChild(li);
    });
});
const currentUrl = window.location.pathname;
const navLinks = indexList.querySelectorAll('a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
    }
});
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = link.getAttribute('href').replace('.html', '');
        const section = document.getElementById(sectionId);
        
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
        
