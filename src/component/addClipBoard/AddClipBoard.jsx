import React, { useState, useRef, useEffect } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import scrollToComponent from "react-scroll-to-component";
import TextareaAutosize from "react-textarea-autosize";
import SheetDB from "sheetdb-js";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default function AddClipBoard({ id, newSub,setNewSub }) {
  const [description, setDescription] = useState();
  const [selectedTab, setSelectedTab] = React.useState("write");
  const [code, setCode] = useState([" "]);

  const [descriptionError, setDescriptionError] = useState("");

  const nameRef = useRef();

  function validate(value) {
    if (!value || value?.length === 0 || !/\S/.test(value)) {
      return false;
    }
    return true;
  }

  useEffect(() => {
    document.getElementsByTagName("textarea")[0].style.height =
      document.getElementsByTagName("textarea")[0].scrollHeight + "px";
  }, [description]);

  function addClip() {

    const newClipBoard = {
      id: Date.now(),
      description: description,
      code: code,
      categoryId:id,
    };
    SheetDB.write("https://sheetdb.io/api/v1/hkyghyrcrssot", {
      sheet: "clips",
      data: newClipBoard,
    }).then(
      function (result) {
        console.log(result);
        setNewSub(!newSub)
      },
      function (error) {
        console.log(error);
      }
    );
  }

  function submitData() {
    const validated = validate(description);
    if (validated) {
      setDescriptionError("");
      setDescription("");
      document.getElementsByTagName("textarea")[0].style.height = "80px";
      setCode([code[1]]);
      addClip();
    } else {
      setDescriptionError("required");
    }
  }

  function addCode() {
    let newCode = code.concat([""]);
    setCode(newCode);
  }

  function handleCode(index, value) {
    let newCode = code;
    newCode[index] = value;
    setCode(newCode);
  }

  return (
    <div
      className={descriptionError ? "container description-error" : "container"}
    >
      <ReactMde
        toolbarCommands={[
          ["bold", "italic", "image", "code", "quote", "link", "header"],
        ]}
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
      {code.map((c_ode, index) => {
        return (
          <TextareaAutosize
            key={index}
            className="code-input"
            onChange={(e) => handleCode(index, e.target.value)}
            defaultValue={c_ode}
            ref={nameRef}
          />
        );
      })}
      <div className="submit-clipBoard">
        <span onClick={addCode}>Add Code</span>
        <span onClick={submitData}>Submit</span>
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
