const workers = [
    { "name": "John", "salary": 500 },
    { "name": "Mike", "salary": 1300 },
    { "name": "Linda", "salary": 1500 }];

const getWorthyWorkers = (workerArr) => {
    const WorthyWorkers = [];

    for (let i = 0; i < workers.length; i++) {
        if (workers[i].salary > 1000) {
            WorthyWorkers.push(workers[i].name)
        }
    }
    return WorthyWorkers;
}
console.log(getWorthyWorkers(workers));