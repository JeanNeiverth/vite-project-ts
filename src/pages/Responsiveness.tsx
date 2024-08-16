import {Header} from "../components/Header.tsx"

import styles from "./Responsiveness.module.css"

export function Responsiveness() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.leftInfo}>
                    <img src="https://www.github.com/JeanNeiverth.png"></img>
                    <strong> Jean Neiverth </strong>
                    <p> Testando responsividade </p>
                    <br/>
                    <div className={styles.textContainer}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, asperiores molestiae excepturi exercitationem veritatis nobis totam quas delectus est, dolorum, aliquid eaque incidunt? Ipsam dicta eligendi modi eveniet quasi soluta.
                        </p>
                    </div>
                </div>
                <div className={styles.rightInfo}>
                    <div className={styles.sampleInfo}>
                        <p> Sample info </p>
                    </div>
                    <div className={styles.sampleInfo}>
                        <p> Sample info </p>
                    </div>
                    <div className={styles.sampleInfo}>
                        <p> Sample info </p>
                    </div>
                </div>

            </div>
        </div>
    )
}