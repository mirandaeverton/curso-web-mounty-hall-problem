import styles from '../styles/DoorKnob.module.css'

export default function DoorKnob(props) {
    return (
        <button className={`${styles.doorKnob} ${props.selected ? styles.selected : null}`} 
            onClick={props.onClick}>
        </button>
    )
}