import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCategory from "../../component/addCategory/AddCategory";
import Category from "../../component/categoryPreview/Category";
import { data } from "../../util";

export default function CategoryList() {
  const [categoryList, setCategoryList] = useState(data().category);

  return (
    <>
      {categoryList.map((category, index) => {
        return (
          <Link to={"./clip/" + category.id} key={category.id}>
            <Category
              color={category.color}
              title={category.title}
              key={index}
              id = {category.id}
              setCategoryList={setCategoryList}
            />
          </Link>
        );
      })}
      <AddCategory setCategoryList={setCategoryList} />
    </>
  );
}
