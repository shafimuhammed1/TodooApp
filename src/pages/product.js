// import React from 'react'
// import '../App.css'
// import img1 from '../images/iphone 13.jpeg'
// import img2 from '../images/i phone 14.jpg'
// import img3 from '../images/i phone 14 pro.jpeg'

// class product extends React.Component {
//   constructor(props){
//     super(props);

//     this.state={
//       items:[],
//       DataIsLoaded:false

//     };
//   }
//   componentDidMount(){
//     fetch(
//       'http://localhost:8080/'
//     )
//     .then((res) => res.json())
//     .then ((json)=> {
//       this.setState({
//         items: json,
//         DataIsLoaded:true
//       })
//     })

//   }



//   render() {
//     const {items} = this.state;
//     return (
//       <>
//         <section id='productlist-section'>
//           <div className="main-body">
//             <div className="products">
//               <div className="card-deck">
//               <div className="card">
//                   <img className="card-img-top" src={img1} alt="Card image cap" />
//                   <div className="card-body">
//                   <h5 className="card-title"></h5>
//                     <p className="card-text"> Apple iPhone 13 256 GB (Midnight, 4 GB RAM) <br /> smartphone online at the best prices in India. The Smartphone is available with 4 GB of RAM and 256 GB of inbuilt storage at a starting price of Rs. 69999. The smartphone from is available in Midnight color. </p>

//                     <p>Price : $499</p>
//                     <a href="#" className="btn btn-dark">Add to Cart</a>
//                   </div>
//                 </div>
                
//                 <div className="card">
//                   <img className="card-img-top" src={img2} alt="Card image cap" />
//                   <div className="card-body">
//                     <h5 className="card-title">IPhone 14</h5>
//                     <p className="card-text">Apple iPhone 14 256 GB (Midnight, 4 GB RAM) <br /> smartphone online at the best prices in India. The Smartphone is available with 4 GB of RAM and 256 GB of inbuilt storage at a starting price of Rs. 69999.</p>

//                     <p>Price : $500</p>
//                     <a href="#" className="btn btn-dark">Add to Cart</a>
//                   </div>
//                 </div>
//                 <div className="card">
//                   <img className="card-img-top" src={img3} alt="Card image cap" />
//                   <div className="card-body">
//                     <h5 className="card-title">IPhone 14pro</h5>
//                     <p className="card-text">Apple iPhone 14pro 256 GB (Midnight, 4 GB RAM) <br /> smartphone online at the best prices in India. The Smartphone is available with 4 GB of RAM and 256 GB of inbuilt storage at a starting price of Rs. 69999. The smartphone from is available in Midnight color.</p>

//                     <p>Price : $600</p>
//                     <a href="#" className="btn btn-dark">Add to Cart</a>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>
//       </>
//     )
//   }
// }

// export default product;