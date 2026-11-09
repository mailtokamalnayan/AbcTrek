export function loadImage(src){
  return new Promise(resolve=>{
    let img=new Image()
    img.addEventListener("load",()=>resolve(img))
    img.src=src
  })
}
