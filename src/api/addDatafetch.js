// export const addDatafetch =async(product)=>{
//     try{
//   let res=await fetch('http://localhost:8000/products',{
//             method:"POST",
//             headers:{
//                 "Content-type": "application/json",
//               },
//             body:JSON.stringify(product)
//         })
//         const data= await res.json();
//          return res
//     }catch(e){
// console.log(e);
//     }
// }