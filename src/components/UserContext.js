import React from 'react';

const UserContext = React.createContext();

const UserProvider = (props) => {

    return (
        <UserContext.Provider value={{
            
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }