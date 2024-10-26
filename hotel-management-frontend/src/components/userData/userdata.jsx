import { useEffect } from "react";
import axios from "axios";

function UserTag(props) {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token != null) {
      console.log(token);
      axios.get(import.meta.env.VITE_BACKEND_URL + "api/users/", {
          headers: {
            Authorization: "Bearer " + token, // Added space after "Bearer"
            "Content-Type": "application/json"
          }
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }
  }, [token]); // Only runs when the token changes

  return (
    <div className="absolute right-0 flex items-center cursor-pointer mr-2">
      <img
        className="rounded-full w-[75px] h-[75px]"
        src={props.imageLink}
        alt={props.name} // Added alt attribute for accessibility
      />
      <span className="text-white ml-[5px] text-xl">{props.name}</span>
    </div>
  );
}

export default UserTag;
