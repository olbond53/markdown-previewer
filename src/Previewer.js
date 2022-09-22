import React from 'react';
import './css/Previewer.css';

const Previewer = ({ innerHtml, minimaize }) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={innerHtml}
      className={minimaize}
    ></div>
  );
};

export default Previewer;
