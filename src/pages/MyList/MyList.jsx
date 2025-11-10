import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import PetAndSuppliesCard from "../../PetAndSuppliesCard/PetAndSuppliesCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-listing?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("fetch item", data);
        setItem(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <div>Please wait ... Loading...</div>;
  }

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 max-w-6xl mx-auto">
        {items.map((item) => (
          <PetAndSuppliesCard key={item._id} item={item}></PetAndSuppliesCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;
