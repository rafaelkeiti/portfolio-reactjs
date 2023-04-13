import { HeaderGlobal } from '../../components/header';
import { FooterGlobal } from '../../components/footer';
import './styles.css'

import logoRight from '../../assets/imgs/logoFace.png'
import imageAbout from '../../assets/imgs/image-aboutme.png'

export function PresentationPage() {
  return (
    <>
      <HeaderGlobal />
      <section className="start">
        <div className="background-flex">
          <div className="left">
            <div className="left-size">
              <h1>Olá, <span>meu nome é</span></h1>
              <p className="presentation-name">Rafael Keiti Azuma</p>
              <p>Conheça mais sobre meu trabalho 🎈</p>
            </div>
          </div>
          <div className="right">
            <img src={logoRight} alt="" />
          </div>
        </div>
      </section>

      <section className="aboutMe" id='about'>
        <div className="background-about">
          <div className="content-about">
            <div className="image-about">
              <img src={imageAbout} alt="" />
            </div>
            <div className="title-about">
              Sobre mim
              <div className="text-about">
                Desde muito jovem, sempre fui interessado na área de tecnologia e desenvolvimento de servidores/mods de jogos, o que me levou a explorar mais e a aprender lógica de programação.
                Atualmente, estou em aprendizado no projeto NeuronFarm ministrado pelo <a href='https://www.linkedin.com/in/caiuzu'>Caio Souza</a> e tenho conhecimentos prévios em tecnologias como NodeJS, ReactJS e Java.
                Estou focado em aprimorar meus conhecimentos em Java, o qual comecei a estudar do zero.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects" id='projects'>
        <div className='background-proj'>
          <div className='title-proj'>
            Projetos
          </div>
          <div className="card-projects">
            <div className="card-container-projects">
              <h2>EM BREVE</h2>
            </div>

            <div className="card-container-projects">
              <h2>EM BREVE</h2>
            </div>

            <div className="card-container-projects">
              <h2>EM BREVE</h2>
            </div>

            <div className="card-container-projects">
              <h2>EM BREVE</h2>
            </div>

            <div className="card-container-projects">
              <h2>EM BREVE</h2>
            </div>

            <div className="card-container-projects">
              <h2>EM BREVE</h2>
            </div>
          </div>
        </div>
      </section>
      <FooterGlobal />
    </>
  )
}