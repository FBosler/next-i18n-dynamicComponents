import { useTranslation, Trans } from 'next-i18next'
import styles from '../../../styles/Home.module.css'

const ComponentOne = () => {
    const { t } = useTranslation('ComponentOne')

    return (
        <div className={styles.card}>
            <Trans t={t} i18nKey="txt">
                Default ComponentOne (NO TRANSLATION)
            </Trans>
        </div>
    )
}

export default ComponentOne
