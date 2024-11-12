export function getRequestHeaders() {
    return {
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json',
        }
    }
}


export function getAuthConfigApplicationJson(token: string): any {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`,
            'Accept': 'application/json'
        }
    };
}