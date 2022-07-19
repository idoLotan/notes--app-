import './Line.css';

 const Line = (props) => {
    return (
        <div className={`Line ${props.addClass || ''}`}>
            {props.children}
        </div>
    )
}

export const Between = (props) => {
    return (
        <Line {...props} addClass="Between" />
    )
}


export default Line

