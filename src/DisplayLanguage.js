import { LanguageContext } from "./LanguageContext"

const Strings = {
    en: {
        Current_Language : "This is the English version"
    },
    it: {
        Current_Language : "Questa è la versione italiana"
    }
}

export function DisplayLanguage(){
    return (
        <LanguageContext.Consumer>
            {language =>{
                return (
                    <h1>{Strings[language].Current_Language}</h1>
                )
            }}
        </LanguageContext.Consumer>
    )
}