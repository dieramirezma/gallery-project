import rio from "../images/rio.jpg";

const Image12 = ({ customStyle }) => {
  return (
    <img src={rio} alt="Río" className={`${customStyle}`} />
  )
};

export default Image12;