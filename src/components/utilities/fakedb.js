// const addToDb = id => {
//     let appliedJob = getAppliedJob();
//     // add quantity
//     const quantity = appliedJob[id];
//     if (quantity) {

//     }
//     else {
//         appliedJob[id] = newQuantity;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(appliedJob));
// }

const addToDb = id => {
    let appliedJob = getAppliedJob();
    // add quantity
    let previousAppliedJob = JSON.parse(localStorage.getItem("AppliedJob"));
    if (previousAppliedJob) {
        appliedJob[id] = 1;
    }
    else {
        localStorage.setItem('shopping-cart', JSON.stringify(appliedJob));
    }
}

const getAppliedJob = () => {
    let appliedJob = {};

    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('applied-job');
    if (storedJob) {
        appliedJob = JSON.parse(storedJob);
    }
    return appliedJob;
}

export {addToDb}