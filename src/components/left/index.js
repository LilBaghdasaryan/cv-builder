import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Button from "@material-ui/core/Button";
import myClasses from "./left.module.css";
import myStyles from "../../styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import * as headerAction from "../../redux/actions/headerAction";
import * as educationActions from "../../redux/actions/educationActions";
import * as experienceActions from "../../redux/actions/experienceActions";
import * as skillsActions from "../../redux/actions/skillsActions";
import {connect} from "react-redux";
import skills from "./Skills";

const useStyles = makeStyles({
    rootAdd: {
        background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px #F2F3F4",
        color: "white",
        height: 30,
        textAlign: "center",
        fontSize: 10,
        marginTop: 15,
        marginRight: 20,
        fontWeight: 700,
    },
    rootRemove: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 30,
        textAlign: "center",
        minWidth: 130,
        fontSize: 10,
        marginTop: 15,
        marginRight: 20,
        fontWeight: 700,
    },

    headerLink: {
        color: "#0298B8 ",
    },
});

const Left = ({
                  headerInfo,
                  createHeader,
                  educationInfo,
                  createEducation,
                  experienceInfo,
                  createExperience,
                  skillsInfo,
                  createSkills
              }) => {

    const classes = useStyles();

    return (
        <div className={myStyles.left}>
            <div >
                <Router>
                    <div className={myClasses.topLeft}>
                        <Button
                            className={classes.headerLink}
                            component={Link}
                            to="header"
                        >
                            Header
                        </Button>
                        <Button
                            className={classes.headerLink}
                            component={Link}
                            to="/skills"
                        >
                            Skills
                        </Button>
                        <Button
                            className={classes.headerLink}
                            component={Link}
                            to="/education"
                        >
                            Education
                        </Button>
                        <Button
                            className={classes.headerLink}
                            component={Link}
                            to="/experience"
                        >
                            Experience
                        </Button>
                    </div>
                    <hr className={myClasses.hr} />
                    <div className={myClasses.formsSection}>
                        <Routes>
                            <Route
                                path="/header"
                                element={<Header
                                    headerInfo={headerInfo}
                                    createHeader={createHeader} />} exact/>
                            <Route
                                path="/skills"
                                element={<Skills
                                    createSkills={createSkills}
                                    skillsInfo={skillsInfo} />} />
                            <Route
                                path="/education"
                                element={<Education
                                    educationInfo={educationInfo}
                                    createEducation={createEducation} />} />
                            <Route
                                path="/experience"
                                element={<Experience
                                    experienceInfo={experienceInfo}
                                    createExperience={createExperience} />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        headerInfo: state.headerInfo,
        educationInfo: state.educationInfo,
        experienceInfo: state.experienceInfo,
        skillsInfo: state.skillsInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createHeader: (data) =>  {
            dispatch(headerAction.createHeader(data))
        },
        createEducation: (data) =>  {
            dispatch(educationActions.createEducation(data))
        },
        createExperience: (data) =>  {
            dispatch(experienceActions.createExperience(data))
        },
        createSkills: (data) =>  {
            dispatch(skillsActions.createSkills(data))
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Left);