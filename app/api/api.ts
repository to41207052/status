// commentの取得
export class FetchComment{
    fetchComment = () => { 
        fetch("http://localhost:3000/comment")
        .then(response => response.json())
        .then((data: any) => {
            console.log(data);
        })
        .catch((error: any) => {
            console.error('Error', error);
        })
    }
}

// myStatusの取得
export class FetchMyStatus{
    fetchMyStatus = () => {
        fetch("http://localhost:3300/albion/mystatus")
        .then(response => response.json())
        .then((data: any) => {
            console.log(data)
        })
    }
}