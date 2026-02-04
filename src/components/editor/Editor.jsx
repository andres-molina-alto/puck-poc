import {Puck} from "@puckeditor/core"
import React from 'react';


// Puck configuration
const config = {
  components: {
    HelloWorldBlock: {
      render: () => {
        return <h1>"Hello World!"</h1>;
      },
    },
  },
  root: {
    render: ({ children }) => {
      return <div>{children}</div>;
    },
  }
};

const initialData = {};

const save = (data) => {};

export default function Editor() {
  return <Puck
      config={config}
      data={initialData}
      onPublish={save}
      // Add these for better UX
      editMode={true}
      showToolbar={true}
      toolbarConfig={{
        buttons: ['heading', 'paragraph', 'bold', 'italic', 'link']
      }}
    />;
}
