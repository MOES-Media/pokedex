import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: 'Roboto', sans-serif;
    margin-bottom: .5rem;
`;

export interface ParagraphProps extends PropsWithChildren<any> { }

const Paragraph: FC<ParagraphProps> = ({ children }) => <StyledParagraph>{children}</StyledParagraph>;

export default Paragraph;
