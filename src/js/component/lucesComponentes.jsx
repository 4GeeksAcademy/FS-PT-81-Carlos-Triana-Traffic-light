import React, { useState } from "react";

export const LucesComponentes = () => {
    const [color, setColor] = useState('');
    const colors = ['red', 'yellow', 'green'];
    const currentIndex = colors.indexOf(color);

    
    const nextColor = () => {
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    }

    return (
        <>
            
            <button
                onClick={nextColor}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#333',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}
            >
                Clikc aquí para cambiar luz del semáforo
            </button>
            <h3>Haga click para seleccionar la luz: {color}</h3>
            <div className="semáforo d-inline-flex flex-column bg-dark p-3 mt-5 rounded">
                <button
                    onClick={() => setColor('red')}
                    style={{
                        backgroundColor: color === 'red' ? '#ff6666' : 'red',
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        border: 'none',
                        color: 'white',
                        marginBottom: '10px',
                        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                        boxShadow: color === 'red' ? '0 0 20px 10px rgba(255, 0, 0, 0.7)' : 'none'
                    }}>
                </button>
                <button
                    onClick={() => setColor('yellow')}
                    style={{
                        backgroundColor: color === 'yellow' ? '#ffff99' : 'yellow',
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        border: 'none',
                        color: 'black',
                        marginBottom: '10px',
                        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                        boxShadow: color === 'yellow' ? '0 0 20px 10px rgba(255, 255, 0, 0.7)' : 'none'
                    }}>
                </button>
                <button
                    onClick={() => setColor('green')}
                    style={{
                        backgroundColor: color === 'green' ? '#66ff66' : 'green',
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        border: 'none',
                        color: 'white',
                        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                        boxShadow: color === 'green' ? '0 0 20px 10px rgba(0, 255, 0, 0.7)' : 'none'
                    }}>
                </button>
            </div>
        </>
    );
}


