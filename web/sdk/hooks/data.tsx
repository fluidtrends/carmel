import useSWR from "swr"
import axios from "axios"
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkStringify from 'remark-stringify'

const BASE_URL = "https://ipfs.filebase.io"

const getUserHash = async (username: string) => {
    const cid = 'QmX1ULfQFo3fUd8rmaHHw57BfL9BXXUQujXZ82hcj7YddH'
    return cid
}

const hashLink = (hash: string) => {
    return `${BASE_URL}/ipfs/${hash}`
}

const getJsonFile = async (hash:string) => {
    const raw: any = await axios.get(hashLink(hash), { headers: {
        'Content-Type': 'application/json'
    }})

    return raw.data
}

const getMarkdownFile = async (hash:string) => {
    const url = `${BASE_URL}/ipfs/${hash}`
    const raw: any = await axios.get(url)

    const md: any = await unified()
                    .use(remarkParse)
                    .use(remarkStringify)
                    .use(remarkFrontmatter, ['yaml', 'toml'])
                    .process(raw)
    
    if (!md) return
    
    return md.data
}

export const userDataFetcher = async (username: string) => {
    if (!username) return

    const hash = await getUserHash(username)

    if (!hash) return 

    return getJsonFile(hash)
}

const userSliceFetcher = async (username: string, slice: string, data: any = undefined) => {
    if (!username) return 

    const userData = data || await userDataFetcher(username)

    if (!userData || !userData[slice] || !userData[slice].hash) return 

    const result = getJsonFile(userData[slice].hash)

    console.log(typeof result)
    return result
}

const userSlicesFetcher = async (username: string, slices: string[], data: any = undefined) => {
    if (!username || !slices || slices.length === 0) return 

    const userData = data || await userDataFetcher(username)

    return Promise.all(slices.map((slice: string) => userSliceFetcher(username, slice, userData)))
}

const userPostsFetcher = async ([username, filter]: any, data: any = undefined) => {
    if (!username) return 

    const userData = data || await userDataFetcher(username)
    const [profile, posts, images]: any = await userSlicesFetcher(username, ['profile', 'posts', 'images'], userData)

    if (!posts || posts.length === 0 || !images || images.length === 0 || !profile) return 

    const profileImage = images.find((img: any) => profile.image === `${username}/${img.id}.${img.type}`)
    const result = posts.map((p: any) => {
        const image = images.find((img: any) => p.data.cover === `${username}/${img.id}.${img.type}`)
        return {
            ...p,
            username,
            imageLink: hashLink(image.hash),
            author: profile.name,
            authorImageLink: hashLink(profileImage.hash)
        }
    })
    return result
}

const userPostFetcher = async ([username, slug]: any, data: any = undefined) => {
    if (!username || !slug) return 

    const userData = data || await userDataFetcher(username)
    const [profile, posts, images]: any = await userSlicesFetcher(username, ['profile', 'posts', 'images'], userData)

    if (!posts || posts.length === 0 || !images || images.length === 0 || !profile) return 

    const post = posts.find((p: any) => p.data.slug === slug)
    const cover = images.find((img: any) => post.data.cover === `${username}/${img.id}.${img.type}`)
    const profileImage = images.find((img: any) => profile.image === `${username}/${img.id}.${img.type}`)

    if (!post || !cover) return 

    const content = await getMarkdownFile(post.hash)    

    return {
        ...post.data,
        content,
        coverLink: hashLink(cover.hash),
        author: profile.name,
        authorImageLink: hashLink(profileImage.hash)
    }
}

export const useCarmelPost = ({ username, slug }: any) => useSWR([username, slug], userPostFetcher)

export const useCarmelPosts = ({ username, filter }: any) => useSWR([username, filter], userPostsFetcher)