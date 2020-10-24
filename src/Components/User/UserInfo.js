import React from 'react';

const UserInfo = ({ user }) => {
    const { name, email, website } = user;
    return (
        <div className='userInfo'>
            <h3>{name}</h3>
            <p>{email}</p>
            <a href={website}>{website}</a>
        </div>
    );
};

export default UserInfo;