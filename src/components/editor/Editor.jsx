import React, { useEffect } from "react";
import { Puck } from "@puckeditor/core";
import { config } from "../../puck/puck.config";
import { useNavigate } from "react-router-dom";

const initialData = {};

export default function Editor() {
  const navigate = useNavigate();

  const save = (data) => {
    localStorage.setItem("puck-editor-data", JSON.stringify(data));

    navigate("/renderer");
  };
  useEffect(() => {
    localStorage.removeItem("puck-editor-data");
  }, []);

  return (
    <Puck
      config={config}
      data={initialData}
      onPublish={save}
      editMode={true}
      showToolbar={true}
      toolbarConfig={{
        buttons: ["heading", "paragraph", "bold", "italic", "link"],
      }}
    />
  );
}
