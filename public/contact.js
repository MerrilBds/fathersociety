(function () {
 

    const btn = document.getElementById('button');

    document.getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Envoie...';

            const serviceID = 'service_a8ye8rf';
            const templateID = 'template_5xw2s6b';

            // Récupére les valeurs des champs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Remplace les variables dans le template emailjs
            const templateParams = {
                name: name,
                subject:subject,
                email: email,
                message: message
            };

            emailjs.send(serviceID, templateID, templateParams)
                .then(() => {
                    btn.value = 'Envoyer';
                    alert('Envoyé avec succès!');
                }, (err) => {
                    btn.value = 'Envoyer';
                    alert(JSON.stringify(err));
                });
        });
})();