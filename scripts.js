document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('callButton').addEventListener('click', function() {
        // Numărul de telefon pe care dorești să îl apelezi
        var phoneNumber = '+40720662255'; // Prefixul international pentru Romania este +40
        
        // Inițializare apel telefonic
        window.location.href = 'tel:' + phoneNumber;
    });

    // JavaScript pentru derulare lină între secțiuni
    var smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obține ținta din href
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Efect de derulare lină
                });
            }
        });
    });
});
