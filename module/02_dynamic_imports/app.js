// const start = () => {
//   console.log("loading is started!");
// }



const lazy = async _ => {
  try {
  const module = await import("./LazyContent.js");
  console.log('const', module.msg);
  console.log('function', module.message());

  const lazyClass = new module.default;

  console.log('class', lazyClass.message());

  // console.log('class', lazyClass.message());
  } catch(e) {
    console.warn('error in loading lazy content')
  }


}


document.getElementById("btn2").addEventListener("click", lazy);


// lazy();
