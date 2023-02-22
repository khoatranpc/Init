import React, { useState } from 'react';
import DetailTeacher from './DetailTeacher';
import { data } from './hardData';
import './style.scss';

const Teacher = () => {
    const [crrIdTeacher, setCrrIdTeacher] = useState<string>('');

    return (
        <div className="container-teacher-introduction">
            <h1 className="title">Giáo viên</h1>
            {!crrIdTeacher ? <div className="container-thumbnail-teacher">
                {data.map((item) => {
                    return (
                        <div className="item-teacher-thumbnail item" key={item._id as string}>
                            <div className="round-item" onClick={() => { setCrrIdTeacher(item._id) }}>
                                <img src={item.avatar} alt="" className="thumbnail-img" />
                                <h4 className="teacher-name">{item.userName}</h4>
                            </div>
                        </div>
                    )
                })}
            </div> :
                <DetailTeacher idTeacher={crrIdTeacher} back={() => { setCrrIdTeacher('') }} />
            }
        </div>
    )
}

export default Teacher;