import React, { Suspense } from 'react'
import Loading from './Loading';

interface Props {
    children?: React.ReactElement;
}
const LazyImport = (props: Props) => {
    return (
        <Suspense fallback={<Loading />}>
            {props.children}
        </Suspense>
    )
}
export default LazyImport;