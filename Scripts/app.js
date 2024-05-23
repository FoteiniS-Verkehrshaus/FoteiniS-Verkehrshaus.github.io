// `app.js` file
document.addEventListener('DOMContentLoaded', () => {
    const marker = document.querySelector('a-marker');

    marker.addEventListener('markerFound', () => {
        console.log('Marker found!');
    });

    marker.addEventListener('markerLost', () => {
        console.log('Marker lost!');
    });
});
