import Banner from "../../components/common/Banner";
import menuBannerImage from "../../../src/assets/menu/banner3.jpg";

const Menu = () => {
    return (
        <div>
            <Banner bgImage={menuBannerImage} title="Our Menu" description="Would you like to try a dish?" cover={true} />
        </div>
    );
};

export default Menu;