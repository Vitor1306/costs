function Input({ type, text, name, placeholder, value }) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

export default Input
