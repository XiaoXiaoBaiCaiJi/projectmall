//防抖动函数
export function debounce(func,delay=100) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this,...args)
    },delay)
  }
}

//时间戳格式化函数 可以保存 后留
export function formatDate(date,fmt){
  if(/(y+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));
    let o={
      'M+':date.getMonth()+1,
      'd+':date.getDate()+1,
      'h+':date.getHours()+1,
      'm+':date.getMinutes()+1,
      's+':date.getSeconds()+1,
    };
    for(let k in o){
      if(new RegExp(`(${k})`).test(fmt)){
        let str = o[k]+'';
        fmt=fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str));
      }
    }
    return fmt
  }
}
function padLeftZero(str) {
  return ('00'+ str).substr(str.length);
};
