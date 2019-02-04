const NewFruit = (props) => {
  let formFields = {}

  return (
    <form onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset(); }
    }>
      <input ref={input => formFields.name = input} placeholder= 'Enter name of fruit' />
      <input ref={input => formFields.description = input} placeholder='Enter description of fruit' />
      <button>Submit</button>
    </form>
  )
}
