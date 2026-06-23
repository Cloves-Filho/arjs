window.addEventListener("load", () => {

    const marker = document.getElementById("marker");
    const instructions = document.getElementById("instructions");
    const audioEntity = document.getElementById("audioEntity");

    let audioStarted = false;

    marker.addEventListener("markerFound", () => {

        instructions.style.display = "none";

        if (!audioStarted) {

            audioEntity.components.sound.playSound();

            audioStarted = true;
        }
        else {

            const audio =
                audioEntity.components.sound.pool.children[0];

            audio.play();
        }
    });

    marker.addEventListener("markerLost", () => {

        const audio =
            audioEntity.components.sound.pool.children[0];

        audio.pause();
    });

});