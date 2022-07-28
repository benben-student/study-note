/**
 * @param delay: number     --------> 1500
 * @param responseType: "success" | "fail" | "random"  ----> success
 * @param responseData: default | responseData    ------> { data: [1,2,3] }
 */


const mock = (params) => {
  const defaultParam = {
    delay: 1500,
    responseType: 'success',
    responseData: { data: [1, 2, 3] },
  };

  const finalParams = Object.assign({}, defaultParam, params);
  const { delay, responseType, responseData } = finalParams;

  return new Promise((resolve, reject) => {


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


const run = async () => {
  try {
    const res = await mock({ delay: 4000, responseType: 'random', responseData: 1000 });
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

run();
