import React, { useState } from 'react';

const Box = ({ level, buttonText, featureList}) => {
    const [featuresDisplayed, setFeaturesDisplayed] = useState(8);
    const [isExpanded, setIsExpanded] = useState(false);

    const isExpandableBox = featureList.length > 8;
    const trimmedFeatures = isExpanded ? featureList : featureList.filter((feature, index) => index < featuresDisplayed);

    const handleExpandableClick = () => {
        if (isExpanded) {
            setIsExpanded(false);
            setFeaturesDisplayed(8);
        } else {
            setIsExpanded(true);
            setFeaturesDisplayed(featureList.length);
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
        </div>)
}

export default Box;