import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

export const PhonesDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [phone, setPhone] = React.useState([]);

  React.useEffect(() => {
    //Api Call of the specific ID
    const getPhones = async () => {
      const url = `http://localhost:3000/phones/${id}`;
      const resp = await fetch(url);
      const results = await resp.json();
      setPhone(results.result);
    };
    getPhones();
  }, [id]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (!phone) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Detalle</h1>
      <h3>{phone.name}</h3>
      <h4>{phone.manufacturer}</h4>
      <h4>{phone.description}</h4>
      <h4>{phone.color}</h4>
      <h4>{phone.price}</h4>
      <img src={`http://localhost:3000/${phone.imageFileName}`} />
      <h4>{phone.imageFileName}</h4>
      <h4>{phone.screen}</h4>
      <h4>{phone.processor}</h4>
      <button className="btn btn-outline-info" onClick={handleReturn}>
        Back to Main Page
      </button>
    </div>
  );
};
