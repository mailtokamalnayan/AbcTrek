function objNum(op,obj,num){
  return Object.assign({},
    ...Object.keys(obj).map((i)=>{
      let r={}
      r[i]=op(obj[i],num)
      return r
    })
  )
}
function objObj(op,objA,objB){
  return Object.assign({},
    ...Object.keys(objA).map((i)=>{
      let r={}
      r[i]=op(objA[i],objB[i])
      return r
    })
  )
}

const ops={
  add : (a,b) => a+b,
  sub : (a,b) => a-b,
  mult : (a,b) => a*b,
}

function doOpOn(op,a,b){
  if(typeof a == typeof b){
    if(typeof a == "number") return op(a,b)
    if(typeof a == "object") return objObj(op,a,b)
  }else{
    if(typeof a == "object") return objNum(op,a,b)
  }
}

export function mult(a,b){
  return doOpOn(ops.mult,a,b)
}
export function sub(a,b){
  return doOpOn(ops.sub,a,b)
}
export function add(a,b){
  return doOpOn(ops.add,a,b)
}
