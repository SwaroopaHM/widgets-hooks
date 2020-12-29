import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const Translate = () => {

    const [text, setText] = useState('')
    const options = [
        {
            label: 'Afrikaan',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        }
    ]
    const [selected, setSelected] = useState(options[0])

    return (
        <div className='ui form'>
            <div className='field'>
                <label className='label'>Enter a text</label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <Dropdown options={options} selected={selected} onSelected={setSelected} label='Select Language' />
            <Convert language={selected.value} text={text} />
        </div>
    )
}

export default Translate;