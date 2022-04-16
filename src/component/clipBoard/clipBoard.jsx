import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import Code from "./code/Code";

export default function ClipBoard({ data }) {
  const [style, setStyle] = useState({ display: "none" });

  console.log(typeof(data.code));

  return (
    <>
      <div
        className="data-container"
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <p className="pre-description">
          <ReactMarkdown>{data.description}</ReactMarkdown>
        </p>
        {JSON.parse(data?.code).map((cod_e, index) => {
          return <Code code={cod_e} key={index} />;
        })}
        <div className="clip-board-option-s">
          <div className="clip-board-option" style={style}>
            <button
              className="edit"
              onClick={() => alert("feature will be added soon..")}
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => alert("feature will be added soon..")}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
