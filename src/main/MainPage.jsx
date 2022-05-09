import Title from '../components/Title';
import Menu from '../components/form/Menu';
import Doors from '../components/door/Doors';
import Form from '../components/form/Form';
import styles from '../styles/MainPage.module.css'
import { useState } from 'react';
import Button from '../components/form/Button';

export default function MainPage(props) {

    const [initGame, setInitGame] = useState(false)
    const [numberOfDoors, setNumberOfDoors] = useState(3)
    const [presentDoor, setPresentDoor] = useState()
    


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
                            onChange={e => setNumberOfDoors(e.target.value)}
                            question="Quantas portas?" />
                        <Form
                            value={presentDoor}
                            onChange={e => setPresentDoor(e.target.value)}
                            question="Qual porta é premiada?" />
                        <Button
                            onClick={() => startGame(numberOfDoors, presentDoor)}
                            buttonTitle="Iniciar" />
                    </div>

                </Menu>
                :
                <Button
                    onClick={() => setInitGame(false)}
                    buttonTitle="Reiniciar"
                />
            }
            {initGame ?
                <Doors 
                    numberOfDoors={numberOfDoors}
                    presentDoor={presentDoor}
                />
                : null
            }
        </div>
    )
}