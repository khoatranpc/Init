import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Obj } from 'global/interface';
import { State } from 'redux-saga/reducer';
import { formatPhoneNumber } from 'utils';
import { queryDataCompany } from './action';
import { ReactComponent as FacebookIcon } from 'assets/svgs/icon-facebook.svg';
import { ReactComponent as YoutubeIcon } from 'assets/svgs/icon-youtube.svg';
import './style.scss';

const Footer = () => {
    const dispatch = useDispatch();
    const dataCompany = useSelector((state: State) => state.dataCompany);
    const company = ((dataCompany?.response as Obj)?.data as Array<{}>)?.[0] as Obj || [];
    const isQuery = useRef(true);
    useEffect(() => {
        if (!dataCompany && isQuery.current) {
            dispatch(queryDataCompany({}))
            isQuery.current = false;
        }
    }, [dataCompany, dispatch])

    return (
        <>
            {dataCompany?.success && (company && company.length !== 0) ?
                <div className="footer-page" id="contact">
                    <div className="left">
                        <h3 className="company-name">{company.companyName as string}</h3>
                        <div className="address">
                            {(company.addresses as Array<string>).map((item, idx) => {
                                return (<div key={idx}><strong>{item.split(':')[0]}</strong>:{item.split(':')[1]}</div>)
                            }
                            )}
                        </div>
                    </div>
                    <div className="middle">
                        <h3>Liên hệ:</h3>
                        <div className="item">Email: {company.contacts.email as string}</div>
                        <div className="item">SĐT: {formatPhoneNumber(company.contacts.phone as string)}</div>
                    </div>
                    <div className="right">
                        <h3>Mạng xã hội:</h3>
                        <div className="link">
                            <div className="item"><a href={company.socialNetwork.facebook as string} rel="noreferrer" target="_blank"><FacebookIcon /></a></div>
                            <div className="item"><a href={company.socialNetwork.youtube as string} rel="noreferrer" target="_blank"><YoutubeIcon /></a></div>
                        </div>
                    </div>
                </div> :
                <div className="footer-page" style={{ justifyContent: 'center' }}>Hiện chưa có dữ liệu, chúng tôi sẽ cập nhật lại sớm!</div>
            }
        </>
    )
}
export default Footer;