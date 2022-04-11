import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import valid from '../../../utils/valid';
import bcrypt from 'bcrypt';
import {
    createAccessToken,
    createRefreshToken,
} from '../../../utils/generateToken';

connectDB();

export default async (req, res) => {
    switch (req.method) {
        case 'POST': {
            await login(req, res);
            break;
        }
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email });
        if (!user)
            return res.status(400).json({ err: 'Хэрэглэгч бүртгэлгүй байна!' });

        const isMath = await bcrypt.compare(password, user.password);
        if (!isMath)
            return res.status(400).json({ err: 'Нууц үг буруу байна!' });

        const access_token = createAccessToken({ id: user._id });
        const refresh_token = createRefreshToken({ id: user._id });

        res.json({
            msg: 'Амжилттай нэвтэрлээ!',
            refresh_token,
            access_token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root,
            },
        });

        res.json({ msg: 'Амжилттай бүртгэгдлээ' });
    } catch (err) {
        return res.status(200).json({ err: err.message });
    }
};
