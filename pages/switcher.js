import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { dynamicComponent, PATH_MAP } from '../components/dynamicComponent'

const POSSIBLE_VALUES = ['None Selected', 'ComponentOne', 'ComponentTwo']

const Switcher = ({}) => {
    const [selected, setSelected] = useState('None Selected')

    return (
        <>
            <div className={styles.card}>
                <form>
                    <select
                        onChange={(e) => {
                            setSelected(e.target.selectedOptions[0].value)
                        }}
                    >
                        {POSSIBLE_VALUES.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </form>
            </div>

            {selected != 'None Selected' ? (
                dynamicComponent(selected)
            ) : (
                <div className={styles.card}>Selected Component: {selected}</div>
            )}
        </>
    )
}

export default Switcher
