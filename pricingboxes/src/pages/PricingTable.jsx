import React from 'react';
import './styles.scss';
import Box from '../components/PricingTable/Box';
import { data } from './data';


const PricingTable = () => {
    return (
        <div class="table">
            {data.boxes.map(box => {
        return <Box level={box.level} featureList={box.featureList} buttonText={box.buttonText} />
    })}
        </div>)
}

export default PricingTable;

