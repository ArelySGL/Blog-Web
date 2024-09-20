document.addEventListener('DOMContentLoaded', function() {
    const indexList = document.getElementById('index');


    const sections = [
        { id: 'pagprincipal', text: 'Home', href: 'index.html' },
        { id: 'crud', text: 'CRUD', href: '.html' },
        { id: 'contacto', text: 'Contacto', href: '.html' },
        { id: 'recurosos', text: 'Recursos', href: '.html' },
        { id: 'equipo', text: 'Nuestro Equipo', href: '.html' }
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

        
