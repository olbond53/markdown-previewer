import React from 'react';
import './css/Editor.css';

const Editor = ({ onChange, value, minimaize }) => {
  return (
    <textarea
      id="editor"
      className={`editor ${minimaize}`}
      type="text"
      rows="40"
      onChange={onChange}
      defaultValue={value}
    ></textarea>
  );
};

export default Editor;
