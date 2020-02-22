import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Rect from './svg/Rect';
import BasicGraph, { GenericGraphProps, Scale } from './BasicGraph';

export interface Styling {
    color?: string,
    colors?: string,
    width?: number,
    spacing?: number,
    horizontalLines?: boolean,
    gap?: number
}

export interface BarGraphProps {
    scale: Scale,
    values: number[],
    styling?: Styling
}

export type BarGraphType = FunctionComponent<BarGraphProps & GenericGraphProps>

export type BarGraphContentType = FunctionComponent<BarGraphProps>

export const StyledBarGraphContent = styled.div`
  width: 100%;
  height: 100%;
  background: lightcoral;
  
  display: flex;
  flex-direction: column;
  justify-content: end;
  
  & > div {
    display: flex;
    justify-content: space-between;
    padding: 0 3%;
    transform: scale(1, -1);
  }
`;

// Refactor this with pixels
export const calcBarWidth: (values: number[], gap?: number) => number =
    (values, gap) =>
        (100 - ((gap !== undefined ? gap : 0) * values.length)) / values.length;

export const BarGraphContent: BarGraphContentType = props =>
    <StyledBarGraphContent>
        <div>
            { props.values.map(((value, index) =>
                <Rect key={ index }
                      height={ Math.random() * 100 }
                      width={ calcBarWidth(props.values, props.styling?.gap) }
                      styling={{
                          widthUnit: '%',
                          heightUnit: 'px'
                      }}
                />)) }
        </div>
    </StyledBarGraphContent>;

const BarGraph: BarGraphType = props => {
    const hasOptions = props.styling !== undefined;

    return <BasicGraph className={ props.className }
                       title={ props.title }
                       yLabel={ 'Y Label' }
                       xLabel={ 'X Label' } >
        <BarGraphContent scale={ props.scale }
                         values={ props.values }
                         styling={ props.styling }/>
    </BasicGraph>;
};

export default BarGraph;