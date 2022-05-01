import useDoor from '../hooks/useDoor'
import Door from './Door'
import './DoorFrame.css'
import DoorKnob from './DoorKnob'


export default function DoorFrame(props) {
    
    const { doorIsClosed, openDoor } = useDoor()

    return (
        <div className="door-frame" onClick={props.onClick}>
            <div className={`door-space ${props.className}`}>
                { doorIsClosed ? (<Door>
                    <DoorKnob className={props.className} onClick={() => openDoor()}/>
                </Door>) : <div /> }
            </div>
            <div className="door-base"></div>
        </div>        
    )
}