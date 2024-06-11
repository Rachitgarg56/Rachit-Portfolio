import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Loom from "../../img/loom.png";
import Figma from "../../img/figma-clone.png";
import TextEditor from "../../img/text-editor.png";
import DrumKit from "../../img/drum-kit.png";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Loom} alt="" onClick={()=>window.location.href="https://zoom-clone-react.vercel.app/"} />
          <div style={{display: 'flex', alignItems: 'center', gap:'2rem'}}>
            <p>Video Meetings App</p>
            <Gitub onClick={()=>window.location.href="https://github.com/Rachitgarg56/zoom-clone-react"} color="#242d49" size={"3rem"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Figma} alt="" onClick={()=>window.location.href="https://figma-clone-react-jet.vercel.app/"} />
          <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <p>Figma Clone</p>
            <Gitub onClick={()=>window.location.href="https://github.com/Rachitgarg56/figma_clone_react"} color="#242d49" size={"3rem"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={TextEditor} alt="" onClick={()=>window.location.href="https://text-editor-react-seven.vercel.app/"} />
          <div style={{display: 'flex', alignItems: 'center', gap:'2rem'}}>
            <p>Text Editor</p>    
            <Gitub onClick={()=>window.location.href="https://github.com/Rachitgarg56/text-editor-react"} color="#242d49" size={"3rem"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={DrumKit} alt="" onClick={()=>window.location.href="https://rachitgarg56.github.io/keyboard-code-drum/"} />
          <div style={{display: 'flex', alignItems: 'center', gap:'2rem'}}>
            <p>Keyboard Drumkit</p>
            <Gitub onClick={()=>window.location.href="https://github.com/Rachitgarg56/keyboard-code-drum"} color="#242d49" size={"3rem"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
