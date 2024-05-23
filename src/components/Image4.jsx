import campo from "../images/campo1.jpg";

const Image4 = ({ customStyle }) => {
  return (
    <img src={campo} alt="Campo" className={`${customStyle}`} />
  )
};

export default Image4;