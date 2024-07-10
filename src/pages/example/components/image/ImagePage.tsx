
// Image Import
import image1 from "../../../../assets/images/all-img/image-1.png";
import image2 from "../../../../assets/images/all-img/image-2.png";
import image3 from "../../../../assets/images/all-img/image-3.png";
import responsiveImage1 from "../../../../assets/images/all-img/thumb-1.png";
import responsiveImage2 from "../../../../assets/images/all-img/thumb-2.png";
import responsiveImage3 from "../../../../assets/images/all-img/thumb-3.png";
import responsiveImage4 from "../../../../assets/images/all-img/thumb-4.png";
import responsiveImage5 from "../../../../assets/images/all-img/thumb-5.png";
import responsiveImage6 from "../../../../assets/images/all-img/thumb-6.png";
import Card from "../../../../components/card/Card";
import Image from "../../../../components/image/Image";

const images = [
  {
    src: responsiveImage1,
  },
  {
    src: responsiveImage2,
  },
  {
    src: responsiveImage3,
  },
  {
    src: responsiveImage4,
  },
  {
    src: responsiveImage5,
  },
  {
    src: responsiveImage6,
  },
];
const ImagePage = () => {
  return (
    <div>
      <div className="space-y-5">
        <Card title="Images">
          <Image src={image1} alt="image one" className="rounded-md" />
        </Card>
        <Card title="Responsive images">
          <span className="block text-base font-medium tracking-[0.01em] dark:text-slate-300 text-slate-500 uppercase mb-6 mt-5">
            Small image with fluid
          </span>
          <Image
            src={image2}
            alt="Small image with fluid:"
            className="mb-6 rounded-md"
          />
          <span className="block text-base font-medium tracking-[0.01em] dark:text-slate-300 text-slate-500 uppercase mb-6 mt-5">
            Large image with fluid-grow:
          </span>
          <Image
            src={image3}
            alt="Small image with fluid-grow:"
            className="w-full rounded-md "
          />
        </Card>
        <Card title="Responsive images">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2">
            {images.map((item, i) => (
              <Image
                src={item.src}
                alt="thumb-1"
                className="border-4 rounded-md border-slate-300"
                key={i}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ImagePage;
