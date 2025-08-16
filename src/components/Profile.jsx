import { updateEmail } from "firebase/auth";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import {auth} from '../firebase/firebaseConfig'
function Profile({ user }) {
  const [Email, setEmail] = useState("");
  const changeEmail = () => {
    updateEmail(auth.currentUser, Email)
      .then(() => {
        toast.success("Muvaffaqiyatli o'zgartirildi🎉");
        window.location.reload()
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Xatolik😒");
      });
  };
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center  ">
      <img src={user?.photoURL} alt="" className="w-[20%] rounded-full" />
      <h1>Ism : {user?.displayName}</h1>
      <div className="flex items-center gap-2">
        <h1>Email : {user?.email}</h1>
        <button
          className="btn btn-ghost  my-3"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Change Email
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <div className="flex gap-2">
              <input
                type="email"
                className="w-[380px] h-10 rounded-sm bg-gray-400 border-1px text-gray-800 pb-[6px]"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-success " onClick={changeEmail}>
                Change
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}

export default Profile;
