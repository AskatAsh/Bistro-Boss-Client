import useGetMenu from "../../Hooks/useGetMenu";
import Button from "../common/Button";
import MenuItem from "../common/MenuItem";
import SectionTitle from "../common/SectionTitle";

const Offer = () => {
  const [menu] = useGetMenu();
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <section className="max-w-[1320px] w-11/12 mx-auto">
      <SectionTitle title="Today's Offer" subtitle="Don't miss" />
      <div className="grid md:grid-cols-2 gap-10">
        {offered.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Button
        btnText="Order your favourite food"
        btnStyles="text-footerbg1 block mx-auto px-8 my-8 text-lg"
      />
    </section>
  );
};

export default Offer;
