import styles from '../../styles/Menu.module.css'
import Button from './Button'

export default function Menu(props) {
    return (
        <div className={styles.menu}>
            {props.children}
        </div>
    )
}