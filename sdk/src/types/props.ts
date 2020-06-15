import {
    Target,
    Id,
    CommandArg,
    CommandType
} from '.'

export interface Props {

}

export interface CommandProps extends Props {
    readonly id: Id;
    readonly productName?: string;
    readonly longRunning?: boolean;
    readonly target?: Target;
    readonly requiresStack?: boolean;
    readonly requiredArgs?: string[];
    readonly title?: string;
    readonly requiresFreshIndex?: boolean;
    readonly requiresScript?: boolean;
    readonly requiresApp?: boolean;
    readonly type?: CommandType;
}

export interface InitCommandProps extends CommandProps {
    productTemplate?: string;
}

export interface StartCommandProps extends CommandProps {
}

export interface StatusCommandProps extends CommandProps {
}

export interface SessionProps extends Props {
    readonly dir?: string;
    readonly cwd?: string;
    readonly name?: string;
}
