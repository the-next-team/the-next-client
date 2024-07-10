import {
    Autoplay,
    EffectCards,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper } from "swiper/react";

import "swiper/css";
import {
    AutoplayOptions,
    NavigationOptions,
    PaginationOptions,
} from "swiper/types";

type Props = {
  spaceBetween?: number;
  slidesPerView?: number;
  onSlideChange?: () => void;
  className?: string | undefined;
  onSwiper?: (swiper: any) => void;
  pagination?: PaginationOptions | boolean;
  children: React.ReactNode;
  navigation?: NavigationOptions | boolean;
  autoplay?: AutoplayOptions | boolean;
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';
};

const Carousel = ({
  spaceBetween = 20,
  slidesPerView = 1,
  onSlideChange = () => {},
  onSwiper,
  children,
  pagination,
  className = "main-caro",
  navigation,
  autoplay,
  effect,
}: Props) => {
  return (
    <div>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
        modules={[Pagination, Navigation, Autoplay, EffectFade, EffectCards]}
        pagination={pagination}
        navigation={navigation}
        className={className}
        autoplay={autoplay}
        effect={effect}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
