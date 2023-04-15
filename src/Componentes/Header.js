
import { useLanguageContext } from "../Contexts/LanguageContext";

export default function Header(){

    const{language,toggleLanguage} = useLanguageContext();

    return(
        <div>
            <select onChange={toggleLanguage}>
                <option value="es" >{ language === 'es' ? "Español" : "Spanish"}</option>
                <option value="en" >{ language === 'es' ? "Inglés" : "English"}</option>

            </select>
        </div>
    )

}