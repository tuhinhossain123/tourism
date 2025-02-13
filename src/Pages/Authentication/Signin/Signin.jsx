import { FcGoogle } from "react-icons/fc";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

const Signin = () => {
  //   const { singIn, singInWithGoogle } = useContext(AuthContext);

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  //   const onSubmit = (data) => {
  //     singIn(data.email, data.password).then((result) => {
  //       // const user = result.user;
  //       toast.success("User Logged In Successfully !!");
  //       router.push("/");
  //     });
  //   };

  //   const handleWithGoogle = () => {
  //     singInWithGoogle()
  //       .then((result) => {
  //         const userInfo = {
  //           email: result.user.email,
  //           name: result.user.displayName,
  //           photo: result.user.photoURL,
  //           roll: "user",
  //         };
  //         axiosSecure.post("/users", userInfo).then((res) => {
  //           toast.success("Logged In Successful with Google!");
  //           router.push("/");
  //         });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  return (
    <div>
      <div className="mt-48 lg:mt-56 max-w-[1680px] flex justify-center px-6 lg:px-8">
        <div className="w-full lg:w-[30%]">
          <h2 className="text-3xl font-semibold pb-12">
            Sign In to <span className="text-primary"> Tourism Site</span>
          </h2>
          <form>
            <div className="pb-8">
              <p className=" ">
                <span className="font-medium text-[16px]">
                  {" "}
                  Don't have an account ? Go to{" "}
                </span>
                <Link
                  to="/signup"
                  className=" text-red-600 underline pl-2 font-semibold text-lg"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="form-control  pb-6 md:pb-10">
              <h5 className="font-semibold text-black text-lg pb-3 md:pb-4">
                Email <span className="text-primary text-[1.5rem] pl-1">*</span>
              </h5>
              <input
                type="email"
                name="email"
                // {...register("email", { required: true })}
                className="input bg-gray-100 border-2   text-lg w-full p-3 focus:outline-none"
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
                  name="password"
                  //   {...register("password", {
                  //     required: true,
                  //     minLength: 6,
                  //     maxLength: 20,
                  //     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  //   })}
                  className="input bg-gray-100 border-2   text-lg w-full p-3 focus:outline-none"
                />
                {/* {errors.password?.type === "required" && (
                  <span className="text-primary font-medium">
                    password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-primary font-medium">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-primary font-medium">
                    Password must be less then 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-primary font-medium">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </span>
                )} */}
              </div>
            </div>
            <div className="form-control mt-8">
              <button className="btn w-full py-2 px-2 font-semibold rounded-md text-lg bg-primary hover:bg-secondary text-white">
                Sign In
              </button>
            </div>
            <div className="pt-6 md:pt-8">
              <button
                // onClick={handleWithGoogle}
                className="btn w-full py-2 px-2 flex justify-center items-center gap-3 font-semibold rounded-md  bg-black text-white"
              >
                <FcGoogle className="text-2xl"></FcGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
