function isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
}

function assign(obj, key, val) {
    var keyarr = key.split('.');
    for (var i = 1; i < keyarr.length - 1; i++) {
        obj = obj[keyarr[i]]
    }
}
function extend(obj) {
    var res = {};

    var arr = [{
        key: '',
        val: obj
    }];

    while(var tm = arr.shift()) {
        if (isObject(tm.val)) {
            Object.keys(tm.val).forEach(function (key) {
                res.push({
                    key: tm.key + '.' + key,
                    val: tm.val[key]
                });
            });
        }
        else {
            assign(res, tem.key, tm.val)
        }
    }

    return res;
}
