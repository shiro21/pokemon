import styles from "@styles/contents.module.scss";
import { useNavigate } from "react-router-dom";

import { useRef, useState } from "react";

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
    // 카드
    const cardRef = useRef(null);
    // 복사 카드
    const cardDuplicationRef = useRef(null);
    // 카드 스타일
    const [cardStyle, setCardStyle] = useState({
        backgroundImage: `url(${pokemon.img})`,
        transform: `perspective(0) rotateX(0) rotateY(0))`
    })
    // 복사 카드 스타일
    const [cardDupliStyle, setCardDupliStyle] = useState({
        backgroundImage: `url(${pokemon.img})`,
        backgroundPosition: "0",
        filter: "none"
    })

    // 마우스 움직일 때
    const mouseMoveIn = (e, item) => {
        // console.log(e.pageX)
        // console.log(item)

        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;
        // console.log(x);
        let rotateX = 4 / 30 * y - 20;
        let rotateY = -1 / 5 * x + 20;

        // e.target.style.transform = `rotateX(${rotateX}deg)`;
        // e.target.style.transform = `rotateY(${rotateY}deg)`;

        // e.target.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

        setCardStyle({...cardStyle, transform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`});
        setCardDupliStyle({...cardDupliStyle, backgroundPosition: `${x / 5 + y / 5}%`, filter: `opacity(${x/200}) brightness(1.2)`})
        // cardRef.current.style = "transform : rotateY(20deg)"
        // console.log(cardMove);
    }

    const mouseMoveOut = (e) => {

        setCardStyle({
            ...cardStyle,
            transform: `perspective(350px) rotateX(0deg) rotateY(0deg)`
        })
        setCardDupliStyle({
            backgroundImage: `url(${pokemon.img})`,
            backgroundPosition: "0",
            filter: "none"
        })
    }

    return (
        <div className={styles.pokemon_card_wrap} onClick={() => navigation(`/view/${pokemon.id}`, { state: pokemon })}>
            <div className={styles.pokemon_image_wrap}>
                <div ref={cardDuplicationRef} style={cardDupliStyle} className={styles.pokemon_image_absolute} title={`${pokemon.num}. ${pokemon.name}`} />
                <div ref={cardRef} style={cardStyle} onMouseMove={(e) => mouseMoveIn(e)} onMouseOut={(e) => mouseMoveOut(e)} className={styles.pokemon_image} title={`${pokemon.num}. ${pokemon.name}`} />
                {/* <img className={styles.pokemon_image} src={pokemon.img} alt={`${pokemon.num}. ${pokemon.name}`} ref={cardRef} onMouseMove={(e) => mouseMoveIn(e)} /> */}
                {/* <img className={styles.pokemon_image_absolute} src={pokemon.img} alt={`${pokemon.num}. ${pokemon.name}`} onMouseMove={(e) => mouseMoveIn(e)} /> */}
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