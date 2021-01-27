import { useTranslation, Trans } from 'next-i18next'
import styles from '../../../styles/Home.module.css'

const ComponentTwo = () => {
    const { t } = useTranslation('ComponentTwo')

    return (
        <div className={styles.card}>
            <Trans t={t} i18nKey="txt">
                Default ComponentTwo (NO TRANSLATION)
            </Trans>
        </div>
    )
}

export default ComponentTwo
