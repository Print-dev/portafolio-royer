import React from 'react'
import { saveAs } from 'file-saver';
import royer from '../assets/img/royer.png'
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"
import {FaTiktok} from 'react-icons/fa'
import CVroyer from '../assets/cv/CVroyer.pdf'

function Secciones_inicio() {
  return (
    <div className=" p-3 backdrop-blur-sm bg-sky-400/30">    
        <div className='info rounded-3xl bg-sky-300/40'>
            <div className='flex flex-col justify-center items-center p-5'>
                <img src={royer} className='imagen rounded-full m-5' />
                <div className='text-center '>
                    <h2 className='titulo text-gray-950 text-xl font-bold mb-2'>Royer</h2>
                    <p className='text-white text-lg font-sans mb-5'>Programador Web Fullstack</p>       
                </div>             
            </div>
            
            <div className="contenedor-general-redes">
                <div className='contenedor-info '>
                    <h1 className='sobremi text-center text-white text-xl font-bold mb-2' >Sobre mi</h1>
                    <div className='sobremi p-4'>
                        <p className='text-white'>Diseñador UI, Desarrollador de Sistemas en lenguajes como Python, Javascript y PHP </p>
                    </div>
                </div>
                <div className="contenedor-redes">
                    <a href="https://github.com/Print-dev"><AiFillGithub className='red w-12 h-12 text-white-500 cursor-pointer'/></a>
                    <a href="https://youtube.com/@print5451"><AiFillYoutube className='red w-12 h-12 text-white-500 cursor-pointer'/></a>
                    <a href="https://www.linkedin.com/in/royer-alexis-avalos-romero-572067238/"><AiFillLinkedin className='red w-12 h-12 text-white-500 cursor-pointer'/></a>
                    <a href="https://www.tiktok.com/@printdev"><FaTiktok className='red w-12 h-12 text-white-500 cursor-pointer'/></a>                                                                
                </div>
                <div className="contenedor-cv">
                    <button onClick={()=>{saveAs(CVroyer, "CV-RoyerAlexisAvalosRomero.pdf")}}>Descargar CV</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Secciones_inicio