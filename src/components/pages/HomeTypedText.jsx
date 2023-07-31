import {useRef, useEffect} from 'react';
import Typed from 'typed.js';
import { useTheme } from "@mui/material/styles"
import rickLogo from '../../assets/background/logo.png'
const HomeTypedText = () => {
    const theme = useTheme()

    /* todo : react-typed */
    
    const infoEl = useRef(null)

    const strings = [
        "پرحاشیه ترین سریال دهه اخیر",   
    ]

    useEffect(() => {
     
        const typedInfo = new Typed(infoEl.current, {
            strings: strings,
            startDelay: 1700,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 0,
            showCursor: false,
            loop: true
        })
        return () => {
            
            typedInfo.destroy()
        };
    }, []);
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <span className="h1 d-block fw-bold mb-3 myname" style={{ color: theme.palette.mode==="dark" ? "#cacddf" : "#0222a1"  , fontSize:40}}>سریال ریک و مارتی</span>
               
                </div>
                <img src={rickLogo} height={100} width={150} alt='aaa' />
            </div>
            <div className="row">
                <div className="col-12 mt-3">
                    <span style={{ color: "#0b0f2f" }}>.</span>
                    <span className="h4  info" ref={infoEl}></span>
                </div>
            </div>
        </>

    );
}

export default HomeTypedText;
