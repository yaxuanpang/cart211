(function () {
    const form = document.getElementById("signupForm");
    const overlay = document.getElementById("overlay");
    const msg = document.getElementById("mainMessage");
    const resetBtn = document.getElementById("resetBtn");

    // Show overlay message
    function showOverlay(text) {
        msg.textContent = text;
        overlay.classList.add("show");
        form.style.display = "none";
    }

    function hideOverlay() {
        overlay.classList.remove("show");
        form.style.display = "";
        msg.innerHTML = "";
    }

    // Generate random glitch text
    function randomGlitch(length) {
        const chars = "!@#$%^&*()_+-=<>?/[]{}|ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let out = "";
        for (let i = 0; i < length; i++) {
            out += chars[Math.floor(Math.random() * chars.length)];
        }
        return out;
    }

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();

        // Step 1: message
        showOverlay("do you know who has your information?");

        // Step 2: after 5 sec → glitch effect
        setTimeout(() => {
            let t = 0;
            const glitchDuration = 1500; // 1.5 seconds
            const interval = 60;         // updates every 60ms

            const glitchTimer = setInterval(() => {
                msg.textContent = randomGlitch(50);
                t += interval;

                // End glitch → show 404
                if (t >= glitchDuration) {
                    clearInterval(glitchTimer);
                    msg.innerHTML = `
                        <div class="warning">⚠️ 404 not found</div>
                    `;
                }
            }, interval);
        }, 3000);
    });

    resetBtn.addEventListener("click", hideOverlay);
})();
