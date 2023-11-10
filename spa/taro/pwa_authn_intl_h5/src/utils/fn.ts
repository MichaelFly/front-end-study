export function isString(str:unknown):boolean {
    return Object.prototype.toString.call(str) === '[object String]';
}
