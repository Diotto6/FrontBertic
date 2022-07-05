import React from 'react'
import Typical from "react-typical";
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='cols'>
                    <div className='colz-icon'>
                    <a href="https://www.instagram.com/nicodiotto/">
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nicolas-diotto-741404218/">
                        <i className='fa fa-linkedin' ></i>
                    </a>
                    <a href="https://github.com/Diotto6">
                        <i className='fa fa-github'></i>
                    </a>

                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                        Olá, Eu sou <span className='highlighted-text'>Nicolas </span>
                    </span>
                </div>
                <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Amante do mundo Tech 😎",
                    1000,
                    "Desenvolvedor Full Stack 💻",
                    1000,
                    "Desenvolvedor Jr 📱",
                    1000,
                  ]}
                />
              </h1>

              <span className='profile-role-tagline'>
                        Habilidade de construir aplicativos com operações de front e back-end.
                    </span>
            </span>
               </div>
                    
                </div>
                    <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    
                </div>
            </div>
        </div>
    </div>
  )
}
