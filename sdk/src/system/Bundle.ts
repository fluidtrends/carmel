import { 
    IBundle,
    Dir,
    Name,
    Template,
    ArtifactsKind,
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
    get archive() {
        return this._archive
    }

    /**
     * 
     */
    async load() {
        await this._archive.load()
        return this
    }

    /**
     * 
     * @param name 
     * @param kind 
     */
    async loadArtifact(name: Name, kind: ArtifactsKind) {
        switch(kind) {
            case ArtifactsKind.TEMPLATES:
                return new Template(name, this, this._archive).load()
            default:
                return undefined                 
        }
    }
}
