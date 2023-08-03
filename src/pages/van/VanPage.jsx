import { useState, useEffect } from "react";

import VanEl from "../../components/VanEl";

const VanPage = () => {
  const [vans, setVans] = useState(null);

  const VANS_URL = "/api/vans";

  useEffect(() => {
    getVans();
  }, []);

  const getVans = async () => {
    try {
      const response = await fetch(VANS_URL);
      const data = await response.json();
      setVans(data.vans);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
      {vans ? (
        vans.map((van) => (
          <VanEl
            key={van.id}
            name={van.name}
            price={van.price}
            description={van.description}
            img={van.imageUrl}
            type={van.type}
            id={van.id}
          />
        ))
      ) : (
        <h1 className="">Loading...</h1>
      )}
    </div>
  );
};

export default VanPage;
