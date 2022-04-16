import React, { useState, useEffect } from "react";
import SheetDB from "sheetdb-js";
import { useParams } from "react-router-dom";

import AddClipBoard from "../../component/addClipBoard/AddClipBoard";
import ClipBoard from "../../component/clipBoard/clipBoard";

export default function ClipBoardList() {
  const params = useParams();

  const [data, setData] = useState([]);
  const [newSub,setNewSub] = useState(false)

  useEffect(() => {
    SheetDB.read("https://sheetdb.io/api/v1/hkyghyrcrssot", {
      sheet: "clips",
      search: { categoryId: params.category }
    }).then(
      function (result) {
        setData(result);
        console.log(result);
      },
      function (error) {
        console.log(error);
      }
    );
  }, [newSub]);


  return (
    <>
      {data?.map((data_1) => {
        return <ClipBoard data={data_1} key={data_1.id} />;
      })}
      <AddClipBoard id={params.category} newSub ={newSub} setNewSub = {setNewSub}/>
    </>
  );
}
