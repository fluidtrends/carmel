import React from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/json'
import 'brace/theme/monokai'

const Editor = props => (
  <AceEditor
    mode="json"
    theme="monokai"
    name="editor"
    onChange={val => props.onChange(val)}
    fontSize={14}
    style={{ width: '100%' }}
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine={true}
    value={props.value}
    setOptions={{
      showLineNumbers: true,
      tabSize: 2
    }}
  />
)

export default Editor
