export const transform = (input: string): string => {
    return input.replace(/\D/g, "")
}

export const addBlank = (input: string): string => {
    input = input.replace(/\s/g, "")
    let result = ""
    var i
    for (i = 0; i < input.length; i++){
        if (i > 0 && i % 4 === 0) {
            result = result + " ";
        }
        result = result + input[i]
    }
    return result
}
