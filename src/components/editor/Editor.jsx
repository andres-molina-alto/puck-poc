import React, { useEffect } from 'react';
import { Puck } from "@puckeditor/core"
import { config } from '../../puck/puck.config';

const initialData = {};

const save = (data) => {
  localStorage.setItem('puck-editor-data', JSON.stringify(data));
  
  window.location.href = '/renderer';
};

export default function Editor() {
useEffect(() => {
    localStorage.removeItem('puck-editor-data');
  }, []);


  return <Puck
      config={config}
      data={initialData}
      onPublish={save}
      editMode={true}
      showToolbar={true}
      toolbarConfig={{
        buttons: ['heading', 'paragraph', 'bold', 'italic', 'link']
      }}
    />;
}
