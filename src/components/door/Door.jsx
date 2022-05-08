import styles from '../../styles/Door.module.css'
import DoorFrame from './DoorFrame'
import DoorKnob from './DoorKnob'
import useDoor from '../../hooks/useDoor'
import useSelectDoor from '../../hooks/useSelectDoor'
import PresentBox from './PresentBox'


export default function Door(props) {

    const { doorIsClosed, openDoor } = useDoor()
    const { isSelected, toggleSelectDoor } = useSelectDoor()

    function selectDoor(event, doorIsClosed) {

        if (event.target.name === "doorKnob") {
            openDoor()
            return
        }

        if (!doorIsClosed) {
            return
        }
        toggleSelectDoor()
    }

    return (
        <div
            className={styles.door}
            onClick={e => selectDoor(e, doorIsClosed)}
            name={props.name}>  
            <DoorFrame 
                selected={isSelected ? true : false}
                open={!doorIsClosed ? true : false}>
                <div className={styles.doorLabel}>
                    <span>{props.name}</span>
                </div>
                <div className={styles.doorKnob}>
                    <DoorKnob
                        selected={isSelected ? true : false}
                    />
                </div>
                <div className={styles.presentBox}>
                    {props.presentDoor && !doorIsClosed ? <PresentBox className="presentBox" /> : null}
                </div>
            </DoorFrame>
            <div className={styles.doorBase}></div>
        </div>
    )
}
