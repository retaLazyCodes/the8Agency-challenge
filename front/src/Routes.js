import App from "App";
import { Attendees } from "components/Attendees";

import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

export const AppRoutes = () => {
    return (
        <Router>

            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/attendees" element={<Attendees />} />
            </Routes>

        </Router>
    );
}