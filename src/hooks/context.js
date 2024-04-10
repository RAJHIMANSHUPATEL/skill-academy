import { createContext, useState } from "react";

const AppContext = createContext();




const ContextProvider = ({ children }) => {
    const [showHM, setShowHM] = useState(false);
    const [toggleModuleState, setToggleModuleState] = useState({});

    const toggleModule = (moduleId) => {
        setToggleModuleState((prevState) => ({
            ...prevState,
            [moduleId]: !prevState[moduleId],
        }));
    };

    const toggleSidebar = () => {
        setShowHM(prevState => !prevState);
    }

    return(
        <AppContext.Provider value={{showHM, toggleSidebar, toggleModule, toggleModuleState}}>
            {children}
        </AppContext.Provider>
    )
}

export {ContextProvider, AppContext}