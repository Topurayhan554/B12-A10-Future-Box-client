import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const SeeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  return <div></div>;
};

export default SeeDetails;
