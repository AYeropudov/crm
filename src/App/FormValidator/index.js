class FormValidator {

    validate(value, validator){
        return this[validator](value);
    }

    email(value){
        let re = /\S+@\S+\.\S+/;
        return re.test(value);
    }

    empty(value){
        return value.length > 0;
    }

}
export default FormValidator;