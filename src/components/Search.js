import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [results, setData] = useState([])
    useEffect(() => {
        const search = async () => {
            const results = await axios.get('https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                }
            )
            setData(results.data.query.search)
        }
        if (term) {
            search();
        }
    }, [term])

    const renderResults = results.map((result, index) => {
        return (
            <div key={index} className='item'>
                <div className='content'>
                    <div className='flow content right'>
                        <a className='ui button' href={`https://wikipedia.org/curid=${result.pageid}`}>Go</a>
                    </div>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
                </div>
            </div>
        )
    })

    return (
        <div className='ui form'>
            <div className='field'>
                <label>Enter the search term</label>
                <input className='input' onChange={(e) => setTerm(e.target.value)} />
                {renderResults}
            </div>
        </div>
    )
}

export default Search