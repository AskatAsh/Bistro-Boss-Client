import MenuItem from "../../../components/common/MenuItem";
import useGetMenu from "../../../Hooks/useGetMenu";
import SectionTitle from "./../../../components/common/SectionTitle";
import Button from "./../../../components/common/Button";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useGetMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="max-w-[1320px] w-11/12 mx-auto">
      <SectionTitle title="From our Menu" subtitle="Check it out" />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to="/menu">
        <Button
          btnText="View full menu"
          btnStyles="text-footerbg1 block mx-auto px-8 my-8 text-lg"
        />
      </Link>
    </section>
  );
};

export default PopularMenu;
