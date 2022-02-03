import React, {useState} from "react";
import {useForm} from "react-hook-form";
import classes from "./left.module.css";
import {Button, TextField} from "@material-ui/core";

const  Skills = ({
                     createSkills,
                     skillsInfo,
                     }) => {
   const {register, handleSubmit} = useForm();
   const [moreSkills, setMoreSkills] = useState({});
   const [btnTxt, setBtnTxt] = useState('Add')

   const onSubmit = (data) => {
       createSkills(data);
       setBtnTxt('Update');
   };
    const clickHandler = (data) => {
        setMoreSkills({...data})
    };

   return (
       <div className="">
          <h2>Skills</h2>
          <form
              className={classes.formStyle}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
          >
             <TextField
                 id="outlined-basic"
                 label="Skill Name1"
                 name="name"
                 variant="outlined"
                 defaultValue=''
                 {...register("skillName1")}
                 style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
             />
              { Object.keys(moreSkills).map((item, index) => {
                  return (
                      <TextField
                          key={index}
                          id="outlined-basic"
                          label={`Skill Name${index + 2}`}
                          name="name"
                          variant="outlined"
                          defaultValue=''
                          {...register(`skillName${index + 2}`)}
                          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                      />
                  )
              })
                  }
              <button
                  onClick={handleSubmit(clickHandler)}
                  style={{ width: '28%', margin:'auto', marginTop: 3 }}
              >
                  Add more
              </button>
             <Button
                 type='submit'
                 variant="contained"
                 color="secondary"
                 style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
             >
                 {btnTxt}
             </Button>
          </form>
       </div>
   )
}

export default Skills;