# Email Backend

A backend api for the email submit form.

## .env
The `.env.example` file should be modified and renamed as `.env`.
Replace `<USERNAME>` and `PASSWORD` with your username and password for your local MongoDB.

## APIs

### Get all subscribed emails
#### Request
`GET http://localhost:5000/api/email`

#### Success Response
| Field         | Type     | Description                   |
|---------------|----------|-------------------------------|
| emails        | string[] | list of all subscribed emails |
| total_results | int      | number of subscribed emails   |


### Add an email to the subscribed list

#### Request
`POST http://localhost:5000/api/email`
```
{
    "email": <EMAIL_STRING>
}
```