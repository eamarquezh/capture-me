export const capture = () => {
    const mediaStreamConstraints = {
        video: { frameRate: { ideal: 30 } },
        audio: {
            echoCancellation: true,
            noiseSuppression: true,
            sampleRate: 44100
        }
    };

    navigator.mediaDevices.getDisplayMedia(mediaStreamConstraints)
        .then(media => {
            const mediaRecorder = new MediaRecorder(media, {
                mimeType: 'video/webm;codecs=vp8,opus'
            });
            mediaRecorder.start()

            const [video] = media.getVideoTracks();
            video.addEventListener("ended", () => {
                mediaRecorder.stop()
            });

            mediaRecorder.addEventListener("dataavailable", (e) => {
                const link = document.createElement("a")
                link.href = URL.createObjectURL(e.data)
                link.download = "capture.webm"
                link.click();
            });
        })
        .catch(error => {
            alert('Error al capturar pantalla:'+error);
        });
}
