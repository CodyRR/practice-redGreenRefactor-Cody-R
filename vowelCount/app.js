
function countVowels(str){
    let num = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i].toLowerCase() === 'a' ||
        str[i].toLowerCase() === 'e' ||
        str[i].toLowerCase() === 'i' ||
        str[i].toLowerCase() === 'o' ||
        str[i].toLowerCase() === 'u' ||
        str[i].toLowerCase() === 'y')
        num++;
    }
    return num
}

module.exports = {countVowels}