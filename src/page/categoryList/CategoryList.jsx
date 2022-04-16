import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SheetDB from "sheetdb-js";
import { UserData } from "../../util";

import AddCategory from "../../component/addCategory/AddCategory";
import Category from "../../component/categoryPreview/Category";

<<<<<<< Updated upstream
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
=======
function CategoryList() {
  const [categoryList, setCategoryList] = useState();
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    SheetDB.read("https://sheetdb.io/api/v1/hkyghyrcrssot", {
      sheet: "category",
      search: { userId: UserData().googleId },
    }).then(
      function (result) {
        setCategoryList(result);
        console.log(result);
      },
      function (error) {
        console.log(error);
      }
    );
  }, [showModel]);

  return (
    <>
      <div className="category-list">
        {categoryList?.map((category, index) => {
          return (
            <Link to={"./clip/" + category.id} key={category.id}>
              <Category
                color={category.color}
                title={category.title}
                key={index}
                id={category.id}
                setCategoryList={setCategoryList}
              />
            </Link>
          );
        })}
      </div>
      <AddCategory setShowModel={setShowModel} showModel={showModel} />
>>>>>>> Stashed changes
    </>
  );
}

export default CategoryList;
