
// import React from "react"
// import Grid from "./Grid";
// import Tile from "./Tile";
// import useGallery from "./useGallery";
// import Image from "gatsby-image";
// import { Lightbox } from "react-modal-image";


// const imgStyles: any = {
//     css: {
//         position: "absolute",
//         left: 0,
//         top: 0,
//         width: "100%",
//         height: "100%",
//         transition: "transform 0.5s, filter 0.25s",
//         "&:hover": {
//             transform: "scale(1.1)",
//             filter: "saturate(1.3)",
//         },
//     },
// };



// const Gallery = () => {

//     const images = useGallery();
//     console.log(images)

//     const [showImageIndex, setShowImageIndex] = React.useState<
//         number | undefined
//     >(undefined);


//     return (
//         <div>
//             <Grid>
//                 {images.map((image, index) => (
//                     <Tile
//                         key={image.id}
//                         onClick={() => {
//                             setShowImageIndex(index);
//                         }}
//                     >
//                         {/* <Image key={image.id + images.length} alt={image.name} fluid={image.fluid} {...imgStyles} /> */}
//                         <Image key={image.id + images.length} alt={image.name} fixed={image.fixed} {...imgStyles} />
//                     </Tile>
//                 ))}

//             </Grid>
//             {showImageIndex !== undefined && (
//                 <Lightbox
//                     hideDownload={true}
//                     large={images[showImageIndex].publicURL}
//                     onClose={() => {
//                         setShowImageIndex(undefined);
//                     }}
//                 />
//             )}
//         </div>
//     )
// }

// export default Gallery