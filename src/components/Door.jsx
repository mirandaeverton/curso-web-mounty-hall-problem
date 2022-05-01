import styles from '../styles/Door.module.css'

export default function Door(props) {
    return (
        <div className={styles.door}>
            {props.children}
        </div>
    )
}