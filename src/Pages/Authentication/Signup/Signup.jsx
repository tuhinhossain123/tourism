import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data?.name, data?.photoURL)
        .then(() => {
          console.log("User Profile Info update");
          reset();
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="my-48 lg:mt-[280px]">
      <div className="flex flex-col lg:flex-row justify-center  max-w-[1680px] mx-auto  px-6 lg:px-8">
        <div className="hidden lg:block lg:w-[70%] lg:pl-28">
          <h2 className="text-3xl md:text-4xl lg:text-[60px] font-jost font-medium  pb-4 lg:pb-6 lg:leading-[1.1]">
            The trip of your dreams <br /> starts with{" "}
            <span className="text-primary">Kaylashae_Adventures</span>
          </h2>
          <h3 className="text-2xl text-[#47545F] font-jost font-normal">
            Covering hundreds of destinations and countless experiences,
            <br />
            Kaylashae_Adventures is your guide for traveling better and smarter.
          </h3>
        </div>

        <div className="w-full lg:w-[30%]">
          <h2 className="text-3xl font-jost font-medium pb-8 lg:pb-12">
            Welcome To{" "}
            <span className="text-primary"> Kaylashae_Adventures</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control  pb-6 md:pb-8">
              <h5 className="font-medium font-jost text-black text-lg pb-3 md:pb-2">
                User Name <span className="text-primary text-[1.5rem]">*</span>
              </h5>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input bg-gray-100 border-2  text-lg w-full p-3 focus:outline-none "
              />
              {errors.name && (
                <span className="text-red-600 font-jost font-normal">
                  name is required
                </span>
              )}
            </div>
            <div className="form-control  pb-6 md:pb-8">
              <h5 className="font-medium font-jost text-black text-lg pb-3 md:pb-2">
                Email <span className="text-primary text-[1.5rem]">*</span>
              </h5>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input bg-gray-100 border-2 text-lg w-full p-3 focus:outline-none"
              />
              {errors.email && (
                <span className="text-red-600 font-jost font-normal">
                  email is required
                </span>
              )}
            </div>
            <div className="form-control ">
              <div className="">
                <h5 className="font-semibold text-black text-lg pb-3 md:pb-2">
                  Password{" "}
                  <span className="text-primary text-[1.5rem] pl-1">*</span>
                </h5>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  className="input bg-gray-100 border-2  text-lg w-full p-3 focus:outline-none"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 font-jost font-normal">
                    password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600 font-normal">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600 font-normal">
                    Password must be less then 20 characters
                  </span>
                )}
              </div>
            </div>
            <div className="form-control mt-8">
              <button className="btn w-full py-3 px-2 font-semibold rounded-md text-lg bg-primary hover:bg-secondary text-white">
                Sign Up
              </button>
            </div>
            <div className="pt-4">
              <p className="">
                <span className="font-medium text-[16px]">
                  {" "}
                  Already have an account? Go to
                </span>
                <Link
                  to="/signin"
                  className=" text-red-600 underline pl-2 font-semibold text-lg"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
