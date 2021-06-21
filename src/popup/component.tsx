import React, { FunctionComponent } from "react";
import "./styles.scss";
// import { Hello } from "@src/components/hello";
// import { Scroller } from "@src/components/scroller";

// // // //

export const Popup: FunctionComponent = () => {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        window.chrome.runtime.sendMessage({ popupMounted: true });
    }, []);

    // Renders the component tree
    return (
        <div className="popup-container">
            <div className="container mx-4 my-4">
                {/*<Hello />*/}
                {/*<hr />*/}
                {/*<Scroller />*/}
            </div>
        </div>
    );
};
