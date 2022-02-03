import React from 'react';
import myStyles from "../../styles.module.css";
import RightSection from "./rightSection";
import { makeStyles } from "@material-ui/core/styles";
import { green, pink } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import ClearIcon from "@material-ui/icons/Clear";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "@material-ui/core";
import {connect} from "react-redux";
import * as headerAction from "../../redux/actions/headerAction";
import * as educationActions from "../../redux/actions/educationActions";
import * as experienceActions from "../../redux/actions/experienceActions";
import * as skillsActions from "../../redux/actions/skillsActions";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        "& > *": {
            margin: 0,
        },
    },
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
        margin: 10,
    },
    green: {
        color: "#fff",
        backgroundColor: green[500],
        margin: 10,
    },
}));

const Right = ({
                   removeHeader,
                   removeEducation,
                   removeExperience,
                   removeSkills
               }) => {
    const classes = useStyles();
    const handleSaveToPDF = (event) => {
        event.preventDefault();
        window.print();
    };
    const handleRemove = (e) => {
        e.preventDefault();
        removeHeader();
        removeEducation();
        removeExperience();
        removeSkills()
    }
    return <div className={myStyles.right}>
        <div className={classes.root}>
            <Link href="#" onClick={handleRemove}>
                <Tooltip title="Delete All Data" placement="right">
                    <Avatar className={classes.pink}>
                        <ClearIcon  />
                    </Avatar>
                </Tooltip>
            </Link>
            <Link href="#" onClick={handleSaveToPDF}>
                <Tooltip title="Save to PDF" placement="right">
                    <Avatar className={classes.green}>
                        <PictureAsPdfIcon />
                    </Avatar>
                </Tooltip>
            </Link>
        </div>
        <RightSection />
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeHeader: () =>  {
            dispatch(headerAction.removeHeader())
        },
        removeEducation: () =>  {
            dispatch(educationActions.removeEducation())
        },
        removeExperience: () =>  {
            dispatch(experienceActions.removeExperience())
        },
        removeSkills: () =>  {
            dispatch(skillsActions.removeSkills())
        },
    }
};
export default connect(null, mapDispatchToProps)(Right);