import { useEffect, useState, useContext, createContext } from 'react'
const DataContext = createContext({})
const {Provider}= DataContext

const DataGet=({children})=>{
	const [sessionItem, setSessionItem] = useState(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [isOnHomepage, setIsOnHomepage] = useState(false)
	useEffect(() => {
		const userSession = sessionStorage.getItem("userSession")
		if (!!userSession) {
			setSessionItem(JSON.parse(userSession))
			setIsLoggedIn(true)
		}
		else {
			setIsLoggedIn(false)
		}
		const handleStorageChange = () => {
			if (!!userSession) {
				setSessionItem(JSON.parse(userSession));
				setIsLoggedIn(true)
			}
			else {
				setIsLoggedIn(false)
			}
		};

		window.addEventListener('storage', handleStorageChange);
		
		return () => {
			window.removeEventListener('storage', handleStorageChange);
		};
	}, []);
    return (
        <Provider value={{isLoggedIn, setIsLoggedIn, sessionItem, isOnHomepage, setIsOnHomepage}}>
            {children}
        </Provider>
    )
}
const useData = () => useContext(DataContext)
export { useData, DataGet }
