const without = (object, ...args) => {
    const newObject = { ...object };
    args.forEach((arg) => {
        delete newObject[arg];
    });
    return newObject;
};