import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';
import { State } from 'redux-saga/reducer';
import { Content } from '../../global/interface';
import './style.scss';

interface Props {
    listContent: Array<Content>;
    iconLeft?: React.ReactElement;
}

export const TabContent = (props: Props) => {
    const [crrComponent, setCrrComponent] = useState<string>(props.listContent[0].key);
    const crrUser = useSelector((state: State) => state.userLogin);
    return (
        <div className="container-list-tab">
            <Tabs
                defaultActiveKey={(props.listContent as Array<Content>)[0].key as string || ''}
                id="tab-content"
                className="custom-tab-content"
                onSelect={(key) => {
                    const navActived = props.listContent.find((item) => item.key === key)
                    if (navActived) {
                        if (navActived.customClick) {
                            navActived.customClick()
                        }
                        setCrrComponent(key as string);
                    }
                }}
            >
                {props.listContent.map((item) => {
                    if (item.isAuth && !crrUser) return;
                    return (
                        <Tab eventKey={item.key} title={item.title} key={item.key} >
                            {crrComponent === item.key && item.component}
                        </Tab>
                    )
                })}
            </Tabs>
        </div>
    )
}
