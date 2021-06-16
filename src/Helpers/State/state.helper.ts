



export const checkIfEmpty = (state:object, fields : string[]) => {
    return fields.every((field) => state[field] !== "");
}


export const iconProps = {
    size: 20,
    className: "text-primary cursor-pointer mx-2"
}