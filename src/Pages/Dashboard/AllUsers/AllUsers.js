import { useQuery } from "@tanstack/react-query";

const AllUsers = () =>{

    const {data: users=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className="text-3xl">All Users</h3>

            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-300 text-black uppercase">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr key={user._id} className="hover">
                <th>{i+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>blue</td>
                <td>Time</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
}

export default AllUsers;