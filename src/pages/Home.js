import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"
import Foto from '../assets/photo.jpg'
import { Icon } from '@iconify/react';

export default function Home() {
    return (
      <>
      <main className="flex justify-center py-5 w-full bg-fondoAtras">
        <div className="w-96 shadow-lg bg-fondo bg-repeat m-1">
          <div className="flex flex-col items-center rounded-t-md bg-header bg-no-repeat">
            <div className="w-40 h-16 bg-white rounded-full shadow-lg mt-10">
              <img src={Logo} alt="Logo" className="h-16 w-full p-2"/>
            </div>
            <img src={Foto} alt="Foto" className="h-36 w-36 rounded-full bg-borde border-4 border-borde shadow-xl mt-5" />
          </div>

          <div className="flex flex-col items-center  w-full p-2 rounded-b-md">
            <a href="https://wa.me/584244088235?text=Hola!%20Estoy%20interesad@%20en%20la%20información%20de%20consultas" className="btnHomeGris space-x-8 mt-6">
              <span className="font-bold text-xl ml-3" >Agendar una cita</span>
              <div className="circBtnHome" >
                <Icon icon="ri:contacts-book-fill" className="iconoBtnHome" />
              </div>
            </a>

            <a href="https://t.me/psicoemotion7" className="btnHomeGris space-x-5">
              <span className="font-bold text-xl ml-3" >Canal de Telegram</span>
              <div className="circBtnHome" >
                <svg xmlns="http://www.w3.org/2000/svg" className="iconoBtnHome" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
            </a>

            <Link to="/amorpp" className="btnHomeGris space-x-1">
              <span className="font-bold ml-4 leading-none" >Entrenamiento AMOR<br/>PROPIO: Descúbrete,<br/>Acéptate y Transfórmate</span>
              <div className="circBtnHome" >
              <Icon icon="whh:commentlove" className="iconoBtnHome" />
              </div>
            </Link>

            <a href="https://drive.google.com/file/d/1SmqqZW8b0jmIK3PyrtWri31vzYL8BOr9/view?usp=drive_web" className="btnHomeGris space-x-11">
              <span className="font-bold ml-4 leading-none" >WEBINAR:<br/>Convierte tu mente<br/>en tu refugio</span>
              <div className="circBtnHome">
                <Icon icon="mdi:brain" className="iconoBtnHome" />
              </div>
            </a>

            <div className="flex flex-row w-max h-auto space-x-4 mt-5">
              <a href="https://www.instagram.com/psicoemotion_/" className="redesBotonesHome">
                <Icon icon="akar-icons:instagram-fill" className="text-white w-8 h-8" />
              </a>
              <a href="https://wa.me/584244088235" className="redesBotonesHome">
                <Icon icon="akar-icons:whatsapp-fill" className="text-white w-7 h-7" />
              </a>
              <a href="https://msng.link/o/?@teampsicoemotion=tg"  className="redesBotonesHome">
                <Icon icon="cib:telegram-plane" className="text-white w-8 h-8" />
              </a>
            </div>
            
            <div className="flex flex-row w-max h-auto space-x-3 my-2">
              <a href="https://twitter.com/psicoemotion_" className="redesBotonesHome">
                <Icon icon="akar-icons:twitter-fill" className="text-white w-8 h-8" />
              </a>
              <a href="https://www.facebook.com/PsiAlejandraRodriguez" className="redesBotonesHome">
                <Icon icon="brandico:facebook" className="text-white w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com/@psicoemotion" className="redesBotonesHome">
                <Icon icon="fa-brands:tiktok" className="text-white w-8 h-8" />
              </a>
              <a href="https://youtube.com/channel/UC2FrACe4MyZ92OistK3Qmtw" className="redesBotonesHome">
                <Icon icon="grommet-icons:youtube" className="text-white w-8 h-8" />
              </a>
            </div>

          </div>
          </div>
        </main>
      </>
    );
  }