import React from 'react';
import { css } from 'emotion';

import { ChildComponent } from './ChildComponent';

const containerStyle = css`
    height: 100px;
    border: 2px solid black;
`;

export const Lesson2 = (props: any) => {
    return (
        <div className={containerStyle}>
            <ChildComponent color={props.color} text="Hi there" />
        </div>
    );
};
