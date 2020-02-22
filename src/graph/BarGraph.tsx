import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Rect from './svg/Rect';
import BasicGraph, { GenericGraphProps, Scale } from './BasicGraph';
import { Unit } from '../env';

export interface BarStyling {
    color?: string;
    colors?: string;
    width?: number;
    spacing?: number;
    horizontalLines?: boolean;
    gap?: number;
}

export interface BarGraphProps {
    scale: Scale;
    values: number[];
    barStyling?: BarStyling;
}

export type BarGraphType = FunctionComponent<BarGraphProps & GenericGraphProps>;

export type BarGraphContentType = FunctionComponent<BarGraphProps>;

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
        padding: 0 3% 5% 3%; // Fix this CSS, reflection below makes padding weird
        transform: scale(1, -1);
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }
`;

export const calcBarWidth: (values: number[], gap?: number) => number = (
    values,
    gap
) => (100 - (gap !== undefined ? gap : 0) * values.length) / values.length;

export const calcBarHeight: (value: number, scale: Scale) => number = (
    value,
    scale
) => ((value - scale.begin) * 100) / (scale.end - scale.begin);

export const BarGraphContent: BarGraphContentType = props => (
    <StyledBarGraphContent>
        <div>
            {props.values.map((value, index) => (
                <Rect
                    key={index}
                    height={calcBarHeight(value, props.scale)}
                    width={calcBarWidth(
                        props.values,
                        props.barStyling?.gap
                    )}
                    styling={{
                        unit: Unit.percent
                    }}
                />
            ))}
        </div>
    </StyledBarGraphContent>
);

const BarGraph: BarGraphType = props => (
    <BasicGraph
        className={props.className}
        title={props.title}
        styling={props.styling}
        yLabel={'Y Label'}
        xLabel={'X Label'}
    >
        <BarGraphContent
            scale={props.scale}
            values={props.values}
            barStyling={props.barStyling}
        />
    </BasicGraph>
);

export default BarGraph;
