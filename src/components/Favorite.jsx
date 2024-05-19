import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Favorite() {
  const [isFilled, setIsFilled] = useState(false);
  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <FontAwesomeIcon
      icon={faHeart}
      onClick={handleClick}
      style={{
        color: isFilled ? "#63D838" : "gray",
        cursor: "pointer",
        fontSize: "24px",
      }}
    />
  );
}
