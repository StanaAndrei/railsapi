import React from 'react';
import Button from 'react-bootstrap/Button';
import UserAPI from '../../api/UserAPI';

function UserBox({ user, haveRights }) {

    const deleteUser = event => {
        event.preventDefault();
        UserAPI.delete(user.id).then(() => {
            window.location.reload();
        }).catch(() => alert('error!'));
    }

    return (
        <div>
            <hr />
            <h6><a href={`/profile/${user.id}`}>{user.username}</a></h6>
            {
                haveRights &&
                <span>
                    <Button onClick={() => window.location.assign(`/settings/${user.id}`)} variant="primary">edit</Button> <br />
                    <Button onClick={deleteUser} variant="danger">delete</Button>
                </span>
            }
            <hr />
        </div>
    );
}

export default UserBox;