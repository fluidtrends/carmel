import { start, quit } from './system'

require('electron-squirrel-startup') ? quit() : start()