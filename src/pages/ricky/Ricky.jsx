import { useContext } from 'react';
import { Helmet } from "react-helmet-async"
import { Avatar, Slide} from '@mui/material';
import { AccountCircleRounded } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles"

import { DividerChip, RickyCard, Spinner } from '../../components';
import RickyContext from '../../context/RickyContext'
import rickyImg from "../../assets/img/14.jpg"

import "./Ricky.css"


const Ricky = () => {
    const theme = useTheme()
    const {mounting ,infos, loading} = useContext(RickyContext)
    
    return (
        loading ? <Spinner />   : (
            <div className={theme.palette.mode === "dark" ? "Courses dark" : 'Courses'}>
            <Helmet>
                <title>ریکی و مارتی | درباره</title>
            </Helmet>
            <div className="container mt-5 mt-md-3 px-5">
                <div className="row">
                    <Slide direction='down' in={mounting} style={{ transitionDelay: mounting ? "200ms" : "0ms" }}>
                        <div className="col-12">
                            <DividerChip borderColor="primary"
                                label="درباره ریکی و مارتی"
                                color="primary"
                                icon={<AccountCircleRounded />}
                                avatar={
                                    <Avatar alt="ricky"
                                        src={rickyImg}
                                    />
                                }
                            />
                        </div>
                    </Slide>
                </div>
                <div className="row">
                    {
                        infos.map((item, index) => (
                            <Slide direction='up' in={mounting} style={{ transitionDelay: mounting ? `${index + 1}00ms` : "0ms" }}>
                                <div className="col-12 col-md-6 col-xl-4 mb-3 mt-2">
                                    {/* CoursesCard */}
                                    <RickyCard index={index} item={item} />
                                </div>
                            </Slide>
                        ))
                    }
                </div>
            </div>
        </div>
        )
    );
}

export default Ricky;