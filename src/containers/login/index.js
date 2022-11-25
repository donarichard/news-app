import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useState } from 'react';
import ButtonComponent from '../../components/Button';
import InputField from '../../components/InputField';
export default function LoginComponent() {
    const [formValues, setFormValues] = useState({
        email: {
            value: '',
            error: false,
            errorMessage: 'You must enter a email'
        },
        password: {
            value: '',
            error: false,
            errorMessage: 'You must enter a password'
        },

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: {
                ...formValues[name],
                value,
                error:false
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const formFields = Object.keys(formValues);
        let newFormValues = { ...formValues }

        for (let index = 0; index < formFields.length; index++) {
            const currentField = formFields[index];
            const currentValue = formValues[currentField].value;

            if (currentValue === '') {
                newFormValues = {
                    ...newFormValues,
                    [currentField]: {
                        ...newFormValues[currentField],
                        error: true
                    }
                }
            }

        }
        console.log(newFormValues)
        setFormValues(newFormValues)
    }
    return (
        <Box sx={{
            margin: 0,
            padding: 3,
            height: '100vh',
            background: '#1976d2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }} >
            <Card sx={{ width: 500, height: 400 }} variant="elevation">
                <CardContent>
                <form noValidate onSubmit={handleSubmit} >
                    <Box sx={{
                        display: 'grid',
                        gridAutoFlow: 'row',
                        gridRowGap: 20,
                    }}>
                        <h1>Login</h1>
                        <InputField label={"Email"} name="email" onChange={handleChange} error={formValues.email.error} errorMessage={formValues.email.errorMessage} type="text" />
                        <InputField label={"Password"} type="password" isPassword={true} name="password" onChange={handleChange} error={formValues.password.error} errorMessage={formValues.password.errorMessage} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: 1
                    }}>
                        <a href={() => false}>Forget Password?</a>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        marginTop: 2,
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center'
                    }}>
                        <ButtonComponent type="submit" label={"Login"} variant="contained" />
                        <Box sx={{
                            marginTop: 2,
                        }}>
                            <a href='/signup'>Didn't have account?</a>
                        </Box>
                    </Box>
                </form>
                </CardContent>

            </Card>
        </Box>
    )
}
