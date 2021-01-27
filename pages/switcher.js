import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { dynamicComponent } from '../components/dynamicComponent'

const POSSIBLE_VALUES = ['None Selected', 'ComponentOne', 'ComponentTwo']

const Switcher = ({}) => {
    const router = useRouter()
    const [selected, setSelected] = useState('None Selected')

    return (
        <>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                <b>Select Compoent:</b>
            </div>
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
            <div style={{ marginLeft: '20px' }}>
                <b>
                    Dynamic Display of Component:{' '}
                    {selected != 'None Selected'
                        ? `(Click component below to navigate to stand-alone component)`
                        : null}
                </b>
            </div>
            {selected != 'None Selected' ? (
                <div
                    onClick={() => {
                        router.push(`/components/${selected}`)
                    }}
                >
                    {dynamicComponent(selected)}
                </div>
            ) : (
                <div className={styles.card}>No Component to preview for "{selected}"</div>
            )}
        </>
    )
}

export default Switcher
