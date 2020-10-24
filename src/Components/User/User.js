import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import SkeletonUser from '../Skeleton/SkeletonUser/SkeletonUser';

const User = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(res => res.json())
                .then(data => setUser(data))
        }, 6000);
    }, [])

    return (
        <div>
            <h2>User Details</h2>
            {
                user ?
                    <UserInfo user={user} /> :
                    <SkeletonUser />
            }
        </div>
    );
};

export default User;