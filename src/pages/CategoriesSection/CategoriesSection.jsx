import React, { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PetAndSuppliesCard from "../../PetAndSuppliesCard/PetAndSuppliesCard";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const CategoriesSection = () => {
  const { user } = useContext(AuthContext);
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://b12-a10-future-box-server.vercel.app/categories?category=${category}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItems(data);
        setLoading(false);
      });
  }, [user, category]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <h1>Category: {items.category}</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item) => (
          <PetAndSuppliesCard key={item._id} item={item}></PetAndSuppliesCard>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
