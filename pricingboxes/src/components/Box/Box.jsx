import React, { useState } from 'react';
import {maximumInitialFeatures} from '../../utils/data' ;

const Box = ({ level, buttonText, featureList }) => {
    const [maxFeaturesDisplayed, setMaxFeaturesDisplayed] = useState(maximumInitialFeatures);
    const [isExpanded, setIsExpanded] = useState(false);

    const isExpandableBox = featureList.length > maximumInitialFeatures;
    const trimmedFeatures = isExpanded ? featureList : featureList.filter((feature, index) => index < maxFeaturesDisplayed);

    const handleExpandableClick = () => {
        if (isExpanded) {
            setIsExpanded(false);
            setMaxFeaturesDisplayed(maximumInitialFeatures);
        } else {
            setIsExpanded(true);
            setMaxFeaturesDisplayed(featureList.length);
        }
    };

    return (
        <div class="box">
            <div class="box-options">
                <p class="box-level"> {level} </p>
                <ul class="box-features">
                    {trimmedFeatures.map(feature => <li> {feature} </li>)}
                </ul>
                {isExpandableBox && <div class="box-expansion" onClick={handleExpandableClick}> {isExpanded ? 'See less...' : 'See more...'} </div>}
                <button class="button"> {buttonText}</button>
            </div>
        </div>
    )
}

export default Box;