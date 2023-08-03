import { Link } from "react-router-dom";
const VanEl = ({ id, name, price, img, type }) => {
  return (
    <Link to={`/van/${id}`}>
      <div className="p-3 m-2 border-gray-200 border">
        <img src={img} alt="Van img" />
        <p> {name} </p>
        <p> {price} </p>
        <p> {type} </p>
      </div>
    </Link>
  );
};

export default VanEl;
