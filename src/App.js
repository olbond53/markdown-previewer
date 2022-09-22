import React from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import Toolbar from './Toolbar';
import marked from 'marked';
import DOMPurify from 'dompurify';
import Prism from 'prismjs';
import './css/App.css';

const placeholder = `
 # This is heading
 ## This is another heading
 ### And here's some other stuff:

Here is inline code, \`<div></div>\`.

\`\`\`
// this is multi-line code:

javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\`

This text will be **bold**!
This text will be _italic_.
**_Or both!_**
Also _you **can** combine them_ 
And can easy ~~crossing stuff out~~ too.

There's [links](https://www.freecodecamp.org).
> There is Block Quotes!

And if you want you can get tables:

First Header | Second Header | Third Header
------------ | ------------- | -------------
 Cell 1 | Cell 2 | Cell 3
 Column 1. | Column 2. | Column 3.

* There are unordered lists.
  * This is bulleted.
    * And this is not.
        * And have different indentation level.


1. Here is ordered lists.
1. This is embedded image:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder,
      expanded: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.makeMarkedText = this.makeMarkedText.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  makeMarkedText() {
    const markedText = DOMPurify.sanitize(marked(this.state.text));
    return { __html: markedText };
  }

  render() {
    return (
      <div id="markdown-previewer-div">
        <div id="editor-div">
          <Toolbar
            name="Editor"
            icon={
              !this.state.expanded ? (
                <i className="fas fa-compress-arrows-alt"></i>
              ) : (
                <i className="fas fa-expand-arrows-alt"></i>
              )
            }
            onHandleClick={this.handleClick}
          />
          <Editor
            onChange={this.handleChange}
            value={placeholder}
            minimaize={this.state.expanded ? 'minimaize' : ''}
          />
        </div>
        <div id="previewer-div">
          <Toolbar
            name="Prewiewer"
            icon={
              this.state.expanded ? (
                <i className="fas fa-compress-arrows-alt"></i>
              ) : (
                <i className="fas fa-expand-arrows-alt"></i>
              )
            }
            onHandleClick={this.handleClick}
          />
          <Previewer
            innerHtml={this.makeMarkedText()}
            minimaize={this.state.expanded ? '' : 'minimaize'}
          />
        </div>
      </div>
    );
  }
}

export default App;
