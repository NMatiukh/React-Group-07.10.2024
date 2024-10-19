import User from "./User";

const UserList = ({list}) => {
    return (
        <ul>
            { list.map((user) =>  <User name={user} />) }
        </ul>
        
    )      
}

export default UserList;