import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse/lib'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify/lib'

import { unified } from 'unified'

import 'github-markdown-css/github-markdown.css'

const Preview = ({ code }) => {
    const markdownToHtml = unified()
        .use(remarkGfm)
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .processSync(code)
    return <>
        <div
            className='markdown-body html-preview'
            dangerouslySetInnerHTML={{ __html: String(markdownToHtml) }}
        />
    </>
}

export default Preview