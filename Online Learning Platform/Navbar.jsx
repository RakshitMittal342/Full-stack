function Navbar({ enrolledCount, user }) {
    return (
        <div>
            <h1>SKILLNEST - ONLINE LEARNING PLATFORM</h1>
            <h3>Welcome, {user.name}</h3>
            <p>
                Program: {user.program} | Enrolled: {enrolledCount} courses
            </p>
            <hr />
        </div>
    );
}

export default Navbar;
