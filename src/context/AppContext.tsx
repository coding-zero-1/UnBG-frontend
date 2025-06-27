import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext<{
    credit: number;
    setCredit: React.Dispatch<React.SetStateAction<number>>;
    loadCredits: () => Promise<void>;
    backendUrl: string;
    image?: File | undefined;
    setImage?: React.Dispatch<React.SetStateAction<File | undefined>>;
    removeBg?: (image: File) => Promise<void>;
    resultImage?: string;
    setResultImage?: React.Dispatch<React.SetStateAction<string>>;
}>({
    credit: 5,
    setCredit: () => {},
    loadCredits: async () => {},
    backendUrl: import.meta.env.VITE_BACKEND_URL,
    image: undefined,
    setImage: () => {},
    removeBg: async () => {},
    resultImage: "",
    setResultImage: () => {},
});

const AppContextProvider = (props: React.PropsWithChildren<object>) => {
    const [credit,setCredit] = useState<number>(0);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [image,setImage] = useState<File|undefined>(undefined);
    const [resultImage , setResultImage] = useState<string>("");
    const {getToken} = useAuth();
    const {isSignedIn}=useUser();
    const {openSignIn} = useClerk();
    const navigate = useNavigate();

    const loadCredits = async () => {
        try {
            const token = await getToken();
            console.log("Token for loading credits:", token);
            const {data} = await axios.get(`${backendUrl}/api/v1/users/credits`, {
                headers: {
                    token: token
                },
            });
            console.log("Credits data:", data);

            if(data.success){
                setCredit(data.credits);
            }
        } catch (error) {
            console.error('Error loading credits:', error);
            toast.error('Failed to load credits. Please try again later.');
        }
    }
    const removeBg = async (image:File)=>{
        try {
            if(!isSignedIn) {
                return openSignIn();
            }
            setImage(image)
            setResultImage("");
            console.log("Image to remove background:", image);
            navigate('/result');
            const token = await getToken();
            const formData = new FormData();
            formData.append("image", image);
            const {data} = await axios.post(`${backendUrl}/api/v1/images/remove-bg`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    token: token
                }
            });
            if(data.success){
                setResultImage(data.image);
                setCredit(data.creditBalance);
            }else{
                toast.error(data.error || 'Failed to remove background. Please try again later.');
                setCredit(data.creditBalance);
                if(data.creditBalance === 0) {
                    toast.error('Insufficient credits. Please purchase more credits to use this feature.');
                    navigate('/buy');
                }
            }
        } catch (error) {
            console.error('Error removing background:', error);
            toast.error('Failed to remove background. Please try again later.');
        }
    }
    const value = {
        credit,
        setCredit,
        loadCredits,
        backendUrl,
        image,
        setImage,
        removeBg,
        resultImage,
        setResultImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}
export default AppContextProvider;
