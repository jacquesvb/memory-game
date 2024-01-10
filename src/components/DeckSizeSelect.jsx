/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Slider } from '@mui/material';

const generateMarks = (numberOfCards) => {
    let marks = [];
    for (let i = 2; i <= (numberOfCards); i = i + 2) {
        marks.push({ value: i, label: i.toString() });
    }
    return marks;
}

export default function DeckSizeSelect({ handleChange, deck }) {
    const [marks, setMarks] = useState([]);
    const max = deck();

    useEffect(() => {
        setMarks(generateMarks(deck()));
    },[]);

    return (
        <div style={{ width: 600 }}>
            <Slider
                defaultValue={2}
                aria-labelledby='discrete-slider-restrict'
                step={2}
                min={2}
                max={max + 2}
                valueLabelDisplay='off'
                marks={marks}
                onChange={handleChange} 
            />
        </div>
    );
}
