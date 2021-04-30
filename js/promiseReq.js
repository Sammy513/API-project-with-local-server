export function promise(method, url, data = null) {
    return new Promise(function(res, rej) {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.send(data)

        xhr.onreadystatechange = verify

        function verify() {
            if(xhr.readyState === 4) {
                if(xhr.status < 400) {
                    const resDides = JSON.parse(xhr.responseText)

                    res(resDides)
                } else {
                    rej({error: 'error'})
                }
            }
        }
    })
}