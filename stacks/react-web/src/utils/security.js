import React from 'react'
import shortid from 'shortid'
import randomstring from 'randomstring'

export function newShortId () {
  return shortid.generate()
}

export function newRandomId (args) {
  return randomstring.generate(args)
}
