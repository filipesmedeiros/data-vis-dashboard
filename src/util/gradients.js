export const defaultGradient = [
    {
        offset: 0,
        color: '#ff833b'
    },
    {
        offset: 1,
        color: '#ffb24e'
    }
];

export const flipGradient = gradient => {
    const tempGradient = JSON.parse(JSON.stringify(gradient));
    return tempGradient.map((stop, index) => ({
        offset: stop.offset,
        color: tempGradient[tempGradient.length - 1 - index].color
    }));
};

export const changeRedHex = (hexString, by = 1) => {
    const hexRed = parseInt(`0x${hexString.substr(1, 2)}`);
    return Math.min(255, hexRed + by);
};

export const changeGreenHex = (hexString, by = 1) => {
    const hexGreen = parseInt(`0x${hexString.substr(3, 2)}`);
    return Math.min(255, hexGreen + by);
};

export const changeBlueHex = (hexString, by = 1) => {
    const hexBlue = parseInt(`0x${hexString.substr(5, 2)}`);
    return Math.min(255, hexBlue + by);
};

export const changeIntensityHex = (hexString, by = 1) => {
    let newHexNumber = changeRedHex(hexString, by) * 65536;
    newHexNumber += changeGreenHex(hexString, by) * 256;
    newHexNumber += changeBlueHex(hexString, by);
    return newHexNumber;
};

export const changeIntensity = (hexString, by = 1) => {
    return `#${changeIntensityHex(hexString, by).toString(16)}`;
};
