if (!window.matchMedia("(max-width: 768px)").matches) {
    const initParallaxScrolling = () => {
        new universalParallax().init({
            speed: 4
        });
    }
    
    (function main() {
        initParallaxScrolling();
    })();
}