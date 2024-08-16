import styles from "./Column.module.css"
import {Postit} from "./Postit.tsx"
import { useState } from "react";
import {IPostit} from "../pages/Components.tsx"

// interface Postit {
//     title:string,
//     text:string,
// }

export function Column({content}:{content:IPostit[]}) {

    const [contentState, setContentState] = useState(content);

    // useEffect(() => {}, [contentState]);

    function handleAddPostit() {
        setContentState(contentState => [...contentState, {title:"",text:""}]);
    }

    function deletePostit(postitToBeDeleted:IPostit) {
        console.log("Deletar Postit!", postitToBeDeleted);
        const contentStateWithoutDeletedPostit = contentState.filter( postit => {
            return ! (JSON.stringify(postit) === JSON.stringify(postitToBeDeleted));
        })
        console.log(contentStateWithoutDeletedPostit);
        setContentState(contentStateWithoutDeletedPostit);
    } 


    //setContentState((content) => {return content;} );
    return (
        <div className={styles.column}>
            {contentState.map(postitContent => {
                return (
                    <Postit
                        title={postitContent.title}
                        text={postitContent.text}
                        onDeletePostit = {deletePostit}
                    />
                )
            })}
            <button 
            className={styles.addpostit}
            onClick={handleAddPostit}
            > + </button>
        </div>
    );
}