import React, { useEffect } from 'react';

const Chatbox = () => {
    useEffect(() => {
        (function(w, d) {
            w.CollectId = "6728d17ef4bc76248fc52738";
            var h = d.head || d.getElementsByTagName("head")[0];
            var s = d.createElement("script");
            s.setAttribute("type", "text/javascript");
            s.async = true;
            s.setAttribute("src", "https://collectcdn.com/launcher.js");
            h.appendChild(s);
        })(window, document);
    }, []);

    return (
        <div>
            {/* Your chatbox component content */}
        </div>
    );
};

export default Chatbox;
