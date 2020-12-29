import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translatedText, setTranslatedText] = useState('')
    useEffect(() => {
        const translateText = async () => {
            const result = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            console.log(result.data.data.translations[0].translatedText)
            setTranslatedText(result.data.data.translations[0].translatedText)
        }
        translateText()
    }, [language, text])
    return (
        <div>Output:{translatedText}</div>
    )

}

export default Convert 