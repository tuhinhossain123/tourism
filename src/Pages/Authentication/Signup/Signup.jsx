// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Signup = () => {
  //   const router = useRouteError();

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  return (
    <div className="mt-48 lg:mt-56 max-w-[1680px] flex justify-center px-6 lg:px-8">
      <div className="w-full lg:w-[30%]">
        <h2 className="text-3xl font-semibold pb-12">
          Sign Up to <span className="text-primary"> Tourism Site</span>
        </h2>
        <form>
         
          <div className="form-control  pb-6 md:pb-10">
            <h5 className="font-semibold text-black text-lg pb-3 md:pb-4">
              User Name{" "}
              <span className="text-primary text-[1.5rem] pl-1">*</span>
            </h5>
            <input
              type="text"
              //   {...register("name", { required: true })}
              className="input bg-gray-100 border-2  text-lg w-full p-3 focus:outline-none "
            />
            {/* {errors.name && (
              <span className="text-primary font-medium">name is required</span>
            )} */}
          </div>
          <div className="form-control  pb-6 md:pb-10">
            <h5 className="font-semibold text-black text-lg pb-3 md:pb-4">
              Email <span className="text-primary text-[1.5rem] pl-1">*</span>
            </h5>
            <input
              type="email"
              //   {...register("email", { required: true })}
              className="input bg-gray-100 border-2 text-lg w-full p-3 focus:outline-none"
            />
            {/* {errors.email && (
              <span className="text-primary font-medium">
                email is required
              </span>
            )} */}
          </div>
          <div className="form-control ">
            <div className="">
              <h5 className="font-semibold text-black text-lg pb-3 md:pb-4">
                Password{" "}
                <span className="text-primary text-[1.5rem] pl-1">*</span>
              </h5>
              <input
                type="password"
                // {...register("password", {
                //   required: true,
                //   minLength: 6,
                //   maxLength: 20,
                //   pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                // })}
                className="input bg-gray-100 border-2  text-lg w-full p-3 focus:outline-none"
              />
              {/* {errors.password?.type === "required" && (
                <span className="text-primary font-medium">
                  password is required
                </span>
              )} */}
              {/* {errors.password?.type === "minLength" && (
                <span className="text-primary font-medium">
                  Password must be 6 characters
                </span>
              )} */}
              {/* {errors.password?.type === "maxLength" && (
                <span className="text-primary font-medium">
                  Password must be less then 20 characters
                </span>
              )} */}
              {/* {errors.password?.type === "pattern" && (
                <span className="text-primary font-medium">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </span>
              )} */}
            </div>
          </div>
          <div className="form-control mt-8">
            <button className="btn w-full py-2 px-2 font-semibold rounded-md text-lg bg-primary hover:bg-secondary text-white">
              Sign Up
            </button>
          </div>
          <div className="pt-4">
            <p className="">
              <span className="font-medium text-[16px]"> Already have an account? Go to</span>
              <Link to="/signin" className=" text-red-600 underline pl-2 font-semibold text-lg">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
