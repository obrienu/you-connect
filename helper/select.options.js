import { v4 as uuid } from 'uuid';


 const stateList = [
    "Abuja FCT",
"Abia",
"Adamawa",
"Akwa Ibom",
"Anambra",
"Bauchi",
"Bayelsa",
"Benue",
"Borno",
"Cross River",
"Delta",
"Ebonyi",
"Edo",
"Ekiti",
"Enugu",
"Gombe",
"Imo",
"Jigawa",
"Kaduna",
"Kano",
"Katsina",
"Kebbi",
"Kogi",
"Kwara",
"Lagos",
"Nassarawa",
"Niger",
"Ogun",
"Ondo",
"Osun",
"Oyo",
"Plateau",
"Rivers",
"Sokoto",
"Taraba",
"Yobe",
"Zamfara",
];

 const genderList = [
"Male", "Female"
];

 const bodyTypeList = [
    "Slim",
    "Chubby",
    "Atletic",
    "Average"
]

const addId = (arr) => {
    return arr.map(a  => ({
        value: a,
        id: uuid("v4")
    }))
}

export const states = addId(stateList)
export const gender = addId(genderList)
export const bodyType = addId(bodyTypeList)

