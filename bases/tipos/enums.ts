/**
 * Enumeradores en TypeScript
 */
(() => {
    // Nivel de audio de 0 a 10
    enum AudioLevel {
        min = 1,
        medium,
        max = 10,
    }

    let currentAudio = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel);

})();