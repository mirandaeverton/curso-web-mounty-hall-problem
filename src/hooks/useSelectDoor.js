import { useState } from "react"

export default function useSelectDoor() {
    const [isSelected, setIsSelected] = useState(false)

    const selectDoor = () => setIsSelected(true)
    const unselectDoor = () => setIsSelected(false)

    function toggleSelectDoor() {
        if (isSelected) {
            setIsSelected(false)
        } else {
            setIsSelected(true)
        }
    }

    return {
        isSelected,
        toggleSelectDoor,
        selectDoor,
        unselectDoor
    }
}