import React from 'react';
import './../styles/styles.scss';
import Box from '../components/Box/Box';
import { data } from '../utils/data';


const PricingTable = () => {
    return (
        <div class="table">
            {data.boxes.map(box => {
        return <Box level={box.level} featureList={box.featureList} buttonText={box.buttonText} />
    })}
        </div>)
}

export default PricingTable;

