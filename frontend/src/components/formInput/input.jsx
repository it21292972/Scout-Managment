import "./input.scss"

const FormInput =(props) =>{
    return(
    <div className="forminput">
        {/*<label> Username</label>*/}
        <input placeholder={props.placeholder}/>
    </div>
    )
}

export default FormInput