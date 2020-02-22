import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import {
    DEFAULT_GRAPH_CONTENT_HEIGHT,
    DEFAULT_GRAPH_CONTENT_WIDTH,
    DEFAULT_UNIT,
    Unit
} from '../env';

export interface Scale {
    begin: number;
    step: number;
    end: number;
}

export interface GraphContentDimensions {
    width: number;
    height: number;
    unit?: Unit;
    widthUnit?: Unit;
    heightUnit?: Unit;
}

export interface GenericGraphStyling {
    contentDimensions?: GraphContentDimensions;
}

export interface GenericGraphProps {
    title: string;
    yLabel: string;
    xLabel: string;
    className?: string;
    id?: string;
    styling?: GenericGraphStyling;
}

export type BasicGraphType = FunctionComponent<GenericGraphProps>;

export const defaultGridLayout = `'title title' auto
           'yLabel content' ${DEFAULT_GRAPH_CONTENT_HEIGHT}
           'axis xLabel' auto /
           auto ${DEFAULT_GRAPH_CONTENT_WIDTH}`;

export const getComputedGridLayout: // All in respect to content dimensions
(width: number, height: number, widthUnit: Unit, heightUnit: Unit) => string = (
    width,
    height,
    widthUnit,
    heightUnit
) => `'title title' auto
      'yLabel content' ${height}${heightUnit}
      'axis xLabel' auto /
      auto ${width}${widthUnit}`;

// Duplicate semi-colon, but that's probably ok
const calcGridLayout = (contentDimensions?: GraphContentDimensions) => css`
    grid-template: ${() => {
        if (contentDimensions === undefined)
            // Default layout
            return defaultGridLayout;
        else {
            let widthUnit = DEFAULT_UNIT,
                heightUnit = DEFAULT_UNIT;
            if (contentDimensions.unit !== undefined) {
                widthUnit =
                    contentDimensions.widthUnit !== undefined
                        ? contentDimensions.widthUnit
                        : contentDimensions.unit;
                heightUnit =
                    contentDimensions.heightUnit !== undefined
                        ? contentDimensions.heightUnit
                        : contentDimensions.unit;
            }

            return getComputedGridLayout(
                contentDimensions.width,
                contentDimensions.height,
                widthUnit,
                heightUnit
            );
        }
    }};
`;

const GraphLayout = styled.div`
    width: 400px; // default sizes
    height: 300px; // default sizes
    display: grid;
    min-height: 0;
    min-width: 0;
    ${(props: GenericGraphStyling) => calcGridLayout(props.contentDimensions)};
`;

export interface GridAreaProps {
    area: 'title' | 'yLabel' | 'axis' | 'xLabel' | 'content';
}
const GridArea = styled.div`
    grid-area: ${(props: GridAreaProps) => props.area};
    overflow: hidden;
    min-width: 0;
`;

const titleStyle = css`
    text-align: center;
`;
const TitleArea = styled(GridArea)`
    ${titleStyle}
`;

const yAxisStyle = css`
    transform: rotate(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > span {
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
`;
const YAxisArea = styled(GridArea)`
    ${yAxisStyle}
`;

const xAxisStyle = css`
    text-align: center;
`;
const XAxisArea = styled(GridArea)`
    ${xAxisStyle}
`;

const BasicGraph: BasicGraphType = props => (
    <GraphLayout
        className={props.className}
        contentDimensions={props.styling?.contentDimensions}
    >
        <TitleArea area="title">
            <span>{props.title}</span>
        </TitleArea>
        <YAxisArea area="yLabel">
            <span>{props.yLabel}</span>
        </YAxisArea>
        <XAxisArea area="xLabel">
            <span>{props.xLabel}</span>
        </XAxisArea>
        <GridArea area="content">{props.children}</GridArea>
        <GridArea area="axis">{/* Not useful for now */}</GridArea>
    </GraphLayout>
);

export default BasicGraph;
