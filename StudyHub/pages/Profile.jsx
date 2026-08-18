import { useUser } from "../hooks/useUser";

function Profile() {
  const user = useUser();

  return (
    <div>
      <h2>Student Details</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Year: {user.year}</p>
    </div>
  );
}

export default Profile;
