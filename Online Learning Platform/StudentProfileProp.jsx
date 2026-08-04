function StudentProfileProp({ user }) {
    return (
        <div>
            <h3>Student Details (Prop Drilling)</h3>

            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Program: {user.program}</p>
        </div>
    );
}

export default StudentProfileProp;
