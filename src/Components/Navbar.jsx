import "../Navbar.css";
function Navbar(){
    return(
        <div className="navbar">
            <h2>Restaurant Dashboard</h2>
            <div className="profile">
                <input
                type="text"
                placeholder="Search..."
                />
                <img
                src="https://i.pravatar.cc/50"
                alt=""
                />
            </div>
        </div>
    )

}

export default Navbar;