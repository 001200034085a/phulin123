
const $=document.querySelector.bind(document);
const $$ =document.querySelectorAll.bind(document);

const handleGet=()=>{
    const valueInput=$('.input').value.trim();
    getDataApi(valueInput).then((data) => {
        const html=`
        <div>Name :${data.name || data.login}</div>
        <img src=" ${data.avatar_url} " alt=" " />
        <div>email: ${data.email} </div>
        <div>company: ${data.company} </div>
        <div>followwers: ${data.followers}</div>`;
        $(`.content-table`).innerHTML = html
    })
    .catch(err=>{
        const html=`<h2>${err.message}</h2>`;
        $(`.content-table`).innerHTML = html;
    })
}

$('.btn-get').addEventListener("click",handleGet);

const getDataApi= async (username)=>{
    const html=`
    <div>
    <div>Name </div>
    <img src="" alt="   " />
    <div>email: </div>
    <div>company: </div>
    <div>followwers:</div>`;

    $('.content-table').innerHTML=html;

    const api= 'https://api.github.com/users';
    const query=await fetch(`${api}/${username}`);
    const res=await query.json();

    const promise= new Promise((resolve,reject)=>{
        const notFound={
            status:404,
            message: 'The user you requested was not found',
        };
        res.message ? reject(notFound):resolve(res);

    })
    return promise;
}
