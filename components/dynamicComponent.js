import dynamic from 'next/dynamic'

// this is a bit annoying, but what can you do
const COMPONENT_MAP = {
    ComponentOne: {
        path: './src/ComponentOne',
        module: dynamic(import('./src/ComponentOne')),
    },
    ComponentTwo: {
        path: './src/ComponentTwo',
        module: dynamic(import('./src/ComponentTwo')),
    },
}

const PATH_MAP = Object.entries(COMPONENT_MAP).reduce((map, obj) => {
    map[obj[0]] = obj[1].path.replace('./src/', '').replace(/\//g, '_')
    return map
}, {})

const dynamicComponent = (componentName, props) => {
    const Component = COMPONENT_MAP[componentName]['module']

    if (Component) {
        return <Component {...{ ...props, componentName }} />
    } else {
        return <div>{`Could not find component for ${componentName} please check componentName`}</div>
    }
}

export { dynamicComponent, PATH_MAP }
