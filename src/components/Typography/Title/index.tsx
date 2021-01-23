import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface TitleProps extends PropsWithChildren<any>{
    variation?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const StyledH1 = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-size: 2rem;
    line-height: 3rem;
`;

//TODO implement other styles for title
const Title: FC<TitleProps> = ({variation = 'h1', children}) => {
    switch(variation) {
        default:
        case 'h1': 
        return <StyledH1>{children}</StyledH1>;
    }
}

export default Title;
