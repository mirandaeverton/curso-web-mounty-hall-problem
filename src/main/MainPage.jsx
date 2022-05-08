import Title from '../components/Title';
import Menu from '../components/form/Menu';
import Door from '../components/door/Door';
import Form from '../components/form/Form';
import styles from '../styles/MainPage.module.css'
import { useState } from 'react';
import Button from '../components/form/Button';

export default function MainPage(props) {

    const [initGame, setInitGame] = useState(false)
    const [numberOfDoors, setNumberOfDoors] = useState(3)
    const [presentDoor, setPresentDoor] = useState()
    const doors = []

    function createDoors(numberOfDoors, presentDoor, callblack, value) {
        for (let i = 1; i <= numberOfDoors; i++) {
            doors.push(
                <Door
                    key={i}
                    name={i}
                    presentDoor={presentDoor ? true : false}
                />
            )
        }
        
        console.log(doors)
        callblack(value)
    }

    function startGame(numberOfDoors, presentDoor) {
        if (presentDoor < 0 || !presentDoor || presentDoor > numberOfDoors) {
            return alert("A porta escolhida não existe. Informe um número válido.")
        }
        setInitGame(true)
    }

    return (
        <div className={styles.mainPage}>
            <Title />
            {!initGame ?
                <Menu>
                    <div>
                        <Form
                            value={numberOfDoors}
                            onChange={e => createDoors(numberOfDoors, presentDoor, setNumberOfDoors, e.target.value)}
                            question="Quantas portas?" />
                        <Form
                            value={presentDoor}
                            onChange={e => createDoors(numberOfDoors, presentDoor, setPresentDoor, e.target.value)}
                            question="Qual porta é premiada?" />
                        <Button
                            onClick={() => startGame(numberOfDoors, presentDoor)}
                            buttonTitle="Iniciar" />
                    </div>

                </Menu>
                :
                <>
                    <div className={styles.doors}>
                        {doors}
                    </div>
                    <Button
                        onClick={() => setInitGame(false)}
                        buttonTitle="Reiniciar"
                    />
                </>
            }
        </div>
    )
}