type AppContextFields = {
    authenticated: boolean,
    loading: boolean,
}

type AuthContextFields = {
    authenticated: boolean,
    loginError: boolean,
    setLoginError: () => {}, 
    setEmail: () => {}, 
    setPassword: () => {},  
    login: () => {}, 
    register: () => {},
}

type FormSchema = {
    daily: FormSchemaField[],
    weekly: FormSchemaField[],
    monthly: FormSchemaField[],
}

type FormSchemaField = {
    label: string,
    name: string,
}