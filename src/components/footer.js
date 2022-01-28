import photo from '../assets/photo.jpg'
import { Icon } from '@iconify/react';

function Footer() {
    return (
    <footer className="mx-auto w-full bg-ciruela">
        <div className="sm:flex sm:pt-6">
            <div className="w-full px-8 flex flex-col md:flex-row md:space-x-72 md:justify-center">
                <div className="flex flex-col">
                    <span className="font-bold text-gray-100 uppercase mt-4">REDES</span>
                    <a href="https://www.instagram.com/psicoemotion_/" className="inline-flex text-white hover:font-bold my-2">
                        <Icon icon="akar-icons:instagram-fill" className="text-white w-8 h-8" />
                        <span className="ml-2 text-md">Instagram</span>
                    </a>
                    <a href="https://twitter.com/psicoemotion_" className="inline-flex text-white hover:font-bold my-2">
                        <Icon icon="akar-icons:twitter-fill" className="text-white w-8 h-8" />
                        <span className="ml-2 text-md">Twitter</span>
                    </a>
                    <a href="https://t.me/psicoemotion7" className="inline-flex text-white hover:font-bold my-2">
                        <Icon icon="bx:bxl-telegram" className="text-white w-8 h-8" />
                        <span className="ml-2 text-md">Grupo Telegrama</span>
                    </a>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-100 uppercase mt-4">CONTACTO DIRECTO</span>
                    <a href="https://wa.me/584244088235" className="inline-flex text-white hover:font-bold my-2">
                        <Icon icon="akar-icons:whatsapp-fill" className="text-white w-8 h-8" />
                        <span className="ml-2">WhatsApp</span>
                    </a>
                    <a href='https://wa.me/584244088235?text=Hola!%20Estoy%20interesad@%20en%20la%20información%20de%20consultas' className="inline-flex text-white hover:font-bold my-2">
                        <Icon icon="akar-icons:whatsapp-fill" className="text-white w-8 h-8 animate-bounce" />   
                        <span className="ml-2 text-md ">Agendar Cita</span>
                    </a>
                    <a href="tel:+58424-408-8235" className="inline-flex text-white hover:font-bold my-2">
                        <svg width="30" height="30" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" className="svg-inline--fa fa-mobile-alt fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
                        <span className="ml-2 text-md">Teléfono</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="mx-auto p-2">
            <div className="w-full mt-8 border-t-2 border-borde ">
                <div className="flex flex-col items-center text-sm text-white">
                    <img src={photo} alt="foto" className="m-2 h-36 w-36 rounded-full bg-borde border-4 border-borde relative shadow-xl" />
                    <span>©2022 by</span>
                    <strong>Psic. Alejandra Rodríguez | PsicoEmotion</strong>
                    <span>C.C. Concepto La Granja</span>
                    <span>Torre Serv Médicos, Consult. 2-16</span>
                    <span>Naguanagua - Venezuela - Cod. Postal 2005</span>
                </div>
            </div>
        </div>
</footer>
)}

export default Footer