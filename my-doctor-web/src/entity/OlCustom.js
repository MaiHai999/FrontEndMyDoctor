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
      {items.map((item, index) => (
        <LiCustom
          key={index}
          content={item}
          handleDelete={() => onDelete(index)}
          isActive={activeIndex === index}
          handleInnerContentClick={() => handleLiClick(index)}
        />
      ))}
    </ol>
  );
}

export default OlCustom;
