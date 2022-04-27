module.exports = function test(cb,output,...args) {
    console.time('Time');
    const result = !!args ? cb(...args) : cb()
    const passed = result === output
    if (passed){
        console.log('\033[32mOK', '\033[0m');
    }
    else{
        console.log('\033[31mFailed....','\033[0m' ,`\t Expected '${output}' but got '${result}', with this arguments (${args})`)
    }
    console.timeEnd('Time');
    console.log('\n')
}