import { useContext } from "react";
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext";

const Header = () => {
    const {removeBg} = useContext(AppContext);
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:mx-44">
        <div>
            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight text-neutral-700">
                Remove the <br className="max-md:hidden" /> <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">background</span> from <br className="max-md:hidden"  /> your images with ease.
            </h1>
            <p className="my-6 text-[17px] text-gray-500">
                Easy to use and fast background remover. <br className="max-sm:hidden"  />
                Remove background from images in seconds with our AI-powered tool.
            </p>
            <div>
                <input
                    type="file"
                    name="upload-file"
                    id="upload-file"
                    hidden
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            if (removeBg) {
                                removeBg(e.target.files[0]);
                            }
                        }
                    }}
                    accept="image/*"
                />
                <label htmlFor="upload-file" className="inline-flex gap-3 px-8 py-4 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700">
                    <img src={assets.upload_btn_icon} alt="" width={20} />
                    <p className="text-white text-sm">Upload your image</p>
                </label>
            </div>
        </div>
        <div className="w-full max-w-md">
            <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header