
export const userInputValidator = (obj) => {
    const {displayName, email, password, cpassword, sex, location, birthdate, mobile} = obj;
    if(!displayName || !email || !password || !cpassword || !sex || !location || !birthdate || !mobile){
        throw new Error('Please Enter All Fields')
    }
    if(typeof email !== 'string'){
        throw new Error('Invalid Email')       
    }
    if(typeof mobile !== 'string'){
        throw new Error('Invalid Mobile Number')       
    }
    if( password !== cpassword){
        throw new Error('Passwords do not match')       
    }

    const reg = new RegExp(/^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{7,30}$/g)

    if( !reg.test(password)){
        throw new Error('Password must have at least one number, special character, Uppercase and lower case alphabeth')       
    }

    const date = new Date().getFullYear() ;
    const birthYear = parseInt(birthdate.split('/')[0]) ;
    const age = date - birthYear ;

    if(age < 18){
        throw new Error('Adults only')       
    }

} 


export const escortInputValidator = (obj) => {
    const {bio, bodyType} = obj;
    if(!bio || !bodyType){
        throw new Error('Please Enter All Fields')
    }
    if(typeof bio !== 'string' || typeof bodyType !== 'string'){
        throw new Error('Invalid bio or body type')
    }

    userInputValidator(obj)
}