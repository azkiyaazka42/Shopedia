import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";

function Profile() {
  const token = localStorage.getItem("access_token");
  const [dataUser, setDataUser] = useState([]);

  const getdataUser = () => {
    axios
      .get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setDataUser(res?.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getdataUser();
  }, []);

  console.log(dataUser);

  return (
    <div>
      <div className="fixed z-10 w-full">
        <Header />
      </div>

      <div className="flex gap-10 justify-center py-[100px] px-[100px]">
        {/* right side */}
        <div className="">
          <img
            src={dataUser?.image}
            className="w-[300px] border border-gray-200 shadow-lg/10 rounded-xl p-8"
          />
        </div>

        {/* left side */}
        <div className="grid gap-10">
          {/* Biodata */}
          <div className="grid gap-8 border border-gray-200 shadow-lg/10 p-8 rounded-xl">
            <p className="font-bold text-green-600">Personal Information</p>

            <div className="flex gap-16">
              <div className="text-gray-500 grid gap-2">
                <p>Name</p>
                <p>Date Of Birth</p>
                <p>Gender</p>
                <p>Address</p>
              </div>

              <div className="grid gap-2">
                <p>{dataUser?.firstName + " " + dataUser.lastName}</p>
                <p>{dataUser?.birthDate}</p>
                <p>{dataUser?.gender}</p>
                <p>{`${dataUser?.address?.address}, ${dataUser?.address?.city}, ${dataUser?.address?.country}, ${dataUser?.address?.postalCode}`}</p>
              </div>
            </div>
          </div>

          {/* Kontak */}
          <div className="grid gap-8 border border-gray-200 shadow-lg/10 p-8 rounded-xl">
            <p className="font-bold text-green-600">Contact</p>

            <div className="flex gap-16">
              <div className="text-gray-500 grid gap-2">
                <p>Email</p>
                <p>Phone Number</p>
              </div>

              <div className="grid gap-2">
                <p>{dataUser.email}</p>
                <p>{dataUser.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
