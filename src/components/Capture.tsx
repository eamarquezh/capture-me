export const capture = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(media => {
            navigator.mediaDevices.getDisplayMedia({ video: { frameRate: { ideal: 30 } } })
                .then(screenMedia => {
                    const [screenVideo] = screenMedia.getVideoTracks();
                    const [cameraVideo, audio] = media.getTracks();

                    const mediaRecorder = new MediaRecorder(screenMedia, {
                        mimeType: 'video/webm;codecs=vp8,opus'
                    });

                    mediaRecorder.start()

                    screenVideo.addEventListener("ended", () => {
                        mediaRecorder.stop()
                        screenVideo.stop();
                        cameraVideo.stop();
                        audio.stop();
                    });

                    mediaRecorder.addEventListener("dataavailable", (e) => {
                        const link = document.createElement("a")
                        link.href = URL.createObjectURL(e.data)
                        link.download = "captura.webm"
                        link.click();
                    });
                })
                .catch(error => {
                    alert('Error al capturar pantalla:'+error);
                });
        })
        .catch(error => {
            alert('Error al capturar cámara y audio:'+error);
        });
}