export const changeSearch = (text) => {
    return {
            type: "CHANGESEARCH",
            payload: text
        }
}

export const resetSearch = () => {
    return {
            type: "RESETSEARCH",
            payload: ''
        }
}