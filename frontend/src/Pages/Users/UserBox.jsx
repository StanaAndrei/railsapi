import React from 'react';
import Button from 'react-bootstrap/Button';
import { axiosAuthInstanceToAPI } from '../../utils/APIUtils';

function UserBox({ user, canDelete }) {

    const deleteUser = () => {
        axiosAuthInstanceToAPI.delete(`/users/${user.id}`).then(res => {
            if (res.status === 200) {
                alert('user deleted!');
                window.location.reload();
            }
        }, err => {
            alert('error!');
            console.error(err);
        })
    }

    return (
        <div>
            <hr />
            <h6>{user.username}</h6>
            {
                canDelete && 
                <Button onClick={deleteUser} variant="danger">delete</Button>
            }
            <hr />
        </div>
    );
}

export default UserBox;