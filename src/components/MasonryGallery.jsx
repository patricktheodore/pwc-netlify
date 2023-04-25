import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryGallery = ({gallery}) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      {gallery &&
        <Masonry gutter={4}>
          {gallery.map((item, i) =>
            <img src={item.fields.image.fields.file.url} alt={item.fields.altText} key={i}/>
          )} 
        </Masonry>
      }
    </ResponsiveMasonry>
  );
};

export default MasonryGallery;
