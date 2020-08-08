import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
function TeacherItem(){
    return(
        <article className="teacher-item">
                   <header>
                       <img src="https://avatars3.githubusercontent.com/u/67649690?s=460&u=698710872b94f0118134375f423c631eb89c6ac3&v=4" alt="Michael Douglas"/>
                       <div>
                           <strong>Michael Douglas</strong>
                           <span>Programação Orientada a Objetas</span>
                       </div>
                    </header>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat!
                        <br/><br/>   
                        Nam natus, blanditiis quidem similique, fugit rem hic possimus cum eius reiciendis quibusdam in labore tempore? Voluptatem qui excepturi libero?</p>
                        
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 70,00 </strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Entrar em Contato"/> 
                            Entrar em contato
                        </button>
                    </footer>
               </article>
    );
}

export default TeacherItem;