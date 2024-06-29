import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [, forceRender] = useState(0);
    const parRef = useRef(0); // We can create a dom element reference or a value reference with useRef

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
        parRef.current += 1;

    };
    return (
        <div>
            <p>This component has rendered {parRef.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};