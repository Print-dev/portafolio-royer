
import './App.css'
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"
import {FaTiktok} from 'react-icons/fa'
import {BsFillPersonFill, BsFillBoxFill, BsBarChartLineFill} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'
import Aboutme from './components/Aboutme'
import Contacto from './components/Contacto'
import Proyectos from './components/Proyectos'
import { saveAs } from 'file-saver';


function App() {

  return (
    <section id="inicio">

            <div className="contenedor-secciones">
                <nav>
                    <ul>
                        <div>
                            <BsFillPersonFill className="icon-info w-16 h-16 text-white-500 cursor-pointer " data-modal-target="sobremi" data-modal-toggle="sobremi" type="button"/>                            
                        </div>                        
                        <div>
                            <IoMdMail className="icon-info w-16 h-16 text-white-500 cursor-pointer" data-modal-target="contacto" data-modal-toggle="contacto" type="button"/>
                        </div>
                        <div>
                            <BsFillBoxFill className="icon-info w-16 h-16 text-white-500 cursor-pointer"  data-modal-target="proyectos" data-modal-toggle="proyectos" type="button"/>
                        </div>                        
                    </ul>
                </nav>
            </div>
    
            <div className="texto-lorem">    
                <div className='flex flex-col justify-center items-center p-5'>
                        <img src="src/assets/royer.png" className='imagen rounded-full m-5' />
                    <h2 className='titulo'>Royer</h2>
                    <div className="informacion">
                        <p>Programador Web Fullstack</p>
                    </div>
                </div>
                <div className="contenedor-redes-cv">
                    <div className="contenedor-general-redes">
                        <div className="contenedor-redes">
                            <a href="https://github.com/Print-dev"><AiFillGithub className='red w-12 h-12 text-white-500 cursor-pointer'/></a>
                            <a href="https://youtube.com/@print5451"><AiFillYoutube className='red w-12 h-12 text-white-500 cursor-pointer'/></a>
                            <a href="https://www.linkedin.com/in/royer-alexis-avalos-romero-572067238/"><AiFillLinkedin className='red w-12 h-12 text-white-500 cursor-pointer'/></a>
                            <a href="https://www.tiktok.com/@printdev"><FaTiktok className='red w-12 h-12 text-white-500 cursor-pointer'/></a>                                                                
                        </div>
                        <div className="contenedor-cv">
                            <button onClick={()=>{saveAs("/src/assets/CV-RoyerAvalos.pdf", "CV-RoyerAlexisAvalosRomero.pdf")}}>Descargar CV</button>
                        </div>
                    </div>
                </div>
            </div>

            <Aboutme/>
            <Contacto/>
            <Proyectos/>
           
        </section>
        
  )
}

export default App
