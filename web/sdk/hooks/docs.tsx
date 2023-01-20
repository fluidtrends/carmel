import useSWR from "swr"
import axios from "axios"
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkStringify from 'remark-stringify'

const BASE_URL = "https://raw.githubusercontent.com/fluidtrends/carmel/master/docs"

const docLink = (id: string) => {
    return `${BASE_URL}/${id}.md`
}

const getSections = async (filter: string) => {
    const raw: any = await axios.get(`${BASE_URL}/sections.json`, { headers: {
        'Content-Type': 'application/json'
    }})

    return raw.data
}

const getMarkdownFile = async (section: any) => {
    const url = docLink(section.link)
    const raw: any = await axios.get(url)

    const md: any = await unified()
                    .use(remarkParse)
                    .use(remarkStringify)
                    .use(remarkFrontmatter, ['yaml', 'toml'])
                    .process(raw)
    
    if (!md) return
    
    return md.data
}

export const useCarmelDoc = ({ section }: any) => useSWR(section, getMarkdownFile)
export const useCarmelDocsSections = ({ filter }: any) => useSWR(filter, getSections)