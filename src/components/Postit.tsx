import styles from "./Postit.module.css"


export function Postit(props) {
    // console.log(props.title)
    // console.log(props.text)

    function handleDeletePostit() {
        props.onDeletePostit({title:props.title, text:props.text});
    }

    return (
        <div className={styles.postit}>
            <header>
                <strong
                    className={styles.title}
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    onInput={(e) => props.onTitleChange(e.currentTarget.textContent)}
                >
                    {props.title}
                </strong>
                <button onClick={handleDeletePostit}>x</button>
            </header>
            <div>
                <p
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    onInput={(e) => props.onTitleChange(e.currentTarget.textContent)}
                >
                    {props.text}
                </p>
            </div>
        </div>
    )
}