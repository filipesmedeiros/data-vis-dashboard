import React, { FunctionComponent } from 'react';
import { DEFAULT_BORDER_WIDTH, DEFAULT_COLOR, DEFAULT_FILL, DEFAULT_UNIT, NONE, Unit } from '../../env';

export interface Styling {
    color?: string,
    fill?: boolean,
    borderWidth?: number,
    borderColor?: string,
    unit?: Unit,
    widthUnit?: Unit,
    heightUnit?: Unit
}

export interface RectProps {
    width: number,
    height: number,
    styling?: Styling,
    className?: string,
    id?: string
}

// I don't want to repeat but don't know how
// This avoids having to elvis check everything in Rect
export interface FinalStyling {
    fill: boolean,
    fillColor: string,
    borderWidth: number,
    borderColor: string,
    widthUnit: string,
    heightUnit: string,
    viewBoxOffset: number
}

export type RectType = FunctionComponent<RectProps>

export const finalStyling: (props: RectProps) => FinalStyling =
    props => {
        const fill = props.styling?.fill !== undefined ?
            props.styling.fill : DEFAULT_FILL;

        const fillColor = props.styling?.color !== undefined ?
            props.styling.color : DEFAULT_COLOR;

        const borderColor = props.styling?.borderColor !== undefined ?
            props.styling.borderColor : fillColor;

        const borderWidth = props.styling?.borderWidth !== undefined ?
            props.styling.borderWidth : DEFAULT_BORDER_WIDTH;

        let widthUnit = DEFAULT_UNIT, heightUnit = DEFAULT_UNIT;
        if(props.styling?.unit !== undefined) {
            widthUnit = props.styling.unit;
            heightUnit = props.styling.unit;
        } else {
            if(props.styling?.widthUnit !== undefined)
                widthUnit = props.styling.widthUnit;
            if(props.styling?.heightUnit !== undefined)
                heightUnit = props.styling.heightUnit;
        }

        const viewBoxOffset = borderWidth / 2;

        return { fill, fillColor, borderColor,
            borderWidth, widthUnit, heightUnit, viewBoxOffset };
    };

const Rect: RectType = props => {
    const { fill, viewBoxOffset, borderColor, borderWidth,
        heightUnit, widthUnit, fillColor } = finalStyling(props);

    return <svg xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox={ `${ -viewBoxOffset } ${ -viewBoxOffset }
                    ${props.width + 2 * viewBoxOffset }
                    ${ props.height + 2 * viewBoxOffset }` }
                width={ `${props.width }${ widthUnit }` }
                height={ `${props.height }${ heightUnit }` }
                role='presentation'
                className={ props.className }
                id={ props.className }
                preserveAspectRatio='none'
    >
        <rect x="0" y="0"
              width={ props.width }
              height={ props.height }
              stroke={ borderColor }
              strokeWidth={ borderWidth }
              fill={ fill ? fillColor : NONE }/>
    </svg>
};

export default Rect;