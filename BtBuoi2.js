
const $ = document.querySelector.bind(document);

const getDataApi= async (username)=>{

    const api= 'https://api.github.com/users';
    const query = await fetch(`${api}/${username}`);
    const res = await query.json();

    const promise= new Promise((resolve,reject)=>{
        const notFound={
            status:404,
            message: 'The user you requested was not found',
        };
        res.message ? reject(notFound) : resolve(res);

    })
    return promise;
}


const handleGet=()=>{
    const valueInput=$(`.input`).value;
    getDataApi(valueInput).then((res)=>{
      const html=`
          <div>
              <div>name:${res.name || res.login}</div>
              <img src="${res.avatar_url}" />
              <div>email:${res.email}</div>
              <div>company:${res.company}</div>
              <div>followers:${res.followers}</div>
          </div>
      `;
      $(`.content`).innerHTML=html;
    })
    .catch((notFound)=>{
        const html=`<div>${notFound.message}</div>`;
        $(`.content`).innerHTML=html;
    })
}

 $(`.btn-get`).addEventListener("click",handleGet);
