import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import remove_bg_icon from './remove_bg_icon.svg'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './upload_icon.svg'
import download_icon from './download_icon.svg'
import image_w_bg from './image_w_bg.png'
import image_wo_bg from './image_wo_bg.png'
import facebook_icon from './facebook_icon.svg'
import google_plus_icon from './google_plus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import credit_icon from './credit_icon.png'
import unbg_logo from './unbg-logo-navbar-2.png'

interface TestimonialType{
    id: number;
    text: string;
    author: string;
    image: string;
    jobTitle: string;
}

interface PlanType {
    id: string;
    price: number;
    credits: number;
    desc: string;
}

interface AssetsType {
    logo: string;
    logo_icon: string;
    arrow_icon: string;
    header_img: string;
    remove_bg_icon: string;
    upload_icon: string;
    download_icon: string;
    image_w_bg: string;
    image_wo_bg: string;
    facebook_icon: string;
    google_plus_icon: string;
    twitter_icon: string;
    upload_btn_icon: string;
    credit_icon: string;
    unbg_logo: string;
}

export const assets:AssetsType = {
    logo,
    logo_icon,
    arrow_icon,
    header_img,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    google_plus_icon,
    twitter_icon,
    upload_btn_icon,
    credit_icon,
    unbg_logo
}

export const testimonialsData:TestimonialType[] = [
    {
        id: 1,
        text: "I've been using UnBG for quiet some time, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
        author: "Richard Nelson",
        image: profile_img_1,
        jobTitle:'Web Developer'
    },
    {
        id: 2,
        text: "I've been using UnBG for nearly 1 month, I had a fantastic experience. The quality is top-notch. I recommend others to try this app.",
        author: "Donald Jackman",
        image: profile_img_2,
        jobTitle:'UI Deginer'
    },
];

export const plans:PlanType[] = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]