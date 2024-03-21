const language = ['Java', 'Python', 'c++'];
/**Don't use this */
// for(let i=0; i<=language.length-1; i++){
//     console.log(language[i])
// }
//Do this instead
language.forEach((lang, index)=>{
    console.log(`index-${index} - ${lang}`)
})