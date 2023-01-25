import useCodemirror from 'hooks/useCodemirror'

const MarkdownEditor = ({ handleEditorValueChange }) => {
    const [editorRef] = useCodemirror({
        initialDoc: '# Hola mundo',
        handleEditorValueChange
    })
    return <>
        <div
            ref={editorRef}
            className='markdown__editor'
        >

        </div>
    </>
}

export default MarkdownEditor