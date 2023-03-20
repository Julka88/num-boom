
const input=document.querySelector("#guess");
const button=document.querySelector("#btn");
const answer=Math.floor(Math.random() * (70-50+1)) +50;

input.addEventListener("keypress",function(e){
    if(e.keyCode===13){play();}
})

button.addEventListener("click",play);

function play(){
    const userNumber=document.querySelector("#guess").value;
    
    if(userNumber < 50 || userNumber > 70){
        Swal.fire({
            icon: 'error',
            title: 'Ooh...',
            text: 'Entre numero entre 50 y 70!',
            
          })
    }
    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Ooh!',
            text: 'Es nesesario introducir un numero!',
           
          })
    }
    else{
        if(userNumber<answer){
            Swal.fire('Entre arriba')

        }
        else if(userNumber>answer){
            Swal.fire('Entre abajo')
        }
        else{
            Swal.fire({
                title: 'Gane!',
                text: 'Victoria',
                imageUrl: 'https://cdn.glitch.global/2e323160-aa2c-47c1-b730-9dff8b0b4bfe/win.jpg?v=1679258268512',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Victoria',
              })
             
        }
    }
}