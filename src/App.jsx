import MarkdownEditor from 'components/MarkdownEditor'

import './App.css'

const App = () => {
  return <>
    <div className='editor'>
      <MarkdownEditor handleEditorValueChange={() => ''} />
    </div>
  </>
}

export default App