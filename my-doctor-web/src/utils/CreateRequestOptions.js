function CreateRequestOptions(data) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Chỉ định kiểu dữ liệu của yêu cầu là JSON
        },
        body: JSON.stringify(data) // Chuyển đổi đối tượng JSON thành chuỗi JSON
    };
}



export default CreateRequestOptions;
