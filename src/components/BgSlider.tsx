import { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState<number>(50);
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(event.target.value));
    }
  return (
    <div className="pb-10 md:py-5 mx-2 ">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-12 sm:mb-20">Remove background with <br /> high quality and accuracy</h1>
        <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
            <img src={assets.image_w_bg} alt="" style={{clipPath:`inset(0 ${100.2 - sliderPosition}% 0 0)`}} className="absolute top-0 left-0 w-full h-full" />
            <img src={assets.image_wo_bg} alt="" style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}}/>
            <input type="range" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider" min={0} max={100} value={sliderPosition} onChange={handleSliderChange} />
        </div>
    </div>
  )
}

export default BgSlider