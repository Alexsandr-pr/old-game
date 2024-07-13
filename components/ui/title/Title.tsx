import "./title.scss";



const Title = ({title} : {title:string}) => {

    return (
        <div className="block-title">
            <h2 className="title">{title}</h2>
        </div>
    )
    
}

export default Title