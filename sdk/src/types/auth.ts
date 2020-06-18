import { ISession, IDir, Name, Id } from '.'
import { RequestHandler, Express } from 'express'
import expressSession, { Store } from 'express-session'
import SessionFileStore from 'session-file-store'
import { BrowserSyncInstance } from 'browser-sync'

export const AuthSession = expressSession
export const AuthStore = SessionFileStore(AuthSession)
export type AuthStoreType = Store
export type AuthSessionType = RequestHandler
export type AuthBrowserType = BrowserSyncInstance

export enum AccessTokenType {
  UNKNOWN = 'unknown',
  GITHUB = 'github',
  VERCEL = 'vercel',
}

export type AccessToken = {
  type: AccessTokenType
  value: string
}

export type User = {
  id: string
  username: string
  imageUrl: string
  name: string
  location: string
  email: string
  tokens: AccessToken[]
  [key: string]: any
}

export interface IKeyStore {
  readonly session: ISession

  initialize(): Promise<any>
  keys(group: string): Promise<string[]>
}

export interface IAuthKey {
  readonly dir: IDir
  readonly name: Name
  readonly id?: Id
  readonly fingerprint?: Id

  generate(): Promise<any>
  initialize(): Promise<any>
}

export interface IAuthProvider {
  readonly authenticator: IAuthenticator

  initialize(): Promise<any>
}

export interface IAuthenticator {
  readonly session: ISession
  readonly port: number
  readonly host: string
  readonly protocol: string
  readonly baseUrl: string
  readonly dir: IDir
  readonly app: Express
  readonly browser: AuthBrowserType
  readonly providers: Map<AccessTokenType, IAuthProvider>

  openBrowser(): Promise<void>
  endpoint(uri: string): string
  initialize(): Promise<void>
  start(): Promise<any>
  stop(when: number): Promise<any>
}
