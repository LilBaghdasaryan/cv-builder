   import React, { useState} from "react";
   import classes from "./left.module.css";
   import {Button, TextField} from "@material-ui/core";

   const  Experience = ({
                          createExperience
                       }) => {
       const [btnTxt, setBtnTxt] = useState('Add');
       const [formValues, setFormValues] = useState([{
           title: "",
           companyName : "",
           start: "",
           end: ""
       }]);
       const handleChange = (i, e) => {
           e.preventDefault();
           let newFormValues = [...formValues];
           newFormValues[i][e.target.name] = e.target.value;
           setFormValues(newFormValues);
       }

  const addFormFields = () => {
      setFormValues([...formValues, {
          title: "",
          companyName : "",
          start: "",
          end: ""
      }])
       };
       const onSubmit = (event) => {
           event.preventDefault();
           createExperience(formValues)
           setBtnTxt('Update');
       };

      return (
          <div className="">
             <h2>Experience</h2>
             <form
                 className={classes.formStyle}
                 noValidate
                 autoComplete="off"
                 onSubmit={onSubmit}
             >
                 {formValues.map((item, index) => {
                     return (
                         <>
                             <h3>Experience</h3>
                             <TextField
                                 id="outlined-basic"
                                 label="Position Title"
                                 name="title"
                                 variant="outlined"
                                 defaultValue={item.title || ''}
                                 onChange={e => handleChange(index, e)}
                                 style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                             />
                             <TextField
                                 id="outlined-basic"
                                 label="Company Name"
                                 name="companyName"
                                 variant="outlined"
                                 defaultValue={item.companyName || ''}
                                 onChange={e => handleChange(index, e)}
                                 style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                             />
                             <TextField
                                 id="outlined-basic"
                                 name="start"
                                 variant="outlined"
                                 type="date"
                                 defaultValue={item.start || ''}
                                 onChange={e => handleChange(index, e)}
                                 style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                             />
                             <TextField
                                 id="outlined-basic"
                                 name="end"
                                 variant="outlined"
                                 type="date"
                                 defaultValue={item.end || ''}
                                 onChange={e => handleChange(index, e)}
                                 style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                             />
                         </>
                     )
                 })}
                 <button
                     type='button'
                     onClick={addFormFields}
                     style={{ width: '28%', margin:'auto', marginTop: 3 }}
                 >
                     Add more
                 </button>
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                >
                    {btnTxt}
                </Button>
             </form>
          </div>
      )
   }

   export default Experience;