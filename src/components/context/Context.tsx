import * as React from 'react'
import { IMovie } from '../interface/IMovies';
import { IProfile } from '../interface/IProfile';


export interface IContext {
    store: IStore;
    setStore: (store: IStore) => void;
}

export interface IStore {
    theme: string;
    movies: null |IMovie[] | undefined;
    //addedMovies: null | [];
    //setStore: () => void,
    user: IProfile | null
}

const defaultValue: IStore = {
    theme: 'light',
    movies: null,
    //addedMovies: null,
    user: null,
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