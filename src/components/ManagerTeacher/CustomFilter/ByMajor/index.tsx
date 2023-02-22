import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';
import { IDoesFilterPassParams, IFilterParams } from 'ag-grid-community';
import { DANCE_MAJOR } from 'global/enum';
import './style.scss';

const listMajor = [
    {
        value: DANCE_MAJOR.ALL,
        label: 'Tất cả'
    },
    {
        value: DANCE_MAJOR.KPOP_DANCE,
        label: 'KPop dance'
    },
    {
        value: DANCE_MAJOR.SEXY_DANCE,
        label: 'Sexy dance'
    },
    {
        value: DANCE_MAJOR.SHUFFLE_DANCE,
        label: 'Shuffle dance'
    },
    {
        value: DANCE_MAJOR.ANTIES_QUES_DANCE,
        label: 'Múa CT'
    }
]
export default forwardRef((props: IFilterParams, ref) => {
    const [major, setMajor] = useState<DANCE_MAJOR>(DANCE_MAJOR.ALL);

    useImperativeHandle(ref, () => {
        return {
            // thực hiện lọc
            doesFilterPass(params: IDoesFilterPassParams) {
                if (major === DANCE_MAJOR.ALL) {
                    return true;
                }
                return params.data.major === major;
            },
            // cho phép thực hiện chức năng lọc khi thỏa mã điều kiện return
            isFilterActive() {
                return major === DANCE_MAJOR.KPOP_DANCE ||
                    major === DANCE_MAJOR.SEXY_DANCE ||
                    major === DANCE_MAJOR.SHUFFLE_DANCE ||
                    major === DANCE_MAJOR.ANTIES_QUES_DANCE;
            },
            getModel() { },

            setModel() { },
        };
    });

    const onMajorChange = (event: any) => {
        setMajor(event.target.value);
    };

    useEffect(() => {
        props.filterChangedCallback();
    }, [major]);

    return (
        <div className="filter">
            {
                listMajor.map((item) => {
                    return (
                        <label key={item.value}>
                            <input type="radio" name="major" value={item.value} onChange={onMajorChange} />
                            {item.label}
                        </label>
                    )
                })
            }
        </div >
    );
});