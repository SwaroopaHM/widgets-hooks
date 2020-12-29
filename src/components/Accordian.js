import React, { useState } from 'react';

const Accordian = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null)
    const onTitleClick = (index) => {
        setActiveIndex(index)
    }
    const renderAccordion = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''
        return (
            <div key={index}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className='dropdown icon' />
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    })

    return (
        <div className='ui styled accordion'>
            {renderAccordion}
        </div>
    )
}

export default Accordian