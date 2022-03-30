import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { data } from "../../util";

export default function AddCategory({setCategoryList}) {
  const [showModel, setShowModel] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#563d7c");

  const submitCategory = () => {
    const updatedData = data();
    const newCategory = {
        title:title,
        description:description,
        color:color,
        clips:[],
        id: Date.now()
    }
    updatedData.category.push(newCategory)
    setCategoryList(updatedData.category)
    localStorage.setItem("Data", JSON.stringify(updatedData));
    setShowModel(false);
  };

  return (
    <>
      <div
        onClick={() => setShowModel(true)}
        className="category-item center-add"
      >
        +
      </div>

      <Modal show={showModel} onHide={() => setShowModel(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Enter Name"
              name="userName"
                onChange={(e) => setTitle(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="floatingInputCustom">Title</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom-decription"
              type="text"
              placeholder="Enter Description"
              name="userName"
                onChange={(e) => setDescription(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="floatingInputCustom-decription">Decription</label>
          </Form.Floating>
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#563d7c"
            title="Choose your color"
            onChange={(e) => setColor(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModel(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={submitCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
