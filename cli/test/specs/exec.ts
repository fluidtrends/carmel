import savor, {
    Context,
    Completion
} from 'savor'
  
import path from 'path'
import exec from '../../src/exec'

savor.
  
add('should execute a command', (context: Context, done: Completion) => {
    savor.addAsset('assets/home', 'home', context)
    const userHome = path.resolve(context.dir, 'home')

    process.env.USERPROFILE = userHome
    process.env.HOME = userHome
    
    savor.promiseShouldSucceed(exec({
        _: ['status'],
        $0: "status"
    }), done, (result) => {
    })
}).
  
run('Exec')
  