import React, { useState, useRef } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import scrollToComponent from "react-scroll-to-component";
import { data } from "../../util";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default function AddClipBoard({ id, setData }) {
  const [description, setDescription] = useState();
  const [selectedTab, setSelectedTab] = React.useState("write");
  const [code, setCode] = useState();
  const [descriptionError, setDescriptionError] = useState("");

  const nameRef = useRef();

  function validate(value) {
    if (!value || value?.length === 0 || !/\S/.test(value)) {
      return false;
    }
    return true;
  }

  function addClip() {
    const updateData = data();
    const index = updateData.category.findIndex((object) => {
      return object.id === Number(id);
    });
    const newClipBoard = {
      id: Date.now(),
      description: description,
      code: code,
    };
    updateData.category[index].clips.push(newClipBoard);
    setData(updateData.category[index].clips);
    localStorage.setItem("Data", JSON.stringify(updateData));
  }

  function submitData() {
    const validated = validate(description);
    if (validated) {
      setDescriptionError("");
      setDescription("");
      setCode("");
      addClip();
    } else {
      setDescriptionError("required");
    }
  }

  return (
    <div
      className={descriptionError ? "container description-error" : "container"}
    >
      <ReactMde
        minEditorHeight={80}
        minPreviewHeight={80}
        textAreaProps={"write something"}
        description={description}
        value={description}
        onChange={setDescription}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
      <div className="error-message">{descriptionError}</div>
      <div className="submit-clipBoard">
        <textarea
          className="code-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          ref={nameRef}
        />
        <span onClick={submitData}>Add</span>
      </div>

      <span
        className="float-always"
        onClick={() => {
          scrollToComponent(nameRef.current);
          nameRef.current.focus();
        }}
      >
        <img src="/add_white_24dp.svg" alt="checked" />
      </span>
    </div>
  );
}
