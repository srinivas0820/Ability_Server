// unique id from job
function getJobId(n, width, z = "0") {
    z = z;
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
 
module.exports.getJobId = getJobId;