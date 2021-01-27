import { dynamicComponent, PATH_MAP } from '../../components/dynamicComponent'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Component = ({ componentName }) => {
    return <div>{dynamicComponent(componentName)}</div>
}

export const getStaticProps = async (context) => {
    const {
        params: { componentName },
        locale,
    } = context

    const i18nOptions = {
        react: { transKeepBasicHtmlNodesFor: ['br', 'i', 'b', 'p', 'strong'] },
    }

    return {
        props: {
            componentName,
            ...(await serverSideTranslations(locale, [componentName], i18nOptions)),
        },
    }
}

export async function getStaticPaths() {
    const componentNames = []
    Object.keys(PATH_MAP).forEach((componentName) => {
        ;['en', 'de'].forEach((locale) => componentNames.push({ params: { componentName }, locale }))
    })

    return {
        paths: componentNames,
        fallback: false,
    }
}

export default Component
