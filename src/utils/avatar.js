import React, { useState, useEffect } from 'react';

function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    return crypto.subtle.digest('SHA-256', msgBuffer).then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray
            .map(b => ('00' + b.toString(16)).slice(-2))
            .join('');
    });
}

const MatrixVisualizer = () => {
    const [input, setInput] = useState('');
    const [matrix, setMatrix] = useState(Array.from({ length: 5 }, () => Array(5).fill(0)));

    useEffect(() => {
        if (input.length > 0) {
            sha256(input).then(hash => {
                const newMatrix = Array.from({ length: 5 }, () => Array(5).fill(0));
                for (let i = 0; i < newMatrix.length; i++) {
                    for (let j = 0; j < newMatrix[i].length; j++) {
                        let n = parseInt(hash.substr(i * j + j, 1), 16);
                        newMatrix[i][j] = n > 7 ? 0 : 1;
                    }
                }

                // Make symmetric  
                for (let i = 0; i < newMatrix.length; i++) {
                    const mid = Math.round(newMatrix[i].length / 2);
                    for (let j = mid; j < newMatrix[i].length; j++) {
                        newMatrix[i][j] = newMatrix[i][j - 2];
                    }
                }

                setMatrix(newMatrix);
            });
        }
    }, [input]);

    const handleInputChange = event => {
        setInput(event.target.value);
    };

    const renderMatrix = () => {
        return matrix.map((row, i) => (
            <div key={i} className="matrix-row" style={{ display: 'flex' }}>
                {row.map((value, j) => (
                    <div key={j} style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: value === 1 ? `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1)` : 'transparent'
                    }} />
                ))}
            </div>
        ));
    };

    const randomColor = () => Math.floor(Math.random() * 128 + 128);

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <div style={{ display: 'block', marginTop: '20px' }}>
                {renderMatrix()}
            </div>
        </div>
    );
};

export default MatrixVisualizer;