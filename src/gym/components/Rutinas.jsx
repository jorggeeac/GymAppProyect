import React, { useState, createRef } from 'react';
// import { DefaultPlayer as Video } from 'react-html5video';
// import 'react-html5video/dist/styles.css';
import '../hojas-de-estilo/Rutinas.css';
// import img1 from '../videos/abdomen.jpg';
// import Abdomen from '../videos/Abdomen.mp4';
// import img2 from '../videos/triceps.jpeg';
// import Bicepstriceps from '../videos/Bicepstriceps.mp4';
// import img3 from '../videos/gluteos.jpeg';
// import piernasGluteos from '../videos/piernasGluteos.mp4';
// import img4 from '../videos/biceps.jpeg';
// import PechoBiceps from '../videos/PechoBiceps.mp4';
// import img5 from '../videos/pecho.jpeg';
// import Pectorales from '../videos/Pectorales.mp4';
// import img6 from '../videos/semanal.jpeg';
// import semanal from '../videos/Semanal.mp4';

const Rutinas = () => {
    const [model, setModel] = useState(false);
    let data =[ 
        // {
        //     id:1,
        //     poster: img1,
        //     videoUri:Abdomen
        // },
        // {
        //     id:2,
        //     poster: img2,
        //     videoUri: Bicepstriceps
        // },
        // {
        //     id:3,
        //     poster: img3,
        //     videoUri:piernasGluteos
        // },
        // {
        //     id:4,
        //     poster: img4,
        //     videoUri:PechoBiceps
        // },
        // {
        //     id:5,
        //     poster: img5,
        //     videoUri:Pectorales
        // },
        // {
        //     id:6,
        //     poster: img6,
        //     videoUri:semanal
        // }

    ] 
    return(
        <>
        <h1 style={{textAlign:'center'}}> Galeria </h1>
        <div className='gallery'>
            {data.map((item, index)=>{
                let divRef = createRef (null);
                const openModel = () =>{
                    divRef.current.classList.remove('video');
                    divRef.current.classList.add('model');
                    setModel(true);
                }
                const closeModel =() =>{
                    divRef.current.classList.add('video');
                    divRef.current.classList.remove('model');
                    setModel(false);
                }
                return(
                    <div ref= {divRef} className='video' key={index}>
                        {model && <button className="model-close-btn" onClick={()=>closeModel}>X</button>}
                        <div className ="video-container" onClick= {()=> openModel}>
                            <Video 
                                style ={{width: '100%'}}
                                autoPlay ={model}
                                controls ={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                poster ={item.poster}
                            >
                                <source src={item.videoUri} type ="video/webm" />   
                            </Video>

                        </div>
                    </div>    
                )
            })}
        </div>
        </>
    )

}
export default Rutinas;