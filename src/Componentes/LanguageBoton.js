import { useLanguageContext } from "../Contexts/LanguageContext";

export default function LanguageBoton(){

    const{language, toggleLanguage} = useLanguageContext();

    function getTexto(){
        return(
            <p>{language === 'es' ? "Texto en español" : "Text in English"}</p>    
        )
    }

    function getTextoBoton(){
        return(
            language === 'es' ? "Cambiar idioma" : "Change language"
        )
    }

    return(
        <div>
            {getTexto()}
            <button onClick={toggleLanguage}>{getTextoBoton()}</button>
        </div>
    )

}