import React, { useContext } from 'react';
import { css } from 'emotion';
import { MyContext } from '../../../context';

const container = css`
    padding: 10px 12px;
    border: 1px solid red;
    color: var(--myColor);

    &:hover {
        color: yellow;
    }
`;

interface MyProps {
    text?: string;
    color?: string;
}

export const ChildComponent = (props: MyProps) => {
    const value = useContext(MyContext);

    console.log(value);

    return <div className={container}>{props.text}</div>;
};
