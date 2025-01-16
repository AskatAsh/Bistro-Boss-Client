import useGetMenu from "../../../Hooks/useGetMenu";
import SectionTitle from './../../../components/common/SectionTitle';

const PopularMenu = () => {
    const [menu] = useGetMenu();
    console.log(menu);
    return (
        <section className="max-w-[1320px] w-11/12 mx-auto">
            <SectionTitle title="From our Menu" subtitle="Check it out" />
        </section>
    );
};

export default PopularMenu;