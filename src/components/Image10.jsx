import cielo_tarde from "../images/cielo_tarde3.jpg";

const Image10 = ({ customStyle }) => {
  return (
    <img src={cielo_tarde} alt="Cielo 5" className={`${customStyle}`} />
  )
};

export default Image10;