import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.scss';

export interface ItemCarousel {
    img?: React.ReactElement;
    title?: string;
    key: string;
    caption?: string;
    content?: string;
}
interface Props {
    children?: React.ReactElement;
    listItem: Array<ItemCarousel>;
}
function CarouselCustom(props: Props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='custom-carousel'>
            {props.listItem.map((item) => {
                return (
                    <Carousel.Item key={item.key}>
                        {item.img}
                        <Carousel.Caption>
                            <h3>{item.caption}</h3>
                            <p>{item.content}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
}
export default CarouselCustom;