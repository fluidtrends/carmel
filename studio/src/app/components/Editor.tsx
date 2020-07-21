import React, { useEffect, useState } from 'react'
import { EditorComponentProps } from '../types'
import "ace-builds"
import AceEditor from "react-ace"
import { useEvent } from '../hooks'

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
export const Editor: React.FC<EditorComponentProps> = (props) => {
  const { asset, product, openFile } = props
  const [content, setContent] = useState("")
  const [savedContent, setSavedContent] = useState("")
  const saveEvent = useEvent()

  function onChange(newValue: any) {
      setContent(newValue)
  }

  useEffect(() => {
      setContent(openFile)
      setSavedContent(openFile)
  }, [openFile])

  const save = () => {
    setSavedContent(content)
    saveEvent.send({
        type: 'saveFile',
        path: asset,
        content,
        productId: product.id
    })
}

  useEffect(() => {
      const timer = setInterval(() => {
            if (content === savedContent) return 
            save()
      }, 1000)

      return () => clearInterval(timer)
  }, [content, savedContent])

  return (<AceEditor
          mode="javascript"
          theme="xcode"
          onChange={onChange}
          style={{
           width: "100%",
           height: "100%",
          }}
          value={content}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            useWorker: false
          }}
    />)
}
