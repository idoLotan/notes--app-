import Line from '../Line/Line'
import './Between.css'


const Between = (props) => {
    console.log(props)
    return (
        <Line {...props} addClass="Between" />
    )
}


export default Between