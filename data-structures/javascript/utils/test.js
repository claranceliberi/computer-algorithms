module.exports = function test  (cb,output,...args) {
    console.time('Time');
    const result = cb(...args)
    const passed = result === output
    if (passed){
        console.log('OK');
    }
    else{
        console.log('Failed....', `\t Expected '${output}' but got '${result}'`)
    }
    console.timeEnd('Time');
    console.log('\n')
}