import { useState, useEffect } from 'react';
import Card from './Card';

// 1. Define the "shape" of a User object
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function UserList() {
  // 2. Tell useState it will hold an array of Users (User[])
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err: any) { // 3. Define the type for the error
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center">Loading users...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">User Directory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user: User) => ( // 4. We can even type 'user' here
          <div key={user.id} className="p-4 border rounded shadow">
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-sm text-gray-600">@{user.username}</p>
            <p className="text-sm text-blue-500">{user.email}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default UserList;