import savor, {
    Context,
    Completion
} from 'savor'

import { 
    Stack, 
    Strings
} from '../../src'

savor.

add('should load a simple stack', (context: Context, done: Completion) => {
    const stack = new Stack({ test: "test1234", dir: context.dir })

    context.expect(stack.props.test).to.equal("test1234")
    
    done()
}).

run('[Carmel SDK] Stack')
