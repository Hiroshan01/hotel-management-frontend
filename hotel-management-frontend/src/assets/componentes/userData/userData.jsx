import "./userData.css"

function UserTag(pro) {
    return (
        <div className="user-data-div testing">
            <img
                src={pro.imageLink}
                alt="Icon"
                
            />
            <span>{pro.name}</span>
        </div>
    );
}

export default UserTag;