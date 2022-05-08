import styles from '../../styles/Button.module.css'

export default function Button(props) {
    return (
        <button 
            onClick={props.onClick}
            className={styles.button}
        >
            {props.buttonTitle}
        </button>
    )
}