import DoorFrame from '../components/DoorFrame';
import useSelectDoor from '../hooks/useSelectDoor'

export default function MainPage(props) {
    const {isSelected, toggleSelectDoor, selectDoor, unselectDoor} = useSelectDoor()
    return (
        <div>
            <DoorFrame className={isSelected ? 'selected' : null} 
            onClick={() => toggleSelectDoor()}/>
        </div>
    )
}