const baseUrl = process.env.BASE_URL;

export const getData = async (url, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'GET',
        header: {
            Authorization: token,
        },
    });

    const data = await res.json();
    return data;
};

export const postData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(post),
    });

    const data = await res.json();
    return data;
};

export const putData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PUT',
        header: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(post),
    });

    const data = await res.json();
    return data;
};

export const pathData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PATH',
        header: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(post),
    });

    const data = await res.json();
    return data;
};

export const deletehData = async (url, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    });

    const data = await res.json();
    return data;
};
