const FormInput = (props) => {
    return (
        <div>
           
            <input placeholder={props.placeholder}
            onChange= {(e) => props.setName(e.target.value)}
            />
        </div>
    )
}

export default FormInput
