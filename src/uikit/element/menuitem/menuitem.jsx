import  Icon  from "../Icon/Icon"

 const MenuItem = (props) => {
    return (
        <div className='Line'>
            <h2>{props.title}</h2>
            <Icon icon={props.icon} />
        </div>
    )
}

export default MenuItem