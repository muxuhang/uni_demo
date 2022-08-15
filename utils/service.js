const url = 'https://v2.mpoc.dsoou.com'
const http =async ({
	method = 'GET',
	api = '',
	data = {},
	header = {},
	useToken = false
}) => {
	let access = null
	let defaultHeader = {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		...header
	}
	if (useToken) {
		defaultHeader.Authorization= 'Bearer ' + access
	}
	
	return new Promise((resolve, reject)=>{
		uni.request({
			url: url + '/api' + api,
			data: data,
			method: method,
			header: defaultHeader,
			success(res) {
				if(res.statusCode===200){
					resolve(res.data)
				}else{
					console.log(res)
					reject(null)
				}
			},
			fail(error) {
				console.log(error)
				reject(null)
			}
		})
	})
}


export {
	url,
	http
};
