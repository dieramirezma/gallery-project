import arbol from '../images/arbol2.jpg'

const Image2 = ({ customStyle }) => {
  return (
    <img src={arbol} alt='Arbol' className={`${customStyle}`} />
  )
}

export default Image2
