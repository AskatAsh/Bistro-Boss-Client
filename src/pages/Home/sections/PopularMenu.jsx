import MenuItem from "../../../components/common/MenuItem";
import useGetMenu from "../../../Hooks/useGetMenu";
import SectionTitle from "./../../../components/common/SectionTitle";

const PopularMenu = () => {
  const [menu] = useGetMenu();
  const popular = menu.slice(0, 6);

  return (
    <section className="max-w-[1320px] w-11/12 mx-auto">
      <SectionTitle title="From our Menu" subtitle="Check it out" />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
