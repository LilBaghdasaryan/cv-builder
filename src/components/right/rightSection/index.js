import React from "react";
import myStyles from '../../../styles.module.css'
import {connect} from "react-redux";
import HeaderCv from "./headerCv";
import EducationCv from "./educationCv";
import ExperienceCv from "./experienceCv";
import SkillsCv from "./skillsCv";

const RightSection = ({
                          headerInfo,
                          educationInfo,
                          experienceInfo,
                          skillsInfo
}) => {

    return <div className={myStyles.page}>
        <HeaderCv headerInfo={headerInfo}/>
        <SkillsCv skillsInfo={skillsInfo} />
        <EducationCv educationInfo={educationInfo}  />
        <ExperienceCv experienceInfo={experienceInfo} />
    </div>
}
const mapStateToProps = (state) => {
    return {
        headerInfo: state.headerInfo,
        educationInfo: state.educationInfo,
        experienceInfo: state.experienceInfo,
        skillsInfo: state.skillsInfo,
    }
};

export default connect(mapStateToProps, null)(RightSection)