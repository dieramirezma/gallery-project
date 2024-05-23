import cielo from '../images/cielo_manana.jpg'

const Image6 = ({ customStyle }) => {
  return (
    <img src={cielo} alt='Cielo 1' className={`${customStyle}`} />
  )
}

export default Image6
