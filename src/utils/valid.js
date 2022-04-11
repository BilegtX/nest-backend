const valid = (name, email, password, cf_password) => {
    if (!name || !email || !password) return 'Та талбаруудыг бүрэн бөглөнө үү!';
    if (!validateEmail(email)) return 'Та зөв и-мэйл хаяг оруулна уу!';
    if (password.length < 6)
        return 'Таны нууц үг хамгийн багадаа 6 тэмдэгт авах ёстой!';
    if (password !== cf_password) return 'Нууц үг таарахгүй байна!';
};

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default valid;
