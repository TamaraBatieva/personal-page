var img = new Image();
img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
img.onerror = fallback;
img.onload = function () {
    if (!((img.width > 0) && (img.height > 0))) {
        fallback();
    }
};

function fallback() {
    $("header").addClass("webp-fallback")
};