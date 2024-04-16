import imgCapturApp from '../assets/logo_capturapp.webp'
import iconCam from '../assets/capturapp.svg'
import buttonDonation from '../assets/bmc-button.png'

import {capture} from '../components/Capture.tsx'

function Main() {
    return (
      <>
        <img className="filter drop-shadow-xl mx-auto w-36" 
            src={imgCapturApp} 
            alt="logo de capturapp" 
        />
        <button onClick={capture} className="bg-amber-950 hover:bg-amber-900 text-white font-bold py-2 px-4 rounded flex mx-auto">
            <img className="w-6 h-6 mr-2" 
            src={iconCam}
            alt="Icono de cámara" 
            />
            Capture Me
        </button>
        <p className="text-base font-mono text-center">
            Capture your screen without worries, simply press the 'Capture Me' button, and you can choose the method of recording. When finished, just press 'Stop,' and your video will be downloaded in WebM format.
        </p>
        <div className="flex justify-center items-center aspect-w-16 aspect-h-9">
            <iframe
                width="476"
                height="268"
                src="https://www.youtube.com/embed/mqPhLIemuR0?si=E4lPlW0Z92nH42oL"
                title="How to use captureme"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
        <div className="items-center m-2">
            <p className="text-base font-mono text-center">
                Captureme is free, but if you feel it's worth it,you can buy me a coffee with the following button.
            </p>
            <a href='https://www.buymeacoffee.com/eamarquezh' target='_blank'>
                <img className="filter drop-shadow-xl mx-auto w-36" 
                src={buttonDonation} 
                alt="logo de capturapp" 
                />
            </a>
        </div>
      </>
    )
  }
  
  export default Main