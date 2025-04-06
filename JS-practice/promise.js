const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("I got resolved"),500)
});

promise1.then((res) => console.log(res));
async () => {
    const newRes = await promise1; 
}