import SectionTitle from "../../../components/common/SectionTitle";
import featuredImg from "../../../../src/assets/home/featured.jpg";
import Button from "../../../components/common/Button";
import "../../../styles/featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white my-20 relative">
      <div className="bg-black/50 h-full pt-8">
        <SectionTitle
          subtitle="check it out"
          title="Featured Item"
          bgdark={true}
        ></SectionTitle>
        <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
          <div>
            <img src={featuredImg} alt="featured recipe image" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase text-xl my-1">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita hic dolorem, iusto vel suscipit nam excepturi debitis
              magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
              consectetur blanditiis laboriosam fugiat ea quia similique quam
              nisi reprehenderit numquam magnam nemo vitae cupiditate, atque
              maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            <Button btnText="Order now" btnStyles="text-white border-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
