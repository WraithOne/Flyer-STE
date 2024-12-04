if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', { scope: "./" }).then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(error) {
        console.log('ServiceWorker registration failed: ', error);
    });
}else {
    console.error("Service workers are not supported.");
}

document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([51.741694, 7.511204], 20);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    map.on('click', function(e) {
        const marker = L.marker(e.latlng).addTo(map);
        // Save marker to the database
    });
});