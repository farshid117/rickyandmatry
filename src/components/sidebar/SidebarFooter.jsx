import { useContext } from 'react';
import { Typography, Box, Fab } from "@mui/material";
import { FavoriteOutlined, CopyrightRounded, } from '@mui/icons-material';
import {DarkMode, LightMode} from '@mui/icons-material/';
import { useTheme } from '@mui/material/styles';
import PortfolioContext from "../../context/RickyContext"

const SidebarFooter = () => {
    const { handleChangeMode } = useContext(PortfolioContext)
    const theme = useTheme()
    return (
        <Box sx={{ height: 85, display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "end", alignItems: "center" }}>
            <Fab
                variant='extended'
                size="small"
                onClick={handleChangeMode}
                color='secondary'
                sx={{
                    backgroundColor: theme.palette.mode === "light" ? "primary" : "#4a148c" ,
                    color: "whitesmoke",
                    mb:2
                }}
            >
                {theme.palette.mode === "light" ? <DarkMode sx={{ mr: 1 }} /> : <LightMode sx={{ mr: 1 }} /> }
                {theme.palette.mode === "light" ? "تم‌شب" : "تم‌روز"}
            </Fab>
            <Typography variant="caption" color="whitesmoke" >
                به سفارش گروه صنعتی انتخاب{" "}
                <FavoriteOutlined sx={{ color: "tomato", height: 20, verticalAlign: "middle" }} />
            </Typography>
            <Typography variant="caption" color="whitesmoke" >
                کپی رایت 1402 {" "}
                <CopyrightRounded sx={{ height: 16, verticalAlign: "middle" }} />
            </Typography>
        </Box>

    );
}

export default SidebarFooter;
