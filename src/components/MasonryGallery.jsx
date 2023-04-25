import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryGallery = ({gallery}) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      {/* {gallery && gallery.fields.content &&
        <Masonry gutter={4}>
          {gallery.fields.content.map((item) =>
            <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} key={item}/>
          )}
        </Masonry>
      } */}
    </ResponsiveMasonry>
  );
};

export default MasonryGallery;
