async function fn1() {
    //return 1
    //throw 2
    //return Promise.reject(3)
    //return Promise.resolve(4)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 1000);
    })
}
const result = fn1()
//console.log(result)
result.then(
    value => {
        console.log('onResolved()', value);
    },
    reason => {
        console.log('onRejected()', reason);
    }
)

function fn2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(5)
            reject(5)
        }, 1000);
    })
}

function fn4() {
    return 6
}
async function fn3() {
    //(1)得到成功的结果
    //const value = await fn2()  //await右侧表达式为promise，得到的结果就是promise成功的value
    //const value = fn4()   //await右侧表达不是promise，得到的结果就是它本身
    //console.log('value', value);


    //(2)得到失败的结果
    try {
        //const value = await fn2()
        const value = await fn1()
        console.log('value', value);
    } catch (error) {
        console.log('得到失败的结果', error);
    }
}
fn3()