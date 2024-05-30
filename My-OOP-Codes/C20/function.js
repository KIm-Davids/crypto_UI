


function secondFunction(callback) {
    console.log("secondFunction");
    callback();
}
secondFunction(function firstFunction() {
    console.log("firstFunction");})