

function UserTag(pro) {
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