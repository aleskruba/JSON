
const container = document.querySelector('.blogs')
const searchForm = document.querySelector('.search')

const renderPosts = async (term) => {

    let uri = 'http://localhost:8000/posts?_sort=id&_order=desc';
    if (term) {
        uri += `&q=${term}`;
    }

    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach(element => {
        template += ` 
        <div class="post">
            <h2>${element.id}</h2>
            <h2><small>${element.title}</small></h2>
            <h2>${element.body.slice(0,50)}</h2>
            <a href ="/details.html?id=${element.id}">read more...</a>
        </div> 
        `
    });
 
    container.innerHTML =template;
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim())
})

window.addEventListener('DOMContentLoaded', () => renderPosts());
