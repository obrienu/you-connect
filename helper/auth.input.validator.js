
export const userInputValidator = (obj) => {
    const { username, email, password, cpassword, isAdmin, adminCode } = obj;
    if (!username || !email || !password || !cpassword || !adminCode) {
        throw new Error('Please Enter All Fields')
    }

    if (typeof email !== 'string') {
        throw new Error('Invalid Email')
    }

    if (typeof adminCode !== 'string') {
        throw new Error('Invalid adminCode')
    }

    if (typeof password !== 'string') {
        throw new Error('Invalid password')
    }
    if (typeof cpassword !== 'string') {
        throw new Error('Invalid password')
    }

    if (typeof isAdmin !== 'boolean') {
        throw new Error('Invalid Admin Status')
    }
    if (password !== cpassword) {
        throw new Error('Passwords do not match')
    }

    const reg = new RegExp(/^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{7,30}$/g)

    if (!reg.test(password)) {
        throw new Error('Password must have at least one number, special character, Uppercase and lower case alphabeth')
    }
    return true
}


export const loginValidator = (obj) => {
    const { email, password } = obj;
    if (!email || !password) {
        throw new Error('Please Enter All Fields')
    }
    if (typeof email !== 'string') {
        throw new Error('Invalid Email')
    }
    const reg = new RegExp(/^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{7,30}$/g)

    if (!reg.test(password)) {
        throw new Error('Password must have at least one number, special character, Uppercase and lower case alphabeth')
    }
    return true
}