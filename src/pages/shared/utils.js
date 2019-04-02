export const setContent = (string) =>{        
    return {__html: string};        
}

/**
 * 
 * @param {*} string : string of text we want to limit
 * @param {*} stringLength : max length returned.
 */
export const getSummary = (string, stringMaxThreshlod)=>{
    return string.length > stringMaxThreshlod? string.substring(0,stringMaxThreshlod): string;
}