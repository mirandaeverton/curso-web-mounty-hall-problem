import './Door.css'

export default function Door(props) {
    return (
        <div className="door">
            {props.children}
        </div>
    )
}