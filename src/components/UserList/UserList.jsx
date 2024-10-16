import "./UserList.css";

const User = function () {
  return (
    <ul className="User">
      <li>Name: Pavlo</li>
      <li>Gender: Male</li>
      <li>Age: 32</li>
    </ul>
  );
};

const UserList = function () {
  return (
    <section className="UserList">
      <h2>Users List</h2>
      <User />
    </section>
  );
};

export default UserList;
