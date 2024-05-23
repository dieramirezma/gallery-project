import cielo_tarde from "../images/cielo_tarde1.jpg";

const Image8 = ({ customStyle }) => {
  return (
    <img src={cielo_tarde} alt="Cielo 3" className={`${customStyle}`} />
  )
};

export default Image8;