import styles from '../styles/DoorFrame.module.css'
import Door from './Door'
import DoorKnob from './DoorKnob'
import useDoor from '../hooks/useDoor'
import useSelectDoor from '../hooks/useSelectDoor'


export default function DoorFrame(props) {
    
    const { doorIsClosed, openDoor } = useDoor()
    const {isSelected, toggleSelectDoor } = useSelectDoor()

    return (
        <div className={styles.doorFrame} onClick={() => toggleSelectDoor()}>
            <div className={`${styles.doorSpace} ${isSelected ? styles.selected : null}`}>
                { doorIsClosed ? (<Door>
                    <DoorKnob selected={isSelected ? true : false} onClick={() => openDoor()}/>
                </Door>) : <div /> }
            </div>
            <div className={styles.doorBase}></div>
        </div>        
    )
}