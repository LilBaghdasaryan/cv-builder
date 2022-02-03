import React from "react";
import classes from '../right.module.css'

const SkillsCv = ({skillsInfo}) => {
    return (
        <div className={classes.professionalResume}>
            <div className="">
                {Object.keys(skillsInfo).length > 0 ? (<h3>
                    <strong>Additional Skills</strong>
                </h3>) : ''}

                <ul>
                    {Object.values(skillsInfo).map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );

}
export default SkillsCv