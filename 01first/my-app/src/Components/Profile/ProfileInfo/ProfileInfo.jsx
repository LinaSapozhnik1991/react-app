import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div className={s.top}>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlM_fvpkoJzxG-oARgGe6Vb0fv3MCw-_pbO-_zvCyULUiXxrU02PjVJvB0X686fnJUIQ&usqp=CAUs'/>
</div>
<div class ={s.ava_description}>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbG8fTqB-RluMrnjxxkJoFKE3v7fkpPemNg&usqp=CAU'/>
  
</div>
        </div>
    );
};

export default ProfileInfo;