export const capture = async () => {
    try {
        const mediaStreamConstraints = {
            video: { frameRate: { ideal: 30 } },
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44100
            }
        };

        const mediaStream = await navigator.mediaDevices.getUserMedia(mediaStreamConstraints);
        const displayMediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        
        const [videoTrack] = displayMediaStream.getVideoTracks();
        const [audioTrack] = mediaStream.getAudioTracks();

        const combinedStream = new MediaStream([videoTrack, audioTrack]);

        const mediaRecorder = new MediaRecorder(combinedStream, {
            mimeType: 'video/webm;codecs=vp8,opus'
        });

        mediaRecorder.start();

        const chunks: Blob[] = [];


        mediaRecorder.addEventListener('dataavailable', (event) => {
            chunks.push(event.data);
        });

        mediaRecorder.addEventListener('stop', () => {
            const blob = new Blob(chunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'capture.webm';
            link.click();
        });

        setTimeout(() => {
            mediaRecorder.stop();
        }, 10000); // Grabar durante 10 segundos (puedes ajustar esto según tus necesidades)
    } catch (error) {
        if (error instanceof Error) {
            alert('Error al capturar pantalla: ' + error.message);
        } else {
            // Si el error no es de tipo Error, manejarlo de otra manera
            alert('Error desconocido al capturar pantalla');
        }
    }
}
