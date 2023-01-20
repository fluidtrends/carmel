import { useCarmelDoc, useCarmelDocsSections } from "~/sdk"
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkMDX from 'remark-mdx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'
import { useRouter } from 'next/router'

export default ({}: any) => {
    const [section, setSection] = useState<any>(undefined)
    const router = useRouter()
    const sections: any = useCarmelDocsSections({ filter: "all" })
    const doc: any = useCarmelDoc({ section })

    useEffect(() => {
        if (!sections || !sections.data) return 

        const p = router.asPath.substring(6) || "intro"

        let sec = sections.data.find((s: any) => s.id === p)

        if (sec) {
            setSection(sec)
            return 
        }

        sections.data.map((s: any) => {
            const subs = s.sections.find((ss: any) => ss.id === p)
            if (!subs) return 
            setSection(subs)
        })
    }, [])

    const changeItem = (item: any) => {
        router.push(`/docs/${item.id}`)
    }

    const changeSubitem = (item: any) => {
        router.push(`/docs/${item.id}`)
    }

    const SubmenuItem = (item: any) => {
        return <button onClick={() => changeSubitem(item)} className={`${item.id === section.id ? 'text-primary-color font-black border-b border-primary-color bg-primary-color bg-opacity-20' : 'hover:bg-opacity-20 hover:bg-black'} p-2 cursor-pointer mt-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ml-8 text-md text-left`}>
            { item.title }
        </button>
    }

    const SubmenuItems = ({ items }: any) => {
        if (!items || items.length === 0) return <div/>

        return items.map((item: any, i: number) => <SubmenuItem {...item} key={i}/>)
    }

    const MenuItem = (item: any) => {
        return (<div className="flex flex-col">       
                <button onClick={() => changeItem(item)} className={`${item.id === section.id ? 'text-primary-color font-black border-b border-primary-color bg-primary-color bg-opacity-20' : 'hover:bg-opacity-20 hover:bg-black'} p-2 cursor-pointer ml-4 mt-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-lg text-left`}>
                    { item.title }
                </button>
                <SubmenuItems items={item.sections}/>
        </div>)
    }

    const Sections = () => {
        if (!section || !sections || !sections.data) {
            return <div/>
        }

        return sections.data.map((item: any, i: number) => <MenuItem {...item} key={i}/>)
    }

    const CodeBlock = {
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      };

    const Document = () => {
        if (!doc) {
            return <div/>
        }

        return (<div className="content break-words text-left">
            <ReactMarkdown children={doc.data} components={CodeBlock} remarkPlugins={[remarkBreaks, remarkMDX]} />
        </div>)
    }

    return <div className="flex lg:flex-row h-auto flex-col w-full">
        <div className="flex flex-col w-80 flex flex-col items-left border-r border-primary">
            <Sections/>
        </div>
        <div className="flex flex-col w-full bg-black p-10 bg-opacity-50 border-b border-primary">
            <Document/>         
        </div>
    </div>
}