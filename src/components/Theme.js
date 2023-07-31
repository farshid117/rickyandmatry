import {createTheme} from "@mui/material"

//todo : Create Custom Theme for ThemeProvider
export const lightTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "tanha, Vazir, roboto"
    },
    palette:{
        mode:"light", 
        primary:{
            main: "#0222a1",

        },
        secondary:{
            main:"#0d6efd"
        },
        info:{
            main:"#efefef"
        },
        background:{
            paper:"#fff",
            default:"#0222a1"

        },
       
    }

})
export const darkTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "tanha, Vazir, roboto"
    },
    palette:{
        mode:"dark", 
        primary:{
            main: "#0b0f2f",

        },
        secondary:{
            main:"#313763"
        },
        info:{
            main:"#cacddf"
        },
        background:{
            paper:"#0b0f2f",
            default:"#0b0f2f"

        }
    }

})