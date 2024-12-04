if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

map.on('click', function(e) {
    const marker = L.marker(e.latlng).addTo(map);
    // Save marker to the database
});
