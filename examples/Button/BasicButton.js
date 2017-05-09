import React from 'react';

import Button from 'src/Button';
import FlexRow from '../FlexRow';

function handleButtonClick() {
    // eslint-disable-next-line no-console
    console.log('Button clicked');
}

function BasicButtonExample() {
    return (
        <FlexRow>
            <Button
                basic="Blue Button"
                aside="Default color"
                tag="Tag"
                icon="add"
                onClick={handleButtonClick} />

            <Button
                color="red"
                basic="Red"
                aside="Variants"
                tag="Tag"
                icon="add" />

            <Button
                color="white"
                basic="White"
                aside="Variants"
                tag="Tag"
                icon="add" />

            <Button
                color="black"
                basic="Black"
                aside="Variants"
                tag="Tag"
                icon="add" />
        </FlexRow>
    );
}

export default BasicButtonExample;
