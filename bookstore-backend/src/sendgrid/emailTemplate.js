const emailTemplate = {
    resetPassword: (resetLink)=> `
    <div>Bạn đã yêu cầu đổi mật khẩu. Đây là một email được gửi đến bạn để thực hiện việc đó.
        <br>
        <br>
            Xin vui lòng dùng đường dẫn dưới đây để thiết lập lại mật khẩu của bạn:<br>
        <br>
        <a href="${resetLink}">${resetLink}</a><br>
        <br>
            Đường dẫn trên sẽ hết hạn trong 3 giờ.
        <br>
        <br>
            Thân gửi,<br>
            Bookstore
        <br>
    </div></div>`
}

export default emailTemplate;