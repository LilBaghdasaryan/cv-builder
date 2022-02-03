export function validateEmail(email)
{
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export function validatePhoneNumber(phoneNumber){
    let pn = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return pn.test(phoneNumber);
}