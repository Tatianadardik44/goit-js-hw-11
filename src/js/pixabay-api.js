



export function objGallery(names) {
    const  path = `https://pixabay.com/api`;
    const API_KEY = `43257905-28a3b58ba6106b31a5e4f67d7`;
    const params = new URLSearchParams({
        key: API_KEY,
        q: names,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: true
    })
    const url = `${path}?${params}`; 
    return fetch(url)
        .then(response => {
            if (!response.ok) {
           throw new Error(response.status)
       }
            return response.json()
        })
        
        
    .catch(error => alert(error))

    
}