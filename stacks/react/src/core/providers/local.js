import DataProvider from '../DataProvider'

export default class LocalDataProvider extends DataProvider  {

  delete({ nodes, options, props }) {
    return Promise.resolve()
  }

  retrieve({ nodes, options, props }) {
    return Promise.resolve()
  }

}
