const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream 
async function selectMediaStream()
{
    try{
         const mediaStream = await navigator.mediaDevices.getDisplayMedia();
         videoElement.srcObject = mediaStream;
         videoElement.onloadedmetadata = () =>{
             videoElement.play();
         }
    }catch(error){
        console.log('errorrrrrr',error);
    }
}

button.addEventListener('click',async () => { 
    //disable the button when clicked
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;

});

selectMediaStream();