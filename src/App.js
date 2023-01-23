import './App.css';
import { useState } from 'react';
import fotomia from './img/fotomia.jpeg'
import certificateCSS from './img/certificateCSS.jpg'
import certificateHTML from './img/certificateHTML.jpg'
import certificateJS from './img/certificateJS.jpg'
import certificatePY from './img/certificatePY.jpg'
import css from './img/css.png'
import html from './img/html.png'
import js from './img/js.png'
import card from './img/card.jpg'
import python from './img/python.png'
import react from './img/react.png'
import cssPdf from './pdf/css.pdf'
import htmlPdf from './pdf/html.pdf'
import jsPdf from './pdf/js.pdf'
import pythonPdf from './pdf/python.pdf'
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className='body'>
      <section className='header' name='header'>
            <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">Home</a>
            <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">About</a>
            <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">Contact</a>
        </section>
        <section className='aboutMe'>
        <img src={fotomia} className="fotomia"></img>
        <div className='aboutMe2-2'>
       <h3 className='textAboutMe2-1'>Quien soy</h3>
       <p className='textAboutMe2'>Hola, mi nombre es Nehuen y soy un joven autodidacta en programación Frontend. Empecé a aprender sobre desarrollo web hace unos años y desde entonces me he enamorado del poder de crear sitios web atractivos y funcionales. Me enfoco en las últimas tecnologías y tendencias en el desarrollo web, especialmente en HTML, CSS y JavaScript.</p>
       <p className='textAboutMe2'>A través de mi viaje de aprendizaje, he trabajado en varios proyectos personales y colaborado con equipos de desarrollo en proyectos profesionales. Siempre estoy buscando nuevos desafíos y oportunidades para mejorar mis habilidades y aprender algo nuevo.</p>
       </div>
       <div className='aboutMe2'>
       <h3 className='textAboutMe2-1'>Mi objetivo laboral</h3>
       <p className='textAboutMe2'>Mi objetivo laboral es desarrollarme profesionalmente en una empresa en constante crecimiento y formar parte de un equipo comprometido y motivado. Soy una persona proactiva y responsable, con facilidad para adaptarme a cambios y situaciones nuevas.</p>
       <p className='textAboutMe2'>Tengo una licenciatura en Administración de Empresas y he adquirido conocimientos en finanzas, marketing y recursos humanos, así como habilidades blandas y de liderazgo a través de cursos y talleres.</p>
       <p className='textAboutMe2'>Mi objetivo es aplicar mis conocimientos y habilidades en un ambiente de trabajo que me permita seguir aprendiendo y contribuir al desarrollo y éxito de la empresa.</p>
       </div>
       <section name='estudios'>
       <div className='aboutMe2-4'>
       <h3 className='textAboutMe2-1-2'>Mis Estudios</h3>
       <div className='habilidades'>
        <div className='habilidades2'>
        <a href='/pdf/html.pdf' onclick="openImage('certificateHTML.jpg');">
          <img src={certificateHTML} className="certificateImg"></img>
          <p>HTML</p>
        </a>
        </div>
        <div className='habilidades2'>
        <a href='/pdf/css.pdf' onclick="openImage('certificateCSS.jpg');">
          <img src={certificateCSS} className="certificateImg"></img>
          <p>CSS</p>
        </a>
        </div>
        <div className='habilidades2'>
        <a href='/pdf/js.pdf' onclick="openImage('certificateJS.jpg');">
          <img src={certificateJS} className="certificateImg"></img>
          <p>JS</p>
        </a>
        </div>
        <div className='habilidades2'>
        <a href='/pdf/py.pdf' onclick="openImage('certificatePY.jpg');">
          <img src={certificatePY} className="certificateImg"></img>
          <p>PY</p>
        </a>
        </div>
       </div>
       </div>
       </section>
       <section name='aboutMe'>
       <div className='aboutMe2-3'>
        <h3 className='textAboutMe2-1'>Mis Habilidades</h3>
        <div className='habilidadesLogos'>
        <div className='logoBox'>
           <div className='logoContainer'>
             <div className='logoHTML'>
                <img id="html" src={html} className="logoImg"></img>
               </div>
               <br></br>
             <div>
                <p className='textAboutMe2'>HTML</p>
               </div>
           </div>
         </div>
         <div className='logoBox'>
           <div className='logoContainer'>
             <div className='logoHTML'>
                <img id="css" src={css} className="logoImg"></img>
               </div>
               <br></br>
             <div>
                <p className='textAboutMe2'>CSS</p>
               </div>
           </div>
         </div>
         <div className='logoBox'>
           <div className='logoContainer'>
             <div className='logoHTML'>
                <img id="js" src={js} className="logoImg"></img>
               </div>
               <br></br>
             <div>
                <p className='textAboutMe2'>JS</p>
               </div>
           </div>
         </div>
         <div className='logoBox'>
           <div className='logoContainer'>
             <div className='logoHTML'>
                <img id="py" src={python} className="logoImg"></img>
               </div>
               <br></br>
             <div>
                <p className='textAboutMe2'>PY</p>
               </div>
           </div>
         </div>
         <div className='logoBox'>
           <div className='logoContainer'>
             <div className='logoHTML'>
                <img id="react" src={react} className="logoImg"></img>
               </div>
               <br></br>
             <div>
                <p className='textAboutMe2'>REACT</p>
               </div>
           </div>
         </div>
        </div>
       </div>
       </section>
       <section name='trabajos'>
        <div className='aboutMe2-5'>
       <div className='aboutMe2-2'>
       <h3 className='textAboutMe2-1'>Mis trabajos</h3>
       <div className='gridTrabajos'> {/* Aqui irian los trabajos */}
    
       <div className='cardTrabajos'>
        <div>
          <p>Trabajo 1</p>
         </div>
         <div>
         <img src={card} className='cardImg'></img> {/* Aqui iria la imagen */}
            </div> 
            <div> {/* Aqui irian los iconos en grid*/}
              <p>icons</p>
              </div>
        </div>

        <div className='cardTrabajos'>
          <div>
           <p>Trabajo 2</p>
           </div>
           <div>
           <img src={card} className='cardImg'></img>
            </div> 
            <div>
              <p>icons</p>
              </div>
         </div>

        <div className='cardTrabajos'>
        <div>
           <p>Trabajo 3</p>
           </div>
           <div>
           <img src={card} className='cardImg'></img>
            </div> 
            <div>
              <p>icons</p>
              </div>
         </div>

        <div className='cardTrabajos'>
        <div>
           <p>Trabajo 4</p>
           </div>
           <div>
           <img src={card} className='cardImg'></img>
            </div> 
            <div>
              <p>icons</p>
              </div>
         </div>

        <div className='cardTrabajos'>
        <div>
           <p>Trabajo 5</p>
           </div> 
           <div>
           <img src={card} className='cardImg'></img>
            </div> 
            <div>
              <p>icons</p>
              </div>       
         </div>

        <div className='cardTrabajos'>
         <div>
           <p>Trabajo 6</p>
          </div>      
          <div>
          <img src={card} className='cardImg'></img>
            </div> 
            <div>
              <p>icons</p>
              </div> 
         </div>

        </div>
       </div>
        </div>
       </section>
       </section>
       <section className='habilidades2' name='contacto'>
        <div className='habilidades2'>
        <h3 className='textAboutMe2-1'>Contacto</h3>
        <p className='textAboutMe2'>Si te interesa mi perfil, no dudes en contactarme.</p>
        <form className='contact'>
          <input type="text" id="name" name="name" placeholder="Tu nombre.." className='inputContact'></input>
          <input type="email" id="email" name="email" placeholder="Tu email.." className='inputContact'></input>
          <textarea id="subject" name="subject" placeholder="Escribe algo.." className='inputContact'></textarea>
          <button type="submit" value="Enviar" className='contactButton'>Enviar</button>
        </form>
        </div>
       </section>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));