import './Input.scss'

export default function Input({type, placeholder, name, value, onChange}){
    return <>
        <input className="input" type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}  />
    </>
}