import React, { Component, DOMElement, FunctionComponent, MutableRefObject, useEffect, useRef } from 'react';
import styled, { css, StyledInterface } from 'styled-components';

export interface Scale {
    begin: number,
    step: number,
    end: number
}

export interface GenericGraphProps {
    title: string,
    yLabel: string,
    xLabel: string,
    className?: string,
    id?: string
}

export type BasicGraphType =
    FunctionComponent<GenericGraphProps>

const GraphLayout = styled.div`
  display: grid;
  grid-template: 'title title' auto 
                 'yLabel content' 90%
                 'axis xLabel' auto / auto 90%;
`;

export interface GridAreaProps {
    area: 'title' | 'yLabel' | 'axis' | 'xLabel' | 'content'
}
const GridArea = styled.div`
    grid-area: ${(props: GridAreaProps) => props.area};
`;

const titleStyle = css`
  text-align: center;
`;
const TitleArea = styled(GridArea)`
  ${titleStyle}
`;

const BasicGraph: BasicGraphType = props =>
    <GraphLayout className={props.className}>
        <TitleArea area='title'>
            {props.title}
        </TitleArea>
        <GridArea area='yLabel'>
            {props.yLabel}
        </GridArea>
        <GridArea area='xLabel'>
            {props.xLabel}
        </GridArea>
        <GridArea area='content'>
            {props.children}
        </GridArea>
        <GridArea area='axis'>
            { /* Not useful for now */}
        </GridArea>
    </GraphLayout>;

export default BasicGraph;