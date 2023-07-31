import { useEffect, useCallback, useState } from "react"
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { Helmet } from "react-helmet-async"
import { Slide, Fade } from "@mui/material";
import { useTheme } from "@mui/material/styles"


import { mouseAttraction, } from "../../constants/particles"
import { HomeTypedText } from "../../components"
import bg12 from "../../assets/background/bg12.png"

import "./Home.css"


const Home = () => {
    const theme = useTheme()
    const [mounting, setMounting] = useState(false)

    useEffect(() => {
        setMounting(true)

        return () => {
            setMounting(false)
        }
    }, [])



    /* // TODO: react-particles setting  */
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
        /* await loadPolygonPath(tsParticles); */

    }, []);

    return (
        <div className= {theme.palette.mode === "dark" ? "homePage dark" : "homePage"}>
            <Helmet>
                <title>ریکی و مارتی | خانه</title>
            </Helmet>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={mouseAttraction}
                className="particles"
            />
            <div className="row justify-content-center align-items-center h-100">

                <Slide direction="down" in={mounting} style={{ transitionDelay: mounting ? "200ms" : "0ms" }} >
                    <div className="col-12 col-md-6 text-center  ">
                        <HomeTypedText />
                    </div>
                </Slide>

                <Fade in={mounting} style={{ transitionDelay: mounting ? "500ms" : "0ms" }}  >
                    <div className="col-12 col-md-6 myImg">
                        <img src={bg12} width={400} height={300} className=" img-fluid  myImg" alt="myphoto" />
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Home;
