import styles from '../../styles/DoorKnob.module.css'

export default function DoorKnob(props) {
    return (
        <button 
            name="doorKnob" 
            className={`${styles.doorKnob} ${props.selected ? styles.selected : ''}`}>
        </button>
    )
}