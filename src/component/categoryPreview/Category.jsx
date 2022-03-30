import React from "react";
import "../../style/style.scss";

export default function Category({ title, color }) {
  return (
    <div style={{ backgroundColor: color }} className="category-item">
      <span>{title}</span>
    </div>
  );
}
