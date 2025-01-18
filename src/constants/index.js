// import images for hero banner section in home page
import img1 from '../../src/assets/home/01.jpg';
import img2 from '../../src/assets/home/02.jpg';
import img3 from '../../src/assets/home/03.png';
import img4 from '../../src/assets/home/04.jpg';
import img5 from '../../src/assets/home/05.png';
import img6 from '../../src/assets/home/06.png';

// Export an array of images
const images = [img1, img2, img3, img4, img5, img6];

export default images;

// import images of categories and export in array
import slide1 from '../../src/assets/home/slide1.jpg'
import slide2 from '../../src/assets/home/slide2.jpg'
import slide3 from '../../src/assets/home/slide3.jpg'
import slide4 from '../../src/assets/home/slide4.jpg'
import slide5 from '../../src/assets/home/slide5.jpg'

export const categoryImages = [slide1, slide2, slide3, slide4, slide5];

// export category names
export const categories = ["Salad", "Pizza", "Soup", "Dessert", "Fruits"];

// import home banner background image and export with content
import homeBannerImage from '../../src/assets/home/chef-service.jpg'

export const homeBannerContent = {
    title: "Bistro Boss",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.",
    bgImage: homeBannerImage,
}

// import and export login and sign up page images and icons
import loginImage from "../../src/assets/others/authentication2.png";
import loginBackground from "../../src/assets/others/authentication.png";
import facebookIcon from "../../src/assets/icon/facebook.svg";
import googleIcon from "../../src/assets/icon/google.svg";
import githubIcon from "../../src/assets/icon/github.svg";

export const authAssets = {loginImage, loginBackground, facebookIcon, googleIcon, githubIcon};