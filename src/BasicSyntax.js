export function romanToInteger(str) {
    let result = 0;
    var obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    var digits = Object.keys(obj);

    for (var i = 0; i < str.length; ++i) {
        if (digits.indexOf(str[i]) < digits.indexOf(str[i + 1])) {
            result = result - obj[str[i]];
        } else {
            result = result + obj[str[i]];
        }
    }

    return result;
}
