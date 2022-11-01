import { schoolList, user } from "../prepareDemo1.model";

function Profile() {
  return (
    <div>
      Profile:
      <div>name: {user.value?.name}</div>
      <div>token: {user.value?.token}</div>
      School:
      {schoolList.value.map((school) => {
        return (
          <div>
            <div>id:{school.id}</div>
            <div>name:{school.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
