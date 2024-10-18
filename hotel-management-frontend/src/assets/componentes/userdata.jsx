function UserTag(pro) {
    return (
        <header>
            <img
                src={pro.imageLink}
                alt="Icon"
                style={{ width: '100px', height: 'auto', border: '2px solid black' }}
            />
            <h1>{pro.name}</h1>
        </header>
    );
}

export default UserTag;
