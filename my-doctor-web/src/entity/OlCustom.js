import "../styles/conversation.css";
import React, { useState } from 'react';
import LiCustom from "./LiCustom";

function OlCustom(props) {
  const { items, onDelete } = props;
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleLiClick = (index) => {
    setActiveIndex(index); 
  };

  return (
    <ol className="ol-style">
      {items.map((item) => (
        <LiCustom
          key={item[0]}
          content={item[1]}
          handleDelete={() => onDelete(item[0])}
          isActive={activeIndex === item[0]}
          handleInnerContentClick={() => handleLiClick(item[0])}
        />
      ))}
    </ol>
  );
}

export default OlCustom;
