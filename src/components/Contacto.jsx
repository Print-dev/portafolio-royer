import React , {useRef} from 'react'
import { Modal } from 'flowbite';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fnx2s9l', 'template_8p0yfxq', form.current, 'exWcFaG5lzRbc8_qw')
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
    <div class="p-3 bg-yellow-100/30 w-full max-w-xs">
        
        <form className="backdrop-blur-sm bg-yellow-100/30 shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4" ref={form} onSubmit={sendEmail}>
            <h1 className='text-center text-gray-700 text-xl font-bold mb-2'>Enviar Correo</h1>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
                </label>
                <input type="text" name="user_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Username"/>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Email
                </label>
                <input type="email" name="user_email"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email"/>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Mensaje
                </label>
                <textarea name="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Mensaje"/>
            </div>
            <div class="flex items-center justify-center">
                <button type="submit" value="Send" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Enviar
                </button>
            </div>
        </form>
  </div>
  )
}

export default Contacto