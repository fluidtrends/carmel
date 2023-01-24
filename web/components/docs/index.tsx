import { useCarmelDoc, useCarmelDocsSections } from "~/sdk"
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkMDX from 'remark-mdx'
import remarkGFM from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useRouter } from 'next/router'
import { MobileSidebar } from "./sidebar"

export default ({}: any) => {
    const [section, setSection] = useState<any>(undefined)
    const router = useRouter()
    const sections: any = useCarmelDocsSections({ filter: "all" })
    const doc: any = useCarmelDoc({ section })
    const [sideBar, setSideBar] = React.useState(false);

    useEffect(() => {
        if (!sections || !sections.data) return 

        let p = router.asPath.substring(6) || "intro/vision"
        
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

    const onMobileItemSelect = (item: any) => {
        changeSubitem(item) 
        setSideBar(false) 
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
                <div className="ml-4 mt-4 text-md text-left opacity-50">
                    { item.title }
                </div>
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

        if (sideBar) {
            return <div className="lg:hidden">
                <MobileSidebar {...{ section, sideBar, setSideBar, onMobileItemSelect }} sections={sections} />
            </div>
        }

        return (<div className="content break-words text-left">
            <div className="lg:hidden navbar">
                <div className="navbar-start text-xl w-full -ml-6 -mt-4">
                    <div onClick={() => setSideBar(true)} tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    { section && section.title }
                </div>
            </div>
            <ReactMarkdown children={doc.data} components={CodeBlock} remarkPlugins={[remarkBreaks, remarkGFM, remarkMDX]} />
        </div>)
    }

    return <div className="flex lg:flex-row h-auto flex-col w-full">
        <div className="hidden lg:block flex flex-col w-80 flex flex-col items-left border-r border-primary">
            <Sections/>
        </div>
        <div className="flex flex-col w-full bg-black p-10 bg-opacity-50 border-b border-primary">
            <Document/>         
        </div>
    </div>
}