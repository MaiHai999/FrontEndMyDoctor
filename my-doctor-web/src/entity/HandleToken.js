


// Lưu access token vào Local Storage
export const saveAccessToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
};

// Lấy access token từ Local Storage
export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};


// Hàm lưu refresh token vào Cookies
export const saveRefreshToken = (refreshToken) => {
    document.cookie = `refreshToken=${refreshToken}; path=/;`;
};

// Hàm lấy refresh token từ Cookies
export const getRefreshToken = () => {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'refreshToken') {
            return value;
        }
    }
    return null; 
};
