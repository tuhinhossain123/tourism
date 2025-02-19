import toast from "react-hot-toast";
import moment from "moment";
import axios from "axios";

const img_hosting_key = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const BlogAdd = () => {
  const currentDate = moment().format("MMMM DD,YYYY");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const img = e.target.img.files[0];
    const keywords = from.keywords.value;
    const description = from.description.value;
    // img hosting
    const image = { image: img };
    const res = await axios.post(img_hosting_api, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const blogDetails = {
      currentDate,
      title,
      img: res.data.data.url,
      keywords,
      description,
    };

    fetch("https://tourism-server-nine.vercel.app/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (res.data.insertedId) {
          from.reset();
          toast.success("Blog added successfully!!");
        }
      });
  };

  return (
    <div className="my-10">
      <h2 className="text-xl lg:text-3xl text-secondary  font-jost font-medium pb-3 lg:pb-6 ">
        Add Blog
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-5">
          <div className="form-control w-full">
            <label>
              <input
                type="text"
                name="title"
                placeholder="Blog Title"
                className="input w-full border-2 border-primary focus:border-primary  placeholder:text-secondary font-jost font-medium  focus:outline-none  rounded-md py-2 px-4"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label>
              <input
                type="file"
                name="img"
                placeholder="Blog Img"
                required
                className="input w-full border-2 border-primary focus:border-primary  placeholder:text-secondary font-jost font-medium  focus:outline-none  rounded-md py-2 px-4"
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label>
              <input
                type="text"
                name="keywords"
                placeholder="Keyeords"
                required
                className="input w-full border-2 border-primary focus:border-primary  placeholder:text-secondary font-jost font-medium  focus:outline-none  rounded-md py-2 px-4"
              />
            </label>
          </div>
        </div>
        <div className="mt-6">
          <div className="form-control w-full">
            <textarea
              type="text"
              name="description"
              id=""
              cols="10"
              rows="20"
              placeholder="Blog Description"
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
