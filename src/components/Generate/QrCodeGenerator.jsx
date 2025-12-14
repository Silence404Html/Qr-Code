import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

import { GENERATE_DATA } from '../../constants.js';

import s from './QrCodeGenerator.module.css';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('')
    const [result, setresult] = useState(false)

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        
        
                localStorage.setItem(
                    GENERATE_DATA, 
                    JSON.stringify ([...prevData, value])
                );

        setresult(value);
        setValue('')
     };

     const OnChangeHandler = (event) => {
        setValue(event.target.value)
        setresult('');
     };

     console.log('result:', result)

    return (
        <div className ={s.container}> 
        {result !== '' && (
                <div className={s.qrWrapper}>
                    <QRCodeSVG value={result} size={200} /> 
                </div>
            )}

             <input 
                type="text" 
                value={value}
                placeholder="Введите текст..."
                onChange={OnChangeHandler} 
                className={s.input}
             />
             <button type="button" className ={s.button} onClick={onClickHandler}>
                Сгенерировать QR
             </button>

        </div>
    );
};
