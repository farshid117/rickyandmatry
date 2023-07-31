
import { FavoriteOutlined, HomeRounded, FaceRounded, TextSnippetRounded, TerminalRounded, MessageRounded } from '@mui/icons-material';
import { purple } from "@mui/material/colors";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}` //one string became prop writen into ""
        //aria-controls is id of Tabpanels
        //aria-contols ~ data-bs-toggle in Bootstrap
    }
}
export const tabsData = () => {
 
    const  tabs = [
        { label: "خانه", icon: <HomeRounded sx={{ color: "secondary", mr: 1 }} />, ...tabProps(0) },
        { label: "ریکی و مارتی", icon: <FaceRounded sx={{ color: "secondary", mr: 1 }} />, ...tabProps(1) },
        { label: "گالری", icon: <TextSnippetRounded sx={{ color: "secondary", mr: 1 }} />, ...tabProps(2) },
        { label: "درباره توسعه دهنده", icon: <TerminalRounded sx={{ color: "secondary", mr: 1 }} />, ...tabProps(3) },
        { label: "ارتباط بامن", icon: <FavoriteOutlined sx={{ color: "secondary", mr: 1 }} />, ...tabProps(4) }
    ]
    return tabs
}