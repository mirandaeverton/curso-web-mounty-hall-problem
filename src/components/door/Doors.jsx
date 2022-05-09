
import styles from '../../styles/Doors.module.css'
import Door from './Door'

export default function Doors(props) {
    const doors = []
    for (let i = 1; i <= props.numberOfDoors; i++) {
        doors.push(
            <Door
                key={i}
                name={i}
                presentDoor={props.presentDoor == i ? true : false}
            />
        )
    }

    return (
        <div className={styles.doors}>
            {doors}
        </div>
    )
}