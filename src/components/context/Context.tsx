import * as React from 'react'


export interface IContext {
    store: IStore;
    setStore: (store: IStore) => void;
}

export interface IStore {
    theme: string;
    data: null | [];
    //setStore: () => void,
}

const defaultValue: IStore = {
    theme: 'light',
    data: null
}

type Props = {
    children: any;
}

export const GlobalContext = React.createContext<IContext | null>(null);

const ContextProvider: React.FC<Props> = ({children}) => {

    const [store, setStore] = React.useState<IStore>(defaultValue)

    return (
        <GlobalContext.Provider value={{store, setStore}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider