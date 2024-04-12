let currentZoom = 100;

function setZoom(zoom) {
    document.body.style.zoom = `${zoom}%`;
    currentZoom = zoom;
}

// Button to increase text size
document.getElementById('increaseTextSize').addEventListener('click', function () {
    currentZoom += 10;
    setZoom(currentZoom);
});

// Button to decrease text size
document.getElementById('decreaseTextSize').addEventListener('click', function () {
    currentZoom -= 10;
    setZoom(currentZoom);
});

// Function to store the zoom level in cookies
function storeZoomLevel(zoom) {
    document.cookie = `zoomLevel=${zoom}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=None; Secure`;
}

// Function to retrieve the zoom level from cookies
function getZoomLevelFromCookie() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === "zoomLevel") {
            return parseFloat(value);
        }
    }
    return null;
}

// Set the zoom level from cookies (if available)
const storedZoomLevel = getZoomLevelFromCookie();
if (storedZoomLevel) {
    setZoom(storedZoomLevel);
}

// Store the zoom level when the zoom changes
document.addEventListener('zoom', function () {
    storeZoomLevel(currentZoom);
});