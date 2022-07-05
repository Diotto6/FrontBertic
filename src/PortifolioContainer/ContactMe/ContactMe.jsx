/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from 'react'
import {toast} from "react-toastify"
import Typical from "react-typical";
import imgBack from '../../images/mailz.jpeg'
import load1 from '../../images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import  Animations  from '../../utilities/Animations'
import "./ContactMe.css"
import { CreateEmail } from '../services/api';

export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
      const [nome, setName] = useState("");
      const [number, setNumber] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage ] = useState('')
      const [ banner, setBanner ] = useState('')
      const [ bool, setBool] = useState(false);
    
      const handleName = (e) => {
        setName(e.target.value);
      };
      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handleNumber = (e) => {
        setNumber(e.target.value);
      };
      const handleMessage = (e) => {
        setMessage(e.target.value);
      };
      console.log(nome);

      const handlenewContact = async (e) => {
        e.preventDefault()
        try {
          setBool(true)
          if(nome.length === 0 || email.length === 0 || number.length === 0 || message.length === 0) {
            setBanner("Preencha os campos corretamente")
            toast.error("Preencha os campos corretamente")
            setBool(false)
          } else {
            setBanner("Obrigado pelo comentario");
            toast.success("Obrigado pelo comentario");
            setBool(false)
            await CreateEmail(nome, number, email)
            setName("")
            setNumber("")
            setEmail("")
          }
        } catch (error) {
          console.error(error)
        }
        
      }
     

  return (

    
    <div className='main-container fade-in' 
    id={props.id || ''}>
        <ScreenHeading subHeading={'Vamos manter contato'}

        title={'Contate-me'}
        />
        <div className='central-form' >
            <div className='col'>
            <h2 className="title">
            <Typical loop={Infinity} steps={["Deixe seu contato📧", 1000]} />
          </h2>{" "}
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
            <div className='back-form'>
                <div className='img-back'>
                    <h4>Mande seu email aqui, retornarei em breve!</h4>
                    <img src={imgBack} alt='image not found'/>
                </div>
                <form>
                    <p>{banner}</p>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                     onChange={handleName} 
                     value={nome}
                    />

                    <label htmlFor='number'>Number</label>
                    <input type='number'
                     onChange={handleNumber} 
                     value={number}
                    />

                    <label htmlFor='email'>Email</label>
                    <input type='email'
                    onChange={handleEmail} 
                    value={email}
                    />

                    <label htmlFor='text'>Uma breve mensagem!</label>
                    <input type='text'
                    onChange={handleMessage} 
                    value={message}
                    />
                    <div className='send-btn'>
                        <button type='submit' onClick={handlenewContact}>
                                Enviar<i className='fa fa-paper-plane'/>
                                {bool?(<b className='load'>
                                        <img src={load1} alt='image not responding'/>
                                </b>):("")}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
