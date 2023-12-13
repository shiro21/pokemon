import styles from "@styles/contents.module.scss";
import { useNavigate } from "react-router-dom";

const TypeComponent = ({ type }) => {
    switch (type.trim()) {
        case "독" :
            return <button style={{background: "#994DCF"}}>{type}</button>
        case "풀" :
            return <button style={{background: "#42BF24"}}>{type}</button>
        case "악" :
            return <button style={{background: "#4F4747"}}>{type}</button>
        case "노말" :
            return <button style={{background: "#999999"}}>{type}</button>
        case "땅" :
            return <button style={{background: "#AB7939"}}>{type}</button>
        case "강철" :
            return <button style={{background: "#6AAED3"}}>{type}</button>
        case "물" :
            return <button style={{background: "#2992FF"}}>{type}</button>
        case "격투" :
            return <button style={{background: "#FFA202"}}>{type}</button>
        case "불꽃" :
            return <button style={{background: "#FF612C"}}>{type}</button>
        case "에스퍼" :
            return <button style={{background: "#FF637F"}}>{type}</button>
        case "페어리" :
            return <button style={{background: "#FFB1FF"}}>{type}</button>
        case "전기" :
            return <button style={{background: "#FFDB00"}}>{type}</button>
        case "강철" :
            return <button style={{background: "#6AAED3"}}>{type}</button>
        case "비행" :
            return <button style={{background: "#95C9FF"}}>{type}</button>
        case "얼음" :
            return <button style={{background: "#42D8FF"}}>{type}</button>
        case "땅" :
            return <button style={{background: "#AB7939"}}>{type}</button>
        case "바위" :
            return <button style={{background: "#BCB889"}}>{type}</button>
        case "벌레" :
            return <button style={{background: "#9FA424"}}>{type}</button>
        default :
            return <button style={{background: "#222"}}>{type}</button>
    }
}

const Pokemon = ({pokemon}) => {

    const navigation = useNavigate();

    return (
        <div className={styles.pokemon_card_wrap} onClick={() => navigation(`/view/${pokemon.id}`, { state: pokemon })}>
            <div className={styles.pokemon_image_wrap}>
                <img src={pokemon.img} alt={`${pokemon.num}. ${pokemon.name}`} />
            </div>
            <div className={styles.pokemon_information_wrap}>
                <h5>No.{pokemon.num}. <em>{pokemon.name}</em></h5>
                <ul>
                    {
                        pokemon.type.split("/").map((type, index) => (
                            <li key={index}>
                                <TypeComponent type={type} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Pokemon;