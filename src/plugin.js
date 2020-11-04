export class DingtalkMsgPlugin {
    constructor (options) {
        this.options = options
    }
    apply (compiler) {
        compiler.hooks.done.tap('DingtalkMsgPlugin', ({ compilation, startTime, endTime }) => {
            getdirsize(compilation.options.output.path, async (err, size) => {
                if (err) {
                    console.log(err)
                    return
                }
                const insertObj = {
                    size: size,
                    buildTime: parseInt((endTime - startTime) / 1000, 10)
                }
                console.log(insertObj)
            })
        })
    }
}