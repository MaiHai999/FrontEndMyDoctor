


// các đường dẫn xuống backend
const url_root =  "http://192.168.1.3:9999"

export const url_login = url_root + "/auth/login";
export const url_logout = url_root + "/auth/logout";

export const url_register = url_root + "/auth/register";
export const url_vertification_register = url_root + "/auth/vertification_register";

export const url_login_gg = url_root + "/auth/login_gg";
export const url_login_callback_gg = url_root + "/auth/callback";

export const url_reset_password = url_root + "/auth/reset_password";
export const url_vertification_reset = url_root + "/auth/vertification_reset";

export const url_get_conversation = url_root + "/mess/conversation";
export const url_del_conversation = url_root + "/mess/del_con";

export const url_get_message = url_root + "/mess/message";
export const url_chat = url_root + "/mess/chat";
export const url_save = url_root + "/mess/save";

export const url_stop = url_root + "/mess/stop";

export const username = localStorage.getItem("username");
export const url_get_avatar = "https://ui-avatars.com/api/?name=" + username;





// đối tượng mã lỗi
export const errorMessages = {
    ERR_NETWORK : 'Sever không phản hồi.',
    401 : "Hết phiên làm việc.",
    402 : "Mật khẩu không đúng.",
    403 : "Người dùng không được xác thực.",
    404 : "Email đã được đăng kí bằng hình thức nhập email và mật khẩu nên bạn không thể tiếp tục bằng liên kết Google này.Vui lòng nhập đúng mật khẩu cho email này hoặc bạn có thể bấm quên mật khẩu để lấy lại mật khẩu. ",
    405 : "Email đã được đăng kí ở hệ thống.",
    406 : "Mã xác thực của bạn không hợp lệ",
    407 : "Email của bạn không tồn tại trong hệ thống của chúng tôi",
    408 : "Email bạn không được đăng kí trong hệ thống.",
    429 : "Quá nhiều yêu cầu xử lý trong một lúc",
    500 : "Hệ thống chúng tôi gặp sự cố vui lòng quay lại say ít phút.Chúng tôi rất làm tiếc cho sự cố này !"

    
};






