import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

function Form() {
  
let formik=useFormik({
    initialValues:{
      FirstName:"",
      LastName:"",
      email:"",
      checkbox:false
    },
    validationSchema:Yup.object({
      FirstName:Yup.string().max(10,"write less").required("required"),
      LastName:Yup.string().max(10,"write less").required("required"),
      email:Yup.string().email("invalid email").required("required"),
      checkbox:Yup.boolean().required("you have to accept terms and conditions")
    }),
    onSubmit : (values,actions)=>{
      console.log(values)
      actions.resetForm()
    }
})
console.log(formik)
  return (
    <form onSubmit={formik.handleSubmit}>
      <div><input type="text" onBlur={formik.handleBlur} value={formik.values.FirstName}  onChange={formik.handleChange} name='FirstName'  />{formik.errors.FirstName && formik.touched.FirstName?  <p>{formik.errors.FirstName}</p>:""}</div>
      <div><input type="text" onBlur={formik.handleBlur} value={formik.values.LastName} onChange={formik.handleChange} name='LastName' />{formik.errors.LastName && formik.touched.LastName? <p>{formik.errors.LastName}</p>:""}</div>
    <div><input type="email" onBlur={formik.handleBlur}  value={formik.values.email} onChange={formik.handleChange} name='email' />{formik.errors.email && formik.touched.email? <p>{formik.errors.email}</p>:""}</div>
    <div><input type="checkbox" value={formik.values.checkbox} id="" name="checkbox" />{formik.errors.checkbox && formik.touched.checkbox? <p>{formik.touched.checkbox}</p>:""}<label htmlFor="">i accept terms and conditions</label></div>
    <div><input type="checkbox" name="" id="" /></div>
      <input type="submit" value="sub, b mit" />
    </form>
  )
}

export default Form