if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.replace("mobile/index.html");
}

function reloadPage() {
    location.reload(true);
}
