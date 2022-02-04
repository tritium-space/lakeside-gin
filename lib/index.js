if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.replace("m.home.html");
} else {
    window.location.replace("home.html");
}