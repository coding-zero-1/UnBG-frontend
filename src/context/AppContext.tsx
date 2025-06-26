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
    image?: string;
    setImage?: React.Dispatch<React.SetStateAction<string>>;
    removeBg?: (image: string) => Promise<void>;
    resultImage?: string;
}>({
    credit: 0,
    setCredit: () => {},
    loadCredits: async () => {},
    backendUrl: import.meta.env.BACKEND_URL,
    image: undefined,
    setImage: () => {},
    removeBg: async () => {},
    resultImage: ""
});

const AppContextProvider = (props: React.PropsWithChildren<object>) => {
    const [credit,setCredit] = useState<number>(0);
    const backendUrl = import.meta.env.BACKEND_URL;
    const [image,setImage] = useState<string>("");
    const [resultImage , setResultImage] = useState<string>("");
    const {getToken} = useAuth();
    const {isSignedIn}=useUser();
    const {openSignIn} = useClerk();
    const navigate = useNavigate();

    const loadCredits = async () => {
        try {
            const token = await getToken();
            const {data} = await axios.get(`${backendUrl}/api/v1/users/credits`, {
                headers: {
                    token: token
                },
            });

            if(data.success){
                setCredit(data.credits);
            }
        } catch (error) {
            console.error('Error loading credits:', error);
            toast.error('Failed to load credits. Please try again later.');
        }
    }
    const removeBg = async (image:string)=>{
        try {
            if(!isSignedIn) {
                return openSignIn();
            }
            setImage(image)
            setResultImage("");
            console.log("Image to remove background:", image);
            navigate('/result');
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
        removeBg
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}
export default AppContextProvider;
