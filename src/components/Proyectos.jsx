import React from 'react'
import proyecto1 from '../assets/img/proyecto1.png'
import proyecto2 from '../assets/img/cartilla.jpg'

function Proyectos() {
  return (

    <div className='p-5 bg-purple-500/30 flex flex-row'>
        <div className="p-4 m-2 rounded-3xl space-y-6 flex items-center justify-center backdrop-blur-sm bg-white/30">                            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="https://freedatabase.netlify.app">
                    <img className="rounded-t-lg" src={proyecto1}/>
                </a>
                <div className="p-5">
                    <a href="https://freedatabase.netlify.app">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proyecto 1</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Proyecto creado por mi para ayudar a la comunidad amante del desarrollo de base de datos en el cual podrian apoyarse para plasmar una vision clara de su propio proyecto en base a ejemplos.</p>
                    <a href="https://freedatabase.netlify.app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Visitar
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>                    
        </div>
        <div className="p-4 m-2 rounded-3xl space-y-6 flex items-center justify-center backdrop-blur-sm bg-white/30">                            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="https://cartillavirtual.netlify.app">
                    <img className="rounded-t-lg" src={proyecto2}/>
                </a>
                <div className="p-5">
                    <a href="https://cartillavirtual.netlify.app">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proyecto 2</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Cartilla virtual para un restaurante</p>
                    <a href="https://cartillavirtual.netlify.app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Visitar
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>                    
        </div>
    </div>
  )
}

export default Proyectos