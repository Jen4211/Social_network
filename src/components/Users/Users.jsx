import style from './Users.module.css';
import React from 'react';
import userPhoto from './../../assets/imges/cat.avif'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }
    return(
        <div>
                {pages.map(p => {return (<span key={p.id}  className={props.currentPage === p && style.openPage}
                            onClick={() => { props.onPageChanged(p) }}>{p}</span>)
                })}
                {
                    props.users.map(u => <ul key={u.id}>
                        <li className={style.wrapper}>
                            <div className={style.wrap_logo}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='logo' />
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                                }
                            </div>
                            <div className={style.wrap_info}>
                                <div className={style.wrap_name}>
                                    <p className={style.name}>{u.name}</p>
                                    <p className={style.status}>{u.status}</p>
                                </div>
                                <div className={style.wrap_adres}>
                                    <p>{"u.location.country"}</p>
                                    <p>{"u.location.city"}</p>
                                </div>
                            </div>
                        </li>
                    </ul>)
                }
            </div>
    )
}

export default Users;