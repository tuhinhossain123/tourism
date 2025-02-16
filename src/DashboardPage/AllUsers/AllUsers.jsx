"use client";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { LuPenLine } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import defultUser from "../../assets/images/profile-circle-icon.png";
import Swal from "sweetalert2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  console.log(user);

  // States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6);

  // Fetching paginated users
  const {
    refetch,
    data: usersData = {},
    isLoading,
  } = useQuery({
    queryKey: ["users", currentPage, limit],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users?page=${currentPage}&limit=${limit}`
      );
      return res.data;
    },
  });

  //   admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now`,
          showCancelButton: false,
          timer: 1500,
        });
      }
    });
  };
  // Destructure the data from the response
  const { users = [], totalPages, totalUsers } = usersData;

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      refetch();
    }
  };

  return (
    <div className="w-full lg:w-[90%] mx-auto">
      <h2 className="text-xl lg:text-3xl text-[#47545F]  font-jost font-medium pb-3 lg:pb-6">
        Total Users: {totalUsers}
      </h2>
      {isLoading ? (
        <div className="flex justify-center my-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table border">
              <thead>
                <tr className="bg-primary text-white text-xl font-normal">
                  <th>No</th>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr key={user._id}>
                    <th>{(currentPage - 1) * limit + (index + 1)}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            className="w-16 md:w-16 rounded-full object-cover"
                            src={user?.photoURL ? user?.photoURL : defultUser}
                            alt={user?.photoURL || "Default User Image"}
                          />
                        </div>
                      </div>
                    </td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td className="">
                      {user?.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button onClick={() => handleMakeAdmin(user)}>
                          <LuPenLine className="text-xl text-green-400"></LuPenLine>
                        </button>
                      )}
                    </td>
                    <td>
                      <div className="">
                        <button onClick={() => handleDelete(user)}>
                          <FaRegTrashAlt className="text-xl text-red-600"></FaRegTrashAlt>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center  items-center gap-6 lg:gap-10 mt-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`btn bg-gray-100 ${
                currentPage === 1
                  ? "btn-disabled"
                  : "bg-primary hover:bg-primary text-white"
              }`}
              disabled={currentPage === 1}
            >
              <FaChevronLeft className="text-xl lg:text-2xl text-white  font-normal"></FaChevronLeft>
            </button>
            <span className="text-[#47545F] font-jost font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`btn ${
                currentPage === totalPages
                  ? "btn-disabled"
                  : "bg-primary hover:bg-primary text-white"
              }`}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight className="text-xl lg:text-2xl text-white font-normal "></FaChevronRight>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AllUsers;
