import React from "react";

import { KeyBoardComponent } from "./components/KeyBoardComponent";
import { DrawComponent } from "./components/DrawComponent";

export const  HangManComponent = () => {
    return (
        <div>
            <h1>HangMan</h1>
            <hr></hr>
            <DrawComponent />
            <KeyBoardComponent />
        </div>
    );
};