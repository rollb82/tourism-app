import React from "react";
import PropTypes from 'prop-types';

import { setContent } from "./utils";

const TipsAndHours = (props) => {
    const {tips} = props;
    return(
        <div className="app-tips">
            <h4>Tips &amp; Hours</h4>
            <div dangerouslySetInnerHTML={setContent(tips)} />
        </div>
    );
}

export default TipsAndHours;

TipsAndHours.propTypes = {
    tips: PropTypes.string.isRequired
}