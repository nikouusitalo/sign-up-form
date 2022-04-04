const FormInput = (props) => {
    return (
        <div>
            <label>First Name</label>
            <input placeholder={props.placeholder}
            onChange= {(e) => props.setName(e.target.value)}
            />
        </div>
    )
}

export default FormInput
