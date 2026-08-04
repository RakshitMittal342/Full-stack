import CourseCatalog from "./CourseCatalog";

function Dashboard({ user, enrolledCount, setEnrolledCount }) {
    return (
        <div>
            <CourseCatalog
                user={user}
                enrolledCount={enrolledCount}
                setEnrolledCount={setEnrolledCount}
            />
        </div>
    );
}

export default Dashboard;
