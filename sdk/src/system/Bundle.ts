import { 
    IBundle,
    Dir,
    Stack,
    Name,
    IDir
} from '..'

import {
    Archive
} from 'rara'

/**
 * This represents a Carmel Bundle of artifacts that are cache locally 
 * and used horizontally as needed.
 * 
 * @category System
 */
export class Bundle implements IBundle {

    /** @internal */
    protected _archive: Archive;

    /** @internal */
    protected _dir: IDir;

    /**
     * Let's build a bundle from the archive we just received
     * 
     * @param archive The archive to build the bundle from 
     */
    constructor(archive: Archive) {
        this._archive = archive
        this._dir = new Dir(archive.path!)
    }

    /**
     * 
     */
    get dir() {
        return this._dir
    }

    /**
     * 
     */
    get id() {
        return this._archive.id
    }

    /**
     * 
     */
    get version() {
        return this._archive.version
    }

    /**
     * 
     */
    get exists() {
        return this.dir.exists
    }

    /**
     * 
     */
    async load() {
        return this
    }

    async loadStack(stackName: Name) {
        // Let's build a stack and see how that goes  
        const stack = new Stack(stackName, this)

        // Load it up if it exists 
        return stack.load()
    }
}
