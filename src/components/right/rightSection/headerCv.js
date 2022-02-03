import React from 'react';
import classes from '../right.module.css';

const HeaderCv = ({headerInfo}) => {

    return (
        <div>
            <div className={classes.headerResume}>
                <div className={classes.contentHeader}>
                    <h1 className={classes.h1Name}>{headerInfo.fullName}</h1>
                    <p>{headerInfo.city}</p>
                        <p>{headerInfo.street} {headerInfo.building}</p>
                    <p>{headerInfo.apartment}</p>
                    <p>{ headerInfo.phone}</p>
                        <p>{headerInfo.email}</p>
                        <p>{headerInfo.postalCode}</p>
                </div>
            </div>
        </div>
    );
}
export default HeaderCv