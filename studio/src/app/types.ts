export interface State {
    router?: any 
    env?: any
    product?: Product
    challenge?: Challenge
    profile?: Profile
    products?: Product[]
    session?: any
}

export interface Profile {
    progress: any
    [key: string]: any
}

export interface Product {
    id: string
    name: string
    cover: string
    status: string
    [key: string]: any
    chunks: string[]
}

export interface Challenge {
    [key: string]: any
    title: string
    name: string
    summary: string 
    stack: string,
    status: string,
    author: string,
    skills: any
    total_tasks: number
    versions: [string]
    id: number
}

export interface Template {
    name: string,
    bundle: string,
    bundleVersion?: string
}

export interface Asset {
    name: string 
    path: string
}

export interface Chunk {
    name: string
    files?: any[]
}

export interface AppProps {
    name: string
    routes: any[]
    events: any[]
    [key: string]: any
}

export interface BrowserProps {
    
}

export interface StartScreenProps extends AppProps {
}

export interface WelcomeScreenProps extends AppProps {
}

export interface ProductsScreenProps extends AppProps {
}

export interface ProductScreenProps extends AppProps {
}

export interface NewProductScreenProps extends AppProps {
}

export interface ProfileScreenProps extends AppProps {
    
}

export interface LoginScreenProps extends AppProps {

}

export interface MainContainerProps extends AppProps {
}

export interface SimpleContainerProps extends AppProps {
}

export interface PlansComponentProps {
    selectPlan: (plan: any, freePlan: any) => any
}

export interface VaultLockComponentProps {
    show: boolean
    locked: boolean
    onDone: (done: boolean) => any
}

export interface ProductsComponentProps  {
}

export interface ChallengesComponentProps {
}

export interface TaskTutorialComponentProps {
    content: string
}

export interface AuthFormComponentProps {
    plan?: any
    freePlan?: any
    login: boolean
}

export interface VideoComponentProps {
    url: string
    onDone: () => any
}

export interface ProductListItemComponentProps {
    product?: Product
    isButton?: boolean
    title?: string
    onSelected: (product: Product) => any
}


export interface TemplateListItemComponentProps {
    template: Template,
    onSelected: (template: Template) => any
}

export interface ChunkListItemComponentProps {
    chunk: Chunk,
    onSelected: (chunk: Chunk) => any
}

export interface ProductListComponentProps {
    products: Product[]
}

export interface ProductDashboardComponentProps {
    product: Product
}

export interface MainHeaderComponentProps {
}

export interface ProductHeaderComponentProps {
    product: Product
    onBack: () => any
    commandResponse: any
    onSectionChanged: (section: string) => any
    onCommand: (command: any) => any
    onTogglePreview: () => any
}

export interface ProductChunksComponentProps {
    product: Product
    rootDir: string
    files: any
    openFile: any
    height: number
    visible: boolean
    expanded: string[]
    onExpand: (keys: string[]) => any
    onSelect: (item: any) => any
}

export interface ProductAssetsComponentProps {
    product: Product
    rootDir: string
    height: number
    openFile: any
    visible: boolean
    files: any
    onSelect: (item: any) => any
}

export interface AssetListItemComponentProps {
    product: Product
    asset: Asset
    onSelected: (asset: Asset) => any
}

export interface EditorComponentProps {
    product: Product
    openFile: any
    selectedFile: string
}

export interface ProductChallengeComponentProps {
    productDetails: any
}