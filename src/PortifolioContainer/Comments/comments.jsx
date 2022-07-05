import React, {useState, useEffect} from 'react'
import load1 from '../../images/load2.gif'
import {toast} from "react-toastify"
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import  Animations  from '../../utilities/Animations'
import "./Comments.css"
import { getComment } from '../services/api';
import { createComment } from '../services/api';

export default function Comments(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
      const [comments, setComments] = useState([])
      const [name, setName] = useState("");
      const [comment, setComment] = useState("");
      const [ banner, setBanner ] =  useState("")
      const [ bool, setBool] = useState(false);


      const handleName = (e) => {
        setName(e.target.value);
      };
      const handleComment = (e) => {
        setComment(e.target.value);
      };
     

      const loadData = async () => {
          const response = await getComment(name, comment)

        setComments(response.data)
      }
      const handlenewComment = async (e) => {
          e.preventDefault()
        try {
          setBool(true)
          if(name.length === 0 || comment.length === 0 ) {
            setBanner("Preencha os campos corretamente")
            toast.error("Preencha os campos corretamente")
            setBool(false)
          } else {
            setBanner("Obrigado pelo comentario");
            toast.success("Obrigado pelo comentario");
            setBool(false)
            await createComment(name, comment)
            setName("")
            setComment("")
            loadData()
          }
        } catch (error) {
          console.error(error)
        }

      }
     

      useEffect(() => {
         loadData()
      })

  return (

   
    <div className='comment-container fade-in' 
    id={props.id || ''}>
        <ScreenHeading subHeading={'Deixe o seu comentario'}

        title={'Comentarios'}
        />
        <div className="main"> 
        <p>{banner}</p>
              <div className="Comments">  
              { comments.map((e) => (

                <ul className='example' key={e.id}>
                  <li className="name">
                    {e.name.toUpperCase()}
                   
                  </li>
                  <div className="comments">
                    "{e.comment}"
                  </div>
             </ul>      
            ))
                }
               </div>
          </div>
        <div className='comment-form'>
                <form >
                    <label htmlFor='name'>Nome</label>
                    <input type='text'
                     onChange={handleName} 
                     value={name}
                    />

                    <label htmlFor='comment'>Comentario</label>
                    <input type='text'
                    onChange={handleComment} 
                    value={comment}
                    />

                    <div className='send-btn'>
                        <button type='submit' onClick={handlenewComment}>
                                Enviar<i className='fa fa-paper-plane'/>
                                {bool?(<b className='load'>
                                        <image src={load1} alt='image not responding'/>
                                </b>):("")}
                        </button>
                    </div>
                </form>
                </div>
                </div>
          
  )
}
