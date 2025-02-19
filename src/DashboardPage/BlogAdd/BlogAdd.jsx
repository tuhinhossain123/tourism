// import toast from "react-hot-toast";
// import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import moment from "moment";

// const img_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSYING_KEY;
// const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const BlogAdd = () => {
  //   const axiosSecure = useAxiosSecure();
  const currentDate = moment().format("MMMM DD,YYYY");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    // const img = e.target.img.files[0];
    const category = from.category.value;
    const description = from.description.value;

    // const image = { image: img };
    // const res = await axiosSecure.post(img_hosting_api, image, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });
    const productDetails = {
      currentDate,
      title,
      //   img: res.data.data.url,
      category,
      description,
    };
    console.log(productDetails);
    //     fetch("https://grocery-shop-ser.vercel.app/products", {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(productDetails),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (res.data.insertedId) {
    //           toast.success("Product added successfully!!");
    //           from.reset();
    //         }
    //         console.log(data);
    //       });
  };
  return (
    <div className="my-10">
      <h2 className="text-xl lg:text-3xl text-secondary  font-jost font-medium pb-3 lg:pb-6 ">
        Add Product
      </h2>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-5">
          <div className="form-control w-full">
            <label>
              <input
                type="text"
                name="title"
                placeholder="Blog Title"
                required
                className="input w-full border-2 border-primary focus:border-primary  placeholder:text-secondary font-jost font-medium  focus:outline-none  rounded-md py-2 px-4"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label>
              <input
                type="file"
                name="img"
                placeholder="Product Img"
                required
                className="input w-full border-2 border-primary focus:border-primary  placeholder:text-secondary font-jost font-medium  focus:outline-none  rounded-md py-2 px-4"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <select
              id=""
              name="category"
              required
              className="input w-full border-2 border-primary focus:border-primary  placeholder:text-secondary font-jost font-medium  focus:outline-none  rounded-md py-2 px-4"
            >
              <option value="Category">Select Packeges</option>
              <option value="Best Seller">Best </option>
              <option value="Featured">Featured</option>
              <option value="Latest">Latest</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <div className="form-control w-full">
            <textarea
              name="description"
              id=""
              cols="10"
              rows="20"
              placeholder="Product Description"
              className="input w-full border-2 border-primary focus:border-primary h-52 placeholder:text-secondary font-jost font-medium  focus:outline-none  rounded-md py-2 px-4"
            ></textarea>
          </div>
        </div>
        <div className="mt-8">
          <button className="bg-primary font-jost font-medium text-white rounded-lg px-4 py-2 text-lg ">
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogAdd;
