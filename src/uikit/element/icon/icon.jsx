import './Icon.css' 


const Icon = (props) => {
    return (
        <i className={`fas fa-${props.icon}`}></i>
    )
    
}
export default  Icon