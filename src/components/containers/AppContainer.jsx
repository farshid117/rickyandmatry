import { useState, useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

import { MainLayout } from "../"
import RickyContext from "../../context/RickyContext"

const AppContainer = ({ children }) => {

    const [mode, setMode] = useState()
    const [mounting, setMounting] = useState(false);
    const [mountingCarousel, setMountingCarousel] = useState(false);
    const [infos, setInfos]= useState([])
    const [loading, setLoading] = useState(false)

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme : dark)')
    
    useEffect(() => {
        setMode(prefersDarkMode ? "dark" : "light")

        setMounting(true)

        const endpoint = "https://rickandmortyapi.com/graphql";
        const headers = {
            "content-type": "application/json",
            "Authorization": "<token>"
        };
        const graphqlQuery = {
            "operationName": "fetchAuthor",
            "query": `query fetchAuthor { 
                characters {
                    results{
                      id
                      name
                      image
                      gender
                      created
                      }  
                    },
             }`,
            "variables": {}
        };
        
        const options = {
            "method": "POST",
            "headers": headers,
            "body": JSON.stringify(graphqlQuery)
        };
        setLoading(true)
         fetch(endpoint, options)
         .then(res => res.json())
         .then(({data}) => {
            setInfos(data.characters.results)
            setLoading(false)
        });
        
        
        return () => {
            setMounting(false)
        }
    }, [])

    const handleChangeMode = () => {
        setMode(prevMode => prevMode === "dark" ? "light" : "dark")
    }

    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        console.log("newValue: ", newValue); // value is 0 to 5 baseon tabs of clicked
        setValue(newValue)
    }

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <MainLayout mode={mode}>
            <RickyContext.Provider value={{
                value,
                setValue,
                mobileOpen,
                setMobileOpen,

                mode,
                setMode,
                handleChangeMode,

                handleChange,
                handleDrawerToggle,

                mounting,
                setMounting,
                mountingCarousel,
                setMountingCarousel,
                infos,
                loading

            }}>
                {children} {/* App.js content */}
            </RickyContext.Provider>
        </MainLayout>
    );
}

export default AppContainer;
