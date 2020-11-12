class ApiService {
    getInfo() {
        return new Promise((resolve) => {
            resolve({
                item: '我是后台数据🌺',
                result: [1, 'next'],
            });
        });
    }
}
export default ApiService;