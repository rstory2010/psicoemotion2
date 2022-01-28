import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

export default function Amorpp() {
    return (
      <div>
        <main className="flex justify-center w-full bg-fondoAtras ">
          <div className="w-96 shadow-lg bg-fondoHerba m-1 p-4">
            <div className="flex flex-col items-center rounded-t-md">
              <h2 className="text-xl font-spartanB">Amor Propio: Descúbrete, Acépcate y</h2>
              <h2 className="text-xl font-spartanB">Transfórmate</h2>
              <br />
              <h2 className="text-xl font-spartanB">Entrenamiento de 30 días</h2>
              
              {/* segmento 1 */}
              <div className="flex flex-row justify-center my-5 gap-14">
                <div className="w-32 h-32 bg-ciruela text-center text-white font-extrabold">imagen</div>
                <div className="w-32 h-32 bg-ciruela text-center text-white font-extrabold">imagen</div>
              </div>
            
              <p className="text-center p-4" >A lo largo de mi práctica profesional he podido ver como muchas personas se quedan estancadas en vidas que no quieren, en estados emocionales negativos, con personas que no quieren, con trabajos que odian y dejando que su vida pase, mientras son infelices.</p>
            
              <div className="w-48 h-56 bg-verde text-center text-white font-extrabold m-4">imagen</div>
            
              <h2 className="text-xl font-spartanB text-center m-5">¿Por qué es tan frecuente ver cada vez más personas sumergidas en una vida que no quieren?</h2>

              <div className="w-72 h-44 bg-ciruela text-center text-white font-extrabold m-4">foto</div>

              <p className="text-center p-4" >Porque nos enseñaron a que debíamos estudiar, tener una familia, un buen trabajo y un plan de jubilación, pero no nos enseñaron a como estar tranquilos con nosotros mismos cada día, no nos enseñaron a identificar y ponerle nombre a eso que sentimos, no nos enseñaron a hacer pareja saludable, no nos enseñaron que es más importante hacer lo que te gusta a tener un empleo que te de para "vivir", no nos enseñaron a reconocer y atender nuestro niño interno, es que no nos han enseñado a amarnos.</p>
              
              <div className="w-72 h-44 bg-verde text-center text-white font-extrabold m-4">foto</div>

              <h2 className="text-xl font-spartanB text-center m-5">Amarnos puede ser tan fácil de decir, pero ¿qué es realmente tener amor propio?,¿de qué se trata ese amor que todos debemos tener, que todos quieren tener pero que pocos saben desarrollar?</h2>
              
              <div className="w-72 h-44 bg-ciruela text-center text-white font-extrabold m-4">foto</div>
              
              <h2 className="text-xl font-spartanB text-center m-5">He diseñado un entrenamiento para que puedas desarrollar tu amor propio, te acompañaré durante 30 días con técnicas y herramientas que he probado con cientos de personas que me ha permitido el privilegio de acompañarlos en sus procesos y donde he podido probar que es más eficiente y práctico para desarrollar y evaluar tu amor propio.</h2>
              
              {/* segmento 2 */}
              <div className="w-72 h-44 bg-verde text-center text-white font-extrabold mt-20">foto Segmento2</div>
              <h2 className="text-3xl font-spartanB text-center m-5">¿Qué aprenderás en este entrenamiento?</h2>

              <div className="s2Div" >
                  <div className="s2Caja">cerebro</div>                
                  <div className="text-2xl font-spartanB w-64 ml-5">Inteligencia emocional</div>                
              </div>
              <p className="s2Texto" >Derribaras tus creencias limitantes, maximizaras las potenciadoras, reconorás tus patrones de conducta, para transformarte en tu mejor versión</p>

              <div className="s2Div" >
                  <div className="s2Caja">manito</div>                
                  <div className="s2Titulo">Sanar tus heridas emocionales</div>                
              </div>
              <p className="s2Texto" >Sanar y comprender la relación con tus padres, niño interno y tus relaciones de pareja.</p>

              <div className="s2Div" >
                  <div className="s2Caja">cabeza estrella</div>                
                  <div className="s2Titulo">Creencias y patrones de conducta</div>                
              </div>
              <p className="s2Texto" >Derribaras tus creencias limitantes, maximizaras las potenciadoras, reconocerás tus patrones de conducta, para transformarte en tu mejor versión.</p>

              <div className="s2Div" >
                  <div className="s2Caja">bombillo piezas</div>                
                  <div className="s2Titulo">Organización mental</div>                
              </div>
              <p className="s2Texto" >Aprenderás a organizar tus ideas para sacarle máximo provecho, a gestionar tu tiempo y ser más productiv@ en las áreas que quieras.</p>
              
              {/* segmento 3 */}
              <h2 className="text-3xl font-spartanB text-center mt-20">Contenido del Entrenamiento</h2>
              <div className="s3Div" >
                  <div className="s3Caja">cabeza bombillo</div>                
                  <div className="s3Titulo">FASE 1: DESCÚBRETE</div>                
              </div>
              <ul className="s3List text-xl">
                <li>- Aprendiendo de mis emociones.</li>
                <li>- Conectando con mi niño interior.</li>
                <li>- Sanando mi relación con mamá.</li>
                <li>- Sanando mi relación con papá.</li>
              </ul>
              <div className="s3Div" >
                  <div className="s3Titulo">FASE 2: ACÉPTATE</div>                
                  <div className="s3Caja">cabeza mas</div>                
              </div>
              <ul className="s3List text-xl">
                <li>- Creencias y patrones de conducta.</li>
                <li>- El espejo donde me reflejo.</li>
              </ul>
              <div className="s3Div" >
                  <div className="s3Caja">cabeza tool</div>                
                  <div className="s3Titulo">FASE 3: TRANSFÓRMATE</div>                
              </div>
              <ul className="s3List text-lg ">
                <li>- Cultivando mi amor propio.</li>
                <li>- Construyendo la persona que quiero ser.</li>
                <li>- Hábitos de una persona que se ama.</li>
                <li>- Claves para lograr la vida que quiero.</li>
              </ul>

              <div className="flex justify-left w-full">
                <div className="w-24 h-16 bg-ciruela text-center text-white font-extrabold my-5 rounded-full">boton</div>
              </div>

              {/* segmento 4 */}
              <h2 className="text-3xl font-spartanB text-center mt-20">¿PARA QUIÉN ES ESTE ENTRENAMIENTO?</h2>
              
              <div className="rounded-full h-32 w-32 bg-verde mt-10 mb-8"></div>
              <p className="text-center text-xl px-3">Personas que quieren dejar de auto sabotearte y elevar su amor propio, trabajar su seguridad personal, y tener una vida plena.</p>

              <div className="rounded-full h-32 w-32 bg-ciruela mt-10 mb-8"></div>
              <p className="text-center text-xl px-3">Personas que quieren sanar sus relaciones, conectar de forma saludable con otros y sentirse bien con la persona que son.</p>

              <div className="rounded-full h-32 w-32 bg-verde mt-10 mb-8"></div>
              <p className="text-center text-xl px-3">Personas que quieren mejorar su salud mental y emocional, cambiar hábitos de vida y crear una mentalidad de éxito.</p>

              <div className="rounded-full h-32 w-32 bg-ciruela mt-10 mb-8"></div>
              <p className="text-center text-xl px-3">Personas que quieren organizar sus ideas, enfocarse en sus proyectos y tener éxito personal y profesional.</p>

              {/* segmento 5 */}
              <h2 className="text-3xl font-spartanB text-center mt-20">¿QUÉ NECESITO PARA TOMAR ESTE ENTRENAMIENTO?</h2>
              <div className="s5Div" >
                  <div className="s5Caja">internet</div>                
                  <div className="s5Texto">Buena conexión a internet.</div>                
              </div>

              <div className="s5Div" >
                  <div className="s5Caja">reloj</div>                
                  <div className="s5Texto">Par de horas a la semana para las clases. Las que podrás ver en vivo o grabadas, según tu disponibilidad.</div>                
              </div>

              <div className="s5Div" >
                  <div className="s5Caja">niño</div>                
                  <div className="s5Texto">Compromiso contigo y ganas de aprender.</div>                
              </div>

              {/* segmento 6 */}
              <h2 className="text-3xl font-spartanB text-center mt-20">BENEFICIOS DE ENTRENARTE CONMIGO</h2>
              <div className="s6Div" >
                  <div className="s6Caja bg-ciruela"></div>                
                  <div className="s6Texto"><strong>PSICÓLOGO CLÍNICO:</strong> tengo mas de 14 años estudiando comportamiento humano.</div>                
              </div>

              <div className="s6Div" >
                  <div className="s6Caja bg-verde"></div>                
                  <div className="s6Texto"><strong>PSICOTERAPEUTA:</strong> tengo mas de 14 años estudiando comportamiento humano.</div>                
              </div>

              <div className="s6Div" >
                  <div className="s6Caja bg-ciruela"></div>                
                  <div className="s6Texto"><strong>TERAPEUTA COGNITIVO CONDUCTUAL:</strong> poseo herramientas, estrategias y técnicas para la modificación de conducta, según la corriente del Dr. Aaron Beck.</div>                
              </div>

              <div className="s6Div" >
                  <div className="s6Caja bg-verde"></div>                
                  <div className="s6Texto"><strong>TERAPEUTA DE PAREJAS:</strong> te morstraré como te reflejas en tu pareja, para que sanes tus relaciones interpersonales.</div>                
              </div>

              <div className="s6Div" >
                  <div className="s6Caja bg-ciruela"></div>                
                  <div className="s6Texto"><strong>COACH PROFESIONAL:</strong> te ayudo a organizar tu mente, tus ideas, a planificarte con método, para que tengas proyectos exitosos.</div>                
              </div>

              <div className="s6Div" >
                  <div className="s6Caja bg-verde"></div>                
                  <div className="s6Texto"><strong>PROCESO PERSONAL:</strong> mas de 4 años de proceso terapéutico como paciente, me permiten comprenderte mejor y saber como ayudarte.</div>                
              </div>

               {/* segmento 7 */}
               <h2 className="text-5xl font-spartanB text-center mt-20">¡AÚN HAY MÁS!</h2>
               <div className="rounded-full h-32 w-32 bg-ciruela border-8 border-verde mt-10 mb-8"></div>
               <p className="text-justify font-bold text-xl mx-3">
                 Tu tranquilidad para mi es muy importante, por lo que tu compra esta protegida con mi cobertura de garantía. Prueba el entrenamiento durante 7 días, sino estás conforme, te regreso el 100% de tu inversión.
               </p>
               
               <h2 className="text-5xl font-spartanB text-center mt-20">¡QUE LA FALTA DE DINERO NO TE DETENGA!</h2>

               <div className="rounded-full h-32 w-32 bg-verde border-8 border-ciruela mt-10 mb-8"></div>

               {/* segmento 8 */}
               <p className="text-2xl font-spartanB text-justify mt-16 mx-2">
                  Quiero que te vengas a entrenar conmigo, que te eduques y te entrenes apara que tengas la vida que quieras.
                </p>
                <p className="text-2xl font-spartanB text-justify mt-10 mx-2">
                  Por eso he ideado un sistema con 3 opciones para que lo hagas, sin que el dinero sea un problema.
                </p>
                <div className="s8Div" >
                  <div className="s8Caja">options</div>                
                  <div className="s8Texto">Si refieres a 3 personas al entrenamiento, que paguen su cupo, tendrás un descuento del 50%.</div>                
              </div>

              <div className="s8Div" >
                  <div className="s8Caja">options</div>                
                  <div className="s8Texto">Si refieres a 5 personas al entrenamiento, que paguen su cupo, tendrás un descuento del 100%.</div>                
              </div>

              <div className="s8Div" >
                  <div className="s8Caja">options</div>                
                  <div className="s8Texto">Si adicionalmente quieres generar ingresos con mis productos, por cada venta que hagas de mi entrenamiento, te otorgaré el 10%. Pregunta por el código de afiliación.</div>                
              </div>
              
                <div className="h-48 w-48 bg-teal rounded-full flex flex-row justify-center items-center shadow-lg">
                  <Icon icon="logos:whatsapp" className="w-24 h-24" />
                </div>
              
            </div>
          </div>
        </main>



        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    );
  }