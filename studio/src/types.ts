export interface AppProps {
    name: string
    routes: any[]
    [key: string]: any
}

export interface MainScreenProps extends AppProps {
}

export interface NewProductScreenProps extends AppProps {
}