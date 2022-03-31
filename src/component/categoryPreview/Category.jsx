import React, { useState } from "react";
import ClickNHold from "react-click-n-hold";
import { data } from "../../util";

import "../../style/style.scss";

export default function Category({ title, color, id, setCategoryList }) {
  function deleteFile() {
    const deleteFiles = window.confirm("Are you sure to Delete this category?");
    if (deleteFiles) {
      const updateData = data().category;
      var index = updateData.findIndex(function (ob) {
        return ob.id === id;
      });
      if (index !== -1) updateData.splice(index, 1);

      const updatedData = {
        category: updateData,
      };
      setCategoryList(updateData);
      localStorage.setItem("Data", JSON.stringify(updatedData));
    }
  }

  return (
    <ClickNHold time={2} onClickNHold={deleteFile}>
      <div style={{ backgroundColor: color }} className="category-item">
        <span>{title}</span>
      </div>
    </ClickNHold>
  );
}
