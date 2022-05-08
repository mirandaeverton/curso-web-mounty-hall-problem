import styles from '../../styles/DoorFrame.module.css'

export default function DoorFrame(props) {
    return (
        <div 
            name={props.name}
            className={`
                ${styles.doorFrame} 
                ${props.selected ? styles.selected : ''}
                ${props.open ? styles.open : ''}
            `} 
            onClick={props.onClick}>
                {props.children}
            
        </div>
    )
}