'use babel'

import CarmelView from './carmel-view'
import { CompositeDisposable } from 'atom'

export default {

  atomView: null,
  modalPanel: null,
  subscriptions: null,

  activate (state) {
    console.log('>>> ACTIVATE', state)
    this.atomView = new CarmelView(state.atomViewState)
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomView.getElement(),
      visible: false
    })

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom:toggle': () => this.toggle()
    }))
  },

  deactivate () {
    console.log('>>> DEACTIVATE', state)

    this.modalPanel.destroy()
    this.subscriptions.dispose()
    this.atomView.destroy()
  },

  serialize () {
    return {
      atomViewState: this.atomView.serialize()
    }
  },

  toggle () {
    console.log('Carmel was toggled!')
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    )
  }

}
