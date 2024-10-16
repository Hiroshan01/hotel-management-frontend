function UserTag(props){

    return(

        <div>
            <img src={props.imageLink}></img>
            <h1>{props.name}</h1>
        </div>
    )
}
export default UserTag;