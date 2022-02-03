import React, {useState} from "react";
import classes from './left.module.css';
import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {validateEmail, validatePhoneNumber} from "../../utils/validations";
const  Header = ({createHeader}) => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [btnTxt, setBtnTxt] = useState('Add');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const onSubmit = (data) => {
        createHeader(data);
        setBtnTxt('Update');
    };
    return (
        <div className="">
            <h2>Header</h2>
            <form
                className={classes.formStyle}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    label="Full Name"
                    name="name"
                    variant="outlined"
                    defaultValue=''
                    {...register("fullName")}
                    style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <TextField
                    label="Phone Number"
                    name="name"
                    variant="outlined"
                    {...register("phone", {
                        pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ ,})}
                    error={!validatePhoneNumber(phoneNumber) && phoneNumber !== ''}
                    onChange={event => setPhoneNumber(event.target.value)}
                    helperText={!validatePhoneNumber(phoneNumber) && phoneNumber !== '' ? 'Not a valid US Phone Number!' : ' '}
                    defaultValue=''
                    style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <TextField
                label="Email"
                name="name"
                variant="outlined"
                type="email"
                {...register("email", {pattern:/\S+@\S+\.\S+/})}
                defaultValue=''
                error={!validateEmail(email) && email !== ''}
                 onChange={event => setEmail(event.target.value)}
                 helperText={!validateEmail(email) && email !== '' ? 'Not a valid Email!' : ' '}
                style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />
                <TextField
                    label="City"
                    name="name"
                    variant="outlined"
                    {...register("city")}
                    defaultValue=''
                    style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <TextField
                    label="Street"
                    name="name"
                    variant="outlined"
                    {...register("street")}
                    defaultValue=''
                    style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <TextField
                    label="Building"
                    name="name"
                    variant="outlined"
                    {...register("building")}
                    defaultValue=''
                    style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <TextField
                    label="Apartment"
                    name="name"
                    variant="outlined"
                    {...register("apartment")}
                    defaultValue=''
                    style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <TextField
                    label="Postal Code"
                    name="name"
                    variant="outlined"
                    {...register("postalCode")}
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

export default Header;