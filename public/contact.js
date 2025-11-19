document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('form');
    const btn = document.getElementById('button');

    if (!form || !btn) {
        console.error("❌ Formulaire introuvable !");
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Envoi...';
        btn.disabled = true;

        const serviceID = "service_a8ye8rf";
        const templateID = "template_5xw2s6b";

        const templateParams = {
            name: document.getElementById('name').value,
            subject: document.getElementById('subject').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                btn.value = "Envoyer";
                btn.disabled = false;
                alert("✔️ Message envoyé avec succès !");
                form.reset();
            })
            .catch((err) => {
                btn.value = "Envoyer";
                btn.disabled = false;
                console.error("Erreur EmailJS :", err);
                alert("❌ Une erreur est survenue. Détails : " + JSON.stringify(err));
            });
    });
});
