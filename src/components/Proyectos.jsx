import React from 'react'
import { Modal } from 'flowbite'

function Proyectos() {
  return (
    <div id="proyectos" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full backdrop-blur-sm bg-white/30">
    <div className="relative w-full max-w-4xl max-h-full">
        
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Proyectos
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="proyectos">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            
            <div className="p-6 space-y-6 flex items-center justify-center ">
                
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://freedatabase.netlify.app">
                         {"/src/assets/" && <img className="rounded-t-lg" src="src/assets/proyecto1.png"/>}
                    </a>
                    <div className="p-5">
                        <a href="#">
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
            
            
        </div>
    </div>
</div>
  )
}

export default Proyectos