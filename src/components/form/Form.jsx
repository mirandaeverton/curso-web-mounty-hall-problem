import styles from '../../styles/Form.module.css'

export default function Form(props) {
    return (
        <div className={styles.form}>
            <label>{props.question}</label>
            <input
                type="number"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}