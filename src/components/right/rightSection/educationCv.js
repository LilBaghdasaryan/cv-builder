import React from "react";
import classes from '../right.module.css'

const EducationCv = ({educationInfo}) => {
    return (
        <div className={classes.professionalResume}>
            <div className="">
                {Object.keys(educationInfo).length > 0 ? (<h3>
                    <strong>Education</strong>
                </h3>) : ''}
                <p>
                    <strong>{educationInfo.iName} </strong>{" "}
                </p>
                <p>{educationInfo.graduation}</p>
                <p>
                    {educationInfo.additionalInfo}
                </p>
            </div>
        </div>
    );

}
export default EducationCv