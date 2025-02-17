import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const Signin = () => {
  const { singIn, singInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    singIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    });
  };

  const handleWithGoogle = () => {
    singInWithGoogle()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          role: "user",
        };
        axiosSecure.post("/users", userInfo).then((res) => {
          console.log(res);
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
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
          <h2 className="text-3xl font-jost font-medium pb-8 lg:pb-12 lg:leading-[1.1]">
            Welcome To <br />
            <span className="text-primary"> Kaylashae_Adventures</span>
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* google authentication */}
            <div className="pb-6">
              <button
                onClick={handleWithGoogle}
                className="btn w-full py-3  font-semibold  text-lg flex justify-center items-center gap-4 border-2 rounded-full text-black"
              >
                <span>
                  <FcGoogle className="text-2xl"></FcGoogle>
                </span>
                <span>Continue With Google</span>
              </button>
            </div>
            <h3 className="text-center"> OR </h3>
            <div className="form-control pt-2 lg:pt-5  pb-6 md:pb-8">
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
              <button className="btn w-full py-3 px-2 font-semibold rounded-md text-lg bg-primary hover:bg-primary  text-white">
                Sign In
              </button>
            </div>
            <div className="pt-4">
              <p className=" ">
                <span className="font-medium text-[16px]">
                  {" "}
                  Don't have an account ? Go to{" "}
                </span>
                <Link
                  to="/signup"
                  className=" text-red-600 underline pl-2 font-semibold text-lg"
                >
                  Create One
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
