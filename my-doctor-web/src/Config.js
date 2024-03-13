


// các đường dẫn xuống backend
export const url_login = "http://127.0.0.1:9999/auth/login";

export const url_register = "http://127.0.0.1:9999/auth/register";
export const url_vertification_register = "http://127.0.0.1:9999/auth/vertification_register";

export const url_login_gg = "http://127.0.0.1:9999/auth/login_gg";
export const url_login_callback_gg = "http://127.0.0.1:9999/auth/callback";

export const url_reset_password = "http://127.0.0.1:9999/auth/reset_password";
export const url_vertification_reset = "http://127.0.0.1:9999/auth/vertification_reset";

export const url_get_conversation = "http://127.0.0.1:9999/mess/conversation";


// đối tượng mã lỗi
export const errorMessages = {
    ERR_NETWORK : 'Sever không phản hồi.',
    401 : "Email bạn không được đăng kí trong hệ thống.",
    402 : "Mật khẩu không đúng.",
    403 : "Người dùng không được xác thực.",
    404 : "Email đã được đăng kí bằng hình thức nhập email và mật khẩu nên bạn không thể tiếp tục bằng liên kết Google này.Vui lòng nhập đúng mật khẩu cho email này hoặc bạn có thể bấm quên mật khẩu để lấy lại mật khẩu. ",
    405 : "Email đã được đăng kí ở hệ thống.",
    406 : "Mã xác thực của bạn không hợp lệ",
    407 : "Email của bạn không tồn tại trong hệ thống của chúng tôi",
    428 : "Hết phiên làm việc",
    429 : "Quá nhiều yêu cầu xử lý trong một lúc",
    500 : "Hệ thống chúng tôi gặp sự cố vui lòng quay lại say ít phút.Chúng tôi rất làm tiếc cho sự cố này !"

    
};






