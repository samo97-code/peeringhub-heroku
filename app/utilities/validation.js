exports.Validation = (type='string',isRequired=false,field,compareField=null,fieldName)=>{

    if (isRequired && !field){
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} field required`
    }

    if (type === 'string' && typeof field === 'string'){
        if (field && field.length > 255){
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} have max size 255`
        }
    }if (type === 'number' && typeof field === 'number'){
        if (field <= 0){
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must have more then 0`
        }
    } if (type === 'password'){
        if (!field || !compareField || field !== compareField){
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} and confirm_password required and must be same`
        }
    }if (type === 'email' && !ValidateEmail(field)){
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} not valid`
    }

    return ''
}

const ValidateEmail = (email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

