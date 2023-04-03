import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { UserContext } from './context/userContext'
import RootComponent from './RootComponent'
import { persistor, store } from './store/reducers/store'

const App: React.FC = () => {
    const userInfo ={
        isLoggedIn: false
    }
    const [users, setUsers] = useState(userInfo)
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <UserContext.Provider value={{users, setUsers}}>
                    <RootComponent />
                </UserContext.Provider>
            </PersistGate>
        </Provider>
    )
}

export default App
