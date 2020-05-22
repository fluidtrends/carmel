import savor, {
    Context,
    Completion
} from 'savor'
  
import exec from '../../src/exec'

savor.
  
add('should execute a command', (context: Context, done: Completion) => {
    const args = {
        _: [ 'status' ]
    }

    exec(args, done)    
}).
  
run('Exec')
  