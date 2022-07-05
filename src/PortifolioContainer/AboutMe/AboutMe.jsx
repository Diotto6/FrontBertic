
import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import  Animations  from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    }

      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTSANTS = {
      description: "Apaixonado por tecnologia, games e o mundo Geek, sou um profissional dedicado com histórico de cumprimento dos objetivos passados utilizando praticas consistentes e organizadas. Quero alcançar resultados de posição para a empresa através das minhas experiências adquiridas ao longo dos anos e aprimorar, cada vez mais, minhas habilidades.",
      highlights:{
        bullets:[
            "Desenvolvedor Full Stack Web",
            "Front-end interativo de acordo com o design",
            "ReactTs and ReactJs",
            "REST API",
            "PostgreSQL",
        ],
        heading: "Alguns destaques"
      }
    }
    const renderHighlight = () => {
      return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      ));
    };
  
    return (
      <div
        className="about-me-container screen-container fade-in"
        id={props.id || ""}
      >
        <div className="about-me-parent">
          <ScreenHeading title={"Sobre mim"} subHeading={"Por que me contratar?"} />
          <div className="about-me-card">
            <div className="about-me-profile"></div>
            <div className="about-me-details">
              <span className="about-me-description">
                {SCREEN_CONSTSANTS.description}
              </span>
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                </div>
                {renderHighlight()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
