export const PATH = {
    STUDENT_NO_ROLE: {
        HOME: {
            title: 'Trang chủ',
            route: '/'
        }
    },
    TEACHER: {
        HOME: {
            title: 'Trang chủ',
            route: '/teacher'
        }
    },
    ADMIN: {
        HOME: {
            title: 'Trang chủ',
            route: '/admin'
        }
    },
    AUTH: {
        LOGIN: {
            title: 'Đăng nhập',
            route: 'login'
        },
        REGISTER: {
            title: 'Đăng ký',
            route: 'register'
        },
        FORGOT_PASSWORD: {
            title: 'Lấy lại mật khẩu',
            route: 'forgot-password'
        },
        RESET_PASSWORD: {
            title: 'Thay đổi mật khẩu',
            route: 'reset-password/:email/:verifyCode'
        }
    },
}