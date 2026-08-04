import StudentProfileProp from "./StudentProfileProp";
import StudentProfileContext from "./StudentProfileContext";

function CourseList({
    user,
    enrolledCount,
    setEnrolledCount
}) {

    const courses = [
        {
            id: 1,
            name: "React Basics",
            price: 999
        },
        {
            id: 2,
            name: "Node.js Essentials",
            price: 1199
        },
        {
            id: 3,
            name: "UI/UX Design",
            price: 799
        }
    ];

    const enrollCourse = () => {
        setEnrolledCount(prev => prev + 1);
    };

    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <h4>{course.name}</h4>
                    <p>₹{course.price}</p>

                    <button onClick={enrollCourse}>
                        Enroll
                    </button>

                    <hr />
                </div>
            ))}

            {/* Requirement 1 */}
            <StudentProfileProp user={user} />

            <hr />

            {/* Requirement 2 & 3 */}
            <StudentProfileContext />
        </div>
    );
}

export default CourseList;
