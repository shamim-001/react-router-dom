import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const VanDetailsPage = () => {
  const [vanContent, setVanContent] = useState([]);
  const { id } = useParams();
  const URL = `/api/vans/${id}`;

  useEffect(() => {
    getContent();
  }, [id]);

  const getContent = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setVanContent(data.vans);
  };

  return (
    <>
      <div className="p-3 m-2 border-gray-200 border">
        <img src={vanContent.imageUrl} alt="Van img" />
        <p> {vanContent.name} </p>
        <p> {vanContent.price} </p>
        <p> {vanContent.type} </p>
        <p> {vanContent.description} </p>
      </div>
    </>
  );
};

export default VanDetailsPage;
