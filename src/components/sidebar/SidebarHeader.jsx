
import { Avatar, Typography, Box} from "@mui/material";
import { useTheme } from "@mui/material/styles"



const SidebarHeader = () => {
   const theme = useTheme()
    return (
        <Box sx={{ mt: 2 }}>
          
            <Avatar
                alt="alireza khayatpour"
                src={require("../../assets/img/14.jpg")}
                sx={{ width: 120, height: 120, margin: "0 auto", border: "4px solid #cacddf" }}
            />
            <Typography variant="subtitle1" sx={{ marginTop: 2, fontWeight: "bold", color: "theme.palette.info", fontSize:20 }}>سریال ریکی و مارتی</Typography>
            <Typography variant="caption"   sx={{ marginTop: 1, color: "theme.pallete.primary" , fontSize:18, fontWeight: "bold"}}>Ricky and Marty</Typography>
        </Box>

    );
}

export default SidebarHeader;
