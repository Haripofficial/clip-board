import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCategory from "../../component/addCategory/AddCategory";
import Category from "../../component/categoryPreview/Category";
import { data } from "../../util";

export default function CategoryList() {
  const [categoryList, setCategoryList] = useState(data().category);
  console.log(categoryList);

  return (
    <>
      {categoryList.map((category, index) => {
        return (
          <Link to={"./clip/" + category.id} key={category.id}>
            <Category
              color={category.color}
              title={category.title}
              key={index}
            />
          </Link>
        );
      })}
      <AddCategory setCategoryList={setCategoryList} />
    </>
  );
}
