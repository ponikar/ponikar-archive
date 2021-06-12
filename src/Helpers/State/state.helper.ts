



export const checkIfEmpty = (state:object, fields : string[]) => {
    return fields.every((field) => state[field] !== "");
}