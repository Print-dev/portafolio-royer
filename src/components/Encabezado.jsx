import '../assets/styles/Encabezado.css'
import {BsFillPersonFill, BsFillBoxFill, BsBarChartLineFill} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'
import {Link} from 'react-router-dom'

function Encabezado() {

  return (
    <div className="inicio">
        <div className="contenedor-secciones">
            <nav>
                <ul className="flex justify-center items-center"> 
                    <div>
                        <Link to={'/'}><BsFillPersonFill className="icon-info w-16 h-16 text-white-500 cursor-pointer" type="button"/></Link>
                    </div>                    
                    <div>
                        <Link to={'/enviar-correo'}><IoMdMail className="icon-info w-16 h-16 text-white-500 cursor-pointer" type="button"/></Link>
                    </div>
                    <div>
                        <Link to={'/proyectos'}><BsFillBoxFill className="icon-info w-16 h-16 text-white-500 cursor-pointer" type="button"/></Link>
                    </div>                        
                </ul>
            </nav>
        </div>             
    </div>        
  )
}

export default Encabezado
