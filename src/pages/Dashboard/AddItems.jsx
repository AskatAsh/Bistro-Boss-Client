import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../components/common/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <section>
      <SectionTitle title="add an item" subtitle="What's new?"></SectionTitle>
      <div className="bg-dark7 p-6 rounded-md w-11/12 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn bg-gradient-to-r from-darkgold to-darkgold/80">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddItems;
