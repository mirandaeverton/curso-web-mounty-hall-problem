import './DoorKnob.css'

export default function DoorKnob(props) {
    return (
        <button className={`door-knob ${props.className}`} onClick={props.onClick}></button>
    )
}