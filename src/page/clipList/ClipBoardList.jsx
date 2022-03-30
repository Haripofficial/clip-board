import React, { useState } from "react";
import { useParams } from "react-router-dom";

import AddClipBoard from "../../component/addClipBoard/AddClipBoard";
import ClipBoard from "../../component/clipBoard/clipBoard";
import { getCategory } from "../../util";

export default function ClipBoardList() {
  const params = useParams();
  const categoryDetails = getCategory(params.category);

  const [data, setData] = useState(categoryDetails.clips);
  console.log(data)

  return (
    <>
      {data?.map((data_1) => {
        return <ClipBoard data={data_1} key={data_1.id} />;
      })}
      <AddClipBoard id={params.category} setData={setData} />
    </>
  );
}
