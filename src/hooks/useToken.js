import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                await fetch('https://limitless-shore-74673.herokuapp.com/login', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                })
                    .then(res => res.json())
                    .then(data => {
                        setToken(data.accessToken);
                        localStorage.setItem('accessToken', data.accessToken);
                    })
            }
        }
        getToken();
    }, [user]);
    return [token];
}

export default useToken;