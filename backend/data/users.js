import bcrypt from 'bcryptjs';


const users = [
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'John Casey',
        email:'casey@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Sarah Walker',
        email:'sarah@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Chuck Burtowski',
        email:'chuck@example.com',
        password:bcrypt.hashSync('123456',10),
    },
]

export default users