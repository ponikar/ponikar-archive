



export const checkIfEmpty = (state:object, fields : string[]) => {
    return fields.every((field) => state[field] !== "");
}


export const iconProps = {
    size: 20,
    className: "text-primary cursor-pointer mx-2"
}

const REGEX_URL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

export const isValidURL = (url :string) => {
    return REGEX_URL.test(url.toLowerCase());
}