import axios from "axios"

const baseSendGridURLApi = "https://api.sendgrid.com/v3/mail"

export const apiSendGrid = axios.create({
    baseURL: baseSendGridURLApi,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
    }
})