import React, { lazy, useState } from 'react';
import { Switch } from 'antd';
import LazyImport from 'elements/LazyImport';
import './style.scss';

interface Props {
    children?: React.ReactElement;
    idTeacher?: string;
}
enum CONTENT {
    LIST = 'LIST',
    SCHEDULE = 'SCHEDULE'
}
const List = lazy(() => import('./List'));

const contentComponent: Record<CONTENT, React.ReactElement> = {
    LIST: <LazyImport><List /></LazyImport>,
    SCHEDULE: <>lịch</>
}

const ManagerClass = (props: Props) => {
    const [crrContent, setCrrContent] = useState<CONTENT>(CONTENT.LIST);
    const onChange = (checked: boolean) => {
        if (checked) {
            setCrrContent(CONTENT.LIST)
        } else {
            setCrrContent(CONTENT.SCHEDULE)
        }
    };

    return (
        <div className="container-manager-class">
            <div className="top-switch">
                <Switch checkedChildren="Danh sách" unCheckedChildren="Lịch" defaultChecked onChange={onChange} />
            </div>
            <div className="container-content-layout">
                {contentComponent[crrContent]}
            </div>
        </div>
    )
}

export default ManagerClass;