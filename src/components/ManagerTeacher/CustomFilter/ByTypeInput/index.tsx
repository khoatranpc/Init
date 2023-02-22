import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';
import { IDoesFilterPassParams, IFilterParams } from 'ag-grid-community';
import { Input } from 'antd';

import './style.scss';

export default forwardRef((props: IFilterParams, ref) => {
    const [filterText, setFilterText] = useState<string | undefined>(undefined);

    useImperativeHandle(ref, () => {
        return {
            doesFilterPass(params: IDoesFilterPassParams) {
                const { api, colDef, column, columnApi, context } = props;
                const { node } = params;

                let passed = true;
                if (filterText) {
                    filterText
                        .toLowerCase()
                        .split(' ')
                        .forEach((filterWord) => {
                            const value = props.valueGetter({
                                api,
                                colDef,
                                column,
                                columnApi,
                                context,
                                data: node.data,
                                getValue: (field) => node.data[field],
                                node,
                            });

                            if (value.toString().toLowerCase().indexOf(filterWord) < 0) {
                                passed = false;
                            }
                        });
                }
                return passed;
            },

            isFilterActive() {
                return filterText != null && filterText !== '';
            },

            getModel() {
                if (!this.isFilterActive()) {
                    return null;
                }
                return { value: filterText };
            },

            setModel(model: any) {
                setFilterText(model == null ? null : model.value);
            },
        };
    });

    const onChange = (event: any) => {
        setFilterText(event.target.value);
    };

    useEffect(() => {
        props.filterChangedCallback();
    }, [filterText]);

    return (
        <div className="container-custom-filter">
            <Input placeholder="Gõ để tìm kiếm" onChange={onChange} />
        </div>
    );
});