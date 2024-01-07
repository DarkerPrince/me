// import React, { Component } from 'react';

// export default class ImagePreview extends Component () {
//   state = {
//     showModal: false,
//     caption: '',
//     modalSrc: '',

//     // ...rest of your state
//   };
  
  
  

//   componentDidMount() {
//     this.getAllProjectRequirementImageList();
//   }

//   render() {
//     // const {src} =  this.props;
//     return (
//       <div>
//         <div>
//           {this.state.ioImageListing.map((io, key) => {
//             io.visitRequirementList.map((skill, j) => {
//               const {src} = this.props;
//               const alt = 'Snow'; // or whatever
//               return (
//                 <img
//                   id="myImg"
//                   src={"https://drive.google.com/uc?export=view&id=128ukcZ0gkoPYtfds4TpG8IHpBf74GbVa"}
//                   onClick={() => {
//                     this.setState({ showModal: true, caption: alt, modalSrc: "src" });
//                   }}
//                   alt={alt}
//                   style={{ width: '100%', maxWidth: '300px' }}
//                 />
//               );
//             });
//           })}
//         </div>

//         <div
//           id="myModal"
//           className="modal"
//           style={{ display: this.state.showModal ? 'block' : 'none' }}
//         >
//           <div>
//             <span className="close" onClick={() => this.setState({ showModal: false })}>
//               &times;
//             </span>
//             <img className="modal-content" id="img01" src={"https://drive.google.com/uc?export=view&id=128ukcZ0gkoPYtfds4TpG8IHpBf74GbVa"} />
//             <div id="caption">
//               {this.state.caption}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }