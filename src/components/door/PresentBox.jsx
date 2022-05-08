import styles from '../../styles/PresentBox.module.css'

export default function PresentBox(props) {
    return (
        <div className={styles.presentBox}>
            <div className={styles.boxCover}></div>
            <div className={styles.box}></div>
            <div className={styles.verticalLace}></div>
            <div className={styles.horiozontalLace}></div>
        </div>
    )
}