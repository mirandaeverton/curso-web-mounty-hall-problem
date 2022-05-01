import { useState} from "react"

export default function useDoor() {
    const [ isClosed, setIsClosed ] = useState('true')

    const openDoor = () => setIsClosed('false')
    const closeDoor = () => setIsClosed('true')

    return {
        doorIsOpen: isClosed === 'false',
        doorIsClosed: isClosed === 'true',
        openDoor,
        closeDoor
    }
}