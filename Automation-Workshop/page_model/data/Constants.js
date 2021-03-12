import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAMETEST,
        PASSWORD: process.env.PASSWORD
        
    },
    INVALID_USER:{
        USERNAME:'invalid_user@example.com',
        PASSWORD:'invalid_password'
    }
}