import { useState } from 'react'

import Preview from 'components/Preview'
import MarkdownEditor from 'components/MarkdownEditor'

import './App.css'

const App = () => {
  const [editorCodeValue, setEditorCodeValue] = useState('')
  return <>
    <div className='editor'>
      <MarkdownEditor handleEditorValueChange={setEditorCodeValue} />
      <Preview code={editorCodeValue} />
    </div>
  </>
}

export default App