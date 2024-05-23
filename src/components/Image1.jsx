import arbol from '../images/arbol1.jpg'

const Image1 = ({ customStyle }) => {
  return (
    <img src={arbol} alt='Arbol' className={`${customStyle}`} />
  )
}

export default Image1
