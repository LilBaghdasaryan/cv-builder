import React, {useState} from "react";
import {useForm} from "react-hook-form";
import classes from "./left.module.css";
import {Button, TextField} from "@material-ui/core";

const  Education = ({
                        createEducation
                    }) => {
  const {register, handleSubmit} = useForm();
    const [btnTxt, setBtnTxt] = useState('Add');

    const onSubmit = (data) => {
        createEducation(data);
        setBtnTxt('Update');
    };

    return (
       <div className="">
          <h2>Education</h2>
          <form
              className={classes.formStyle}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
          >
             <TextField
                 id="outlined-basic"
                 label="Institution Name"
                 name="name"
                 variant="outlined"
                 defaultValue=''
                 {...register("iName")}
                 style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
             />
             <TextField
                 id="outlined-basic"
                 name="name"
                 variant="outlined"
                 type="date"
                 {...register("graduation")}
                 defaultValue=''
                 style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
             />
             <TextField
                 id="outlined-basic"
                 label="Additional info"
                 name="name"
                 variant="outlined"
                 {...register("additionalInfo")}
                 defaultValue=''
                 style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
             />
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

export default Education;