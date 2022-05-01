import Door from './Door'
import './DoorFrame.css'


export default function DoorFrame(props) {
    return (
        <div className="door-frame">
            <div className="door-space">
                <Door />
            </div>
            <div className="door-base"></div>
        </div>        
    )
}