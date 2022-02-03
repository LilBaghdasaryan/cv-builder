import React from "react";
import classes from '../right.module.css'

const EducationCv = ({experienceInfo}) => {

    return (
        <div className={classes.professionalResume}>
            <div className="">
                {experienceInfo.length > 0 ? (<h3>
                    <strong>Experience</strong>
                </h3>) : ''}
                {experienceInfo.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>{`experience${index + 1}`}</h4>
                            <p>
                                <strong>{item.title} </strong>{" "}
                            </p>
                            <p>
                                {item.companyName}
                            </p>
                            <p>
                                {item.start} {item.end}
                            </p>
                        </div>
                    )
                })}

            </div>
        </div>
    );

}
export default EducationCv