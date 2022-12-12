import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
    return(
        <div>
{
props.users.map(u => <ul key={u.id}>
<li className={style.wrapper }>
    <div className={style.wrap_logo}>
        <img src={u.photo} alt='logo' />
        {u.followed
        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
        : <button onClick={() => {props.follow(u.id)}}>Follow</button>
        }
    </div>
    <div className={style.wrap_info}>
        <div className={style.wrap_name}>
            <p className={style.name}>{u.fullName}</p>
            <p className={style.status}>{u.status}</p>
        </div>
        <div className={style.wrap_adres}>
            <p>{u.location.country}</p>
            <p>{u.location.city}</p>
        </div>
    </div>
</li>




</ul>)
}

        </div>
    )
};

export default Users