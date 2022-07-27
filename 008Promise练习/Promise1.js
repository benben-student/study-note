const mock = (params) => {
  const defaultParam = {
    delay: 1500,
    responseType: 'success',
    responseData: { data: [1, 2, 3] },
  };

  const finalParams = Object.assign({}, defaultParam, params);
  const { delay, responseType, responseData } = finalParams;
  // console.log('------>', delay, responseType, responseData);

  return new Promise((resolve, reject) => {
    // responseType ---> success
    // if (responseType === 'success') {
    //   setTimeout(() => {
    //     resolve(responseData);
    //   }, delay);
    // }

    // // responseType   ----> fail
    // if (responseType === 'fail') {
    //   setTimeout(() => {
    //     reject(new Error('失败了'));
    //   }, delay);
    // }

    // // responseType ----> "random"
    // if (responseType === 'random') {
    //   if (Math.random() > 0.5) {
    //     setTimeout(() => {
    //       resolve(responseData);
    //     }, delay);
    //   } else {
    //     setTimeout(() => {
    //       reject(new Error('失败了'));
    //     }, delay);
    //   }
    // }





    setTimeout(() => {
      if (responseType === 'success') {
        resolve(responseData);
      }
      if (responseType === 'fail') {
        reject(new Error('失败了'));
      }
      if (responseType === 'random') {
        if (Math.random() > 0.5) {
          resolve(responseData);
        } else {
          reject(new Error('失败了'));
        }
      }
    }, delay);
  });
};

/**
 * @param delay: number     --------> 1500
 * @param responseType: "success" | "fail" | "random"  ----> success
 * @param responseData: default | responseData    ------> { data: [1,2,3] }
 */

// case 1
// mock()
//   .then((res) => {
//     // 打印这一句，返回的值是：{ data: [1,2,3] }
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // // case 2
// mock({ delay: 1000, responseType: 'fail' })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     // 打印这一句
//     console.log(err.message);
//   });

const run = async () => {
  try {
    const res = await mock({ delay: 4000, responseType: 'random', responseData: 1000 });
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

run();
