import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import css from "./InputFormik.module.scss"


// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputFormikType = InputPropsType & {
    type?: string
    htmlFor?: string
    label?: string
    getFieldProps?: any
    errors?: any
    placeholder?: string
}

export const InputFormik: React.FC<InputFormikType> = (
    {type, htmlFor, label, getFieldProps, errors, placeholder, ...restProps}) => {
  return(
      <div>
          <div className={css.form}>
              {label && <label className={css.label} htmlFor={htmlFor}>{label}</label>}
              <input className={css.input} placeholder={placeholder} id={htmlFor} type={type} {...getFieldProps} {...restProps}/>
          </div>

          <div className={css.errorField}><span>{errors ? errors : null}</span></div>
      </div>
  )
}

export const CheckboxFormik = (props: InputFormikType) => {
    return(
        <div>
            <div className={css.checkboxBlock}>
                <input className={css.checkbox} placeholder={props.placeholder} type={"checkbox"} {...props.getFieldProps}/>
                <label className={css.labelCheckbox} htmlFor={props.htmlFor}>{props.label}</label>
            </div>
            <div className={css.errorField}><span>{props.errors ? props.errors : null}</span></div>
        </div>

    )
}


export const TextAreaFormik: React.FC<InputFormikType> = (
    {type, htmlFor, label, getFieldProps, errors, placeholder, ...restProps}) => {
    return(
        <div className={css.form}>
            {/*<div><label htmlFor={props.htmlFor}>{props.label}</label></div>*/}
            <textarea className={`${css.input} ${css.textarea}`} id={htmlFor} {...getFieldProps} {...restProps}/>{errors ? errors : null}
        </div>
    )
}