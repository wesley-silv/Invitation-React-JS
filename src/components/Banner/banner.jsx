import './banner.sass';
import {ImWhatsapp} from 'react-icons/all';
import {ImLocation} from 'react-icons/all';
import {GiPresent} from 'react-icons/all'


const Banner = () => {

  const imagem = '../src/assets/Wesley & Meliny.svg'

  return (
    <div className='banner'>
      <img src={imagem} alt='Fotografia de perfil dos noivos' />
      <h4>
        "Assim, toda a casa cobriu de ouro, até acabar toda a casa."
      </h4>
      <h1>
        Meliny Sara & Wesley Silva
      </h1>
      <p>
        Convidam para cerimônia de seu casamento em um culto de glorificação a Deus
      </p>
      <p>Realizar-se no dia:</p>
      <h1>
        03 de março de 2023
      </h1>
      <h2>
        Às 19:30 horas
      </h2>
      <p>
        Clique para acessar
      </p>
      <div className="links_container">
        <a href='https://www.google.com.br/maps/place/Av.+Dom+Jos%C3%A9+Andr%C3%A9+Coimbra,+1520+-+Marciano+Brand%C3%A3o,+Patroc%C3%ADnio+-+MG,+38740-000/@-18.9446518,-47.0045441,15z/data=!3m1!4b1!4m5!3m4!1s0x94afba6190720015:0x1c1d6cc851af332d!8m2!3d-18.944652!4d-46.9957893' alt='Localização pel o Google Maps' title='Localização' target='blank'>
          <ImLocation size={30} />
          Localização
        </a>
        <a href='https://wa.me/553492540828?text= Olá Wesley, estou entrando em contato para confirmar a minha participação em seu casamento.' alt='' title='Confirmação de presença' target='blank'><ImWhatsapp size={30}/>  Confirmar</a>
      </div>
      <a href='' alt='Logo de presentes' title='Presentear' target='blank'>
        <GiPresent size={35}/>
        Presentear
      </a>
    </div>
  )
}

export default Banner