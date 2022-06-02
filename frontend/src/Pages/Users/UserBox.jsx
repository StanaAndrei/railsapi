import React from 'react';
import Button from 'react-bootstrap/Button';
import UserAPI from '../../api/UserAPI';

function UserBox({ user, canDelete }) {

    const deleteUser = event => {
        event.preventDefault();
        UserAPI.delete(user.id);
    }

    return (
        <div>
            <hr />
            <h6><a href={`/profile/${user.id}`}>{user.username}</a></h6>
            {
                canDelete && 
                <Button onClick={deleteUser} variant="danger">delete</Button>
            }
            <hr />
        </div>
    );
}

export default UserBox;