import * as React from 'react'


interface IContext {
    theme: string;
    data: null | [];
    //setStore: () => void,
}

const defaultValue: IContext = {
    theme: 'light',
    data: null
}

export const GlobalContext = React.createContext<IContext>(defaultValue);

const ContextProvider: React.FC = (props: any) => {

    const [store, steStore] = React.useState<IContext>(defaultValue)

    return (
        <GlobalContext.Provider value={store}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider