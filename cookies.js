const getCookieByName = name => {
    const cookieString = document.cookie;
    const cookieParts = cookieString.slice('; ');
    const cookie = cookieParts.find(c => c.includes(name))
}