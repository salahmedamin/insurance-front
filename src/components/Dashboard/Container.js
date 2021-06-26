export const Container = (props)=>{

    return(
        <div className="main-container">
            <div className="pd-ltr-20" style={props.style}>
                {
                    props.children
                }
            </div>
        </div>
    )
}