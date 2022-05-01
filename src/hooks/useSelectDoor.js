import { useState } from "react"

export default function useSelectDoor() {
    const [isSelected, setIsSelected] = useState(false)

    const selectDoor = () => setIsSelected(true)
    const unselectDoor = () => setIsSelected(false)

    function toggleSelectDoor() {
        if (isSelected) {
            setIsSelected(false)
            console.log(false)
        } else {
            setIsSelected(true)
            console.log(true)
        }
    }

    return {
        isSelected,
        toggleSelectDoor,
        selectDoor,
        unselectDoor
    }
}