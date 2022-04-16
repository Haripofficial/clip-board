<<<<<<< Updated upstream
import React from "react";
import "../../style/style.scss";

export default function Category({ title, color }) {
  return (
    <div style={{ backgroundColor: color }} className="category-item">
      <span>{title}</span>
    </div>
=======
import React, { useState } from "react";
import ClickNHold from "react-click-n-hold";
import axiosInstance from "../../helpers/axiosInstance";

import "../../style/style.scss";

export default function Category({ title, color, id, setCategoryList }) {
  const [pressing, setPress] = useState(false);

  function deleteFile() {
    const deleteFiles = window.confirm("Are you sure to Delete this category?");
    if (deleteFiles) {
      axiosInstance.get(`keys`);
    }
  }

  return (
    <ClickNHold
      time={2}
      onStart={() => setPress(true)}
      onClickNHold={deleteFile}
    >
      <div
        style={{ backgroundColor: color }}
        className={`${pressing && "cnh_holding"} category-item`}
      >
        <span>{title}</span>
      </div>
    </ClickNHold>
>>>>>>> Stashed changes
  );
}
