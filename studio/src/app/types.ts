export interface State {
    router?: any 
    product?: Product
    products?: Product[]
    session?: any
}

export interface Product {
    id: string
    name: string
    cover: string
    status: string
    [key: string]: any
    chunks: string[]
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

export interface MainContainerProps extends AppProps {
}

export interface SimpleContainerProps extends AppProps {
}

export interface ProductsComponentProps  {
}

export interface ChallengesComponentProps {
}

export interface ProductListItemComponentProps {
    product: Product,
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
    expanded: string[]
    onExpand: (keys: string[]) => any
    onSelect: (item: any) => any
}

export interface ProductAssetsComponentProps {
    product: Product
    rootDir: string
    height: number
    files: any
}

export interface AssetListItemComponentProps {
    product: Product
    asset: Asset
    onSelected: (asset: Asset) => any
}

export interface EditorComponentProps {
    product: Product
    chunk: Chunk
    openFile: any
    asset: Asset
}