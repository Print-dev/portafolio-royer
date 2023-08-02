import React , {useRef} from 'react'
import { Modal } from 'flowbite';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            toast.success("mensaje enviado!", {duration:10000})
            console.log(result.text);
            console.log("mensaje enviado")
            
        }, (error) => {
            toast.error("ocurrio un error",  {duration:10000})
            console.log(error.text);
            
        });
    };

  return (
    <div id="contacto" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full backdrop-blur-sm bg-white/30">
        <div className="relative w-full max-w-md max-h-full ">
            
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700"  >
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="contacto">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Contactame</h3>
                        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu nombre</label>
                                <input type="text" name="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo</label>
                                <input type="email" name="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu mensaje</label>
                                <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" name="message" required/>
                            </div>
                            
                            <button type="submit" value="Send" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar Mensaje</button>
                            
                        </form>
                    </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default Contacto