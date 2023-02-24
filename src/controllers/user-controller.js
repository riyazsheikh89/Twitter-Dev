import UserService from '../services/user-service.js';

const userService = new UserService();

export const signUp = async (req, res) => {
    try {
        const response = await userService.signUp({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(201).json({
            success: true,
            data: response,
            message: "Successfully signed up",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: 'Something went at user-controller!',
            err: error
        });
    }
}

export const login = async (req, res) => {
    try {
        const token = await userService.LogIn(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong at controller',
            data: {},
            err: error
        });
    }
}