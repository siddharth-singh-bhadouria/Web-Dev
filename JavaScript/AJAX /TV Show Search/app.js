
const form = document.querySelector('#searchForm')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    removeImg()
    const searchTerm = form.elements.query.value
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    getImages(res.data)
    form.elements.query.value = ''
})


const getImages = (shows) => {
    for (result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
}


const removeImg = () => {
    const deleteImg = document.querySelectorAll('img')
    for (del of deleteImg) {
        document.body.removeChild(del)
    }

}
