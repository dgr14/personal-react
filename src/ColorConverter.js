const convert = (color) => {
    const trimColor = color.trim().toLowerCase()
    switch(trimColor) {
        case 'royal blue': 
        return `royalblue`;
        case 'sky blue':
        return `skyblue`;
        case 'navy blue':
        return `navy`;
        case 'claret':
        return `#652132`;
        default:
        return trimColor;

    }
    console.log(trimColor)
}

export default convert
// module.exports.colorConverter = {convert: convert} 