
function UserTag(pro) {
    
    console.log("hi")
    const token = localStorage.getItem("token");
    console.log(token)

    if (token != null) {
        console.log(token);
        console.log(import.meta.env.VITE_BACKEND_URL);
        
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/users/", {
            headers: {
                Authorization: "Bearer " + token, 
                "Content-Type": "application/json" ,
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.error("Error fetching data:", err);
        });
        
    }

    return (
        <div className="absolute right-0 flex 
     items-center">
            <img className="rounded-full w-[75px]"
                src={pro.imageLink}
                alt="Icon"
                
            />
            <span className="text-white ml-[5px] text-xl  
            cursor-pointer ml">{pro.name}</span>
        </div>
    );
}

export default UserTag;