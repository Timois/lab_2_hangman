import { useState } from "react";

export const useKeyBoard = () => {
    const generateKeyBoard = () => {
        let keys = [];
        for (let i = 0; i < 26; i++){
            let key = String.fromCharCode(i + 65);
            keys = [...keys, { key, state: false}];
        }
        return keys;
    };
    const [keyState, setkeyState] = useState(generateKeyBoard());
    
    return [keyState, setkeyState];
};