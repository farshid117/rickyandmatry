import {useEffect,useContext } from 'react';
import { Avatar, Slide} from '@mui/material';
import {useTheme} from '@mui/material/styles'
import { Helmet } from 'react-helmet-async';
import { AccountCircleRounded } from '@mui/icons-material';
import Slider from "react-slick";

import RickyContext from '../../context/RickyContext'
import { DividerChip } from '../../components';
import rickyImg from "../../assets/img/14.jpg"

import "./Gallery.css"

const Gallery = () => {
    const theme = useTheme()
    const {mountingCarousel ,infos, setMountingCarousel,} = useContext(RickyContext)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: mountingCarousel ? true : false,
        autoplaySpeed: 2000, //ms -> 4 seconds
        pauseOnHover: true,
        cssEase:"linear",
        arrows:false
    }

    useEffect(() => {
        setMountingCarousel(true)

        return () => {
            setMountingCarousel(false)
        }
    }, [])


    return (
        <div className={theme.palette.mode === "dark" ? 'Comments dark' : "Comments"}>
            <Helmet>
                <title>ریکی و مارتی | گالری</title>
            </Helmet>
            <div className="container mt-3">
                <div className="row">
                    <Slide direction='down' in={mountingCarousel} style={{ transitionDelay: mountingCarousel ? "200ms" : "0ms" }}>
                        <div className="col-12">
                            <DividerChip borderColor="secondary"
                                label="گالری ریکی و مارتی"
                                color="primary"
                                icon={<AccountCircleRounded />}
                                avatar={
                                    <Avatar alt="myRezume"
                                        src={rickyImg}
                                    />
                                }
                            />
                        </div>
                    </Slide>
                </div>
                <div className="row" style={{marginTop:15 }}>
                    <Slider {...settings}>
                        {
                            infos.map(info => (
                                <div>
                                    <img src={info.image} alt='img'/>
                                </div>
                            ))
                        }

                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
