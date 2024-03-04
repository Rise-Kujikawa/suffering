function isEmptyObject(obj) {
    if (obj === null || typeof obj !== 'object') {
    return false;
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
}
console.log(isEmptyObject({}));
console.log(isEmptyObject({ a: undefined }));
console.log(isEmptyObject({ a: 1 }));
console.log(isEmptyObject(null));