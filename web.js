function copyToClipBoard(str){
    const element = document.createElement('textarea');
    element.value= str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);

}


function handleClick(){
    let text = document.querySelector("#text");
    copyToClipBoard(text.innerText);
    document.body.style.background='yellow';
}

const element2 = document.querySelector("#number").valueAsNumber;

console.log(element2);

function night(){
    const element = document.body;
    element.style.background='rgba(13,17,23)';
    element.style.color='#c9d1d9';
   const night= document.querySelector('#night');
   night.style.display='none';
   const light= document.querySelector('#light');
   light.style.display='block';
}

function light(){
    const element = document.body;
    element.style.background='rgba(248, 241, 241, 0.874)';
    element.style.color='black';
   const night= document.querySelector('#night');
   night.style.display='block';
   const light= document.querySelector('#light');
   light.style.display='none';
}