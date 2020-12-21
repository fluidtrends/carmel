import React, { useEffect, useState } from 'react'
import "ace-builds"
import AceEditor from "react-ace"
import { useEvent } from '../../hooks'

import 'ace-builds/webpack-resolver'
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-twilight"
import "ace-builds/src-noconflict/theme-cobalt"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/theme-xcode"
import "ace-builds/src-noconflict/theme-monokai"

/**
 * 
 * @param props 
 */
export const Editor: React.FC<any> = (props) => {
  const { selectedFile, product, openFile } = props
  const [content, setContent] = useState("")
  const [dirty, setDirty] = useState(0)
  const saveEvent = useEvent()

  function onChange(newValue: any) {
    setContent(newValue)
    setDirty((prev: number) => (prev + 1))
  }

  useEffect(() => {
      setContent(openFile)
  }, [openFile])

  const save = () => {
    saveEvent.send({
        type: 'saveFile',
        path: selectedFile,
        content,
        productId: product.id
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
        dirty > 0 && save()
        setDirty(0)
    }, 1000)

    return () => clearTimeout(timer)
  }, [dirty])

  return (<AceEditor
          mode="javascript"
          theme="monokai"
          onChange={onChange}
          fontSize={10}
          showGutter={true}
          showPrintMargin={false}
          width="400px"
          style={{
            width: "100%",
            padding: 10,
            height: "100%"
          }}
          value={content}
          editorProps={{ 
            $blockScrolling: true
          }}
          setOptions={{
            useWorker: false
          }}
    />)
}
