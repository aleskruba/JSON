const id = new URLSearchParams(window.location.search).get('id');

const container = document.querySelector('.details')

const deleteBtn = document.querySelector('.delete')

const renderDetails = async () => {

    const res = await fetch('http://localhost:8000/posts/'+id)
    const post = await res.json()
  
    const template = `
    <h1>${post.title}</h1>
    <h1>${post.body}</h1>
    `
container.innerHTML = template;

}

deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:8000/posts/'+id,{
        method : 'DELETE'
    })
    window.location.replace('/index.html')
})

window.addEventListener('DOMContentLoaded', () => renderDetails());


