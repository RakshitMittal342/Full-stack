import CourseList from "./CourseList";

function CourseCatalog({ user, enrolledCount, setEnrolledCount }) {
    return (
        <div>
            <h2>COURSE CATALOG</h2>

            <CourseList
                user={user}
                enrolledCount={enrolledCount}
                setEnrolledCount={setEnrolledCount}
            />
        </div>
    );
}

export default CourseCatalog;
