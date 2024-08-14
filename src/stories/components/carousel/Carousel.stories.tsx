import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../../../components/carousel/Carousel";
import c1 from "../../../assets/images/all-img/c1.png";
import c2 from "../../../assets/images/all-img/c2.png";
import c3 from "../../../assets/images/all-img/c3.png";
import { SwiperSlide } from "swiper/react";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    componentSubtitle: "캐러셸",
    docs: {
      description: {
        component:
          "사용자가 스크롤하여 여러 항목을 탐색할 수 있도록 할 때 사용합니다.",
      },
    },
  },
  argTypes: {},
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c1})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c2})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c3})`,
            }}
          ></div>
        </SwiperSlide>
      </>
    ),
  },
};

export const Basic: Story = {
  args: {
    pagination: true,
    navigation: true,
    children: (
      <>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c1})`,
            }}
          >
            <div className="pt-20 container text-center px-4 slider-content h-full w-full min-h-[300px] rounded-md flex flex-col items-center justify-center text-white">
              <div className="max-w-sm">
                <h2 className="text-xl font-medium text-white">Lorem ipsum</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur..
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c2})`,
            }}
          >
            <div className="pt-20 container text-center px-4 slider-content h-full w-full min-h-[300px] rounded-md flex flex-col items-center justify-center text-white">
              <div className="max-w-sm">
                <h2 className="text-xl font-medium text-white">Lorem ipsum</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur..
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c3})`,
            }}
          >
            <div className="pt-20 container text-center px-4 slider-content h-full w-full min-h-[300px] rounded-md flex flex-col items-center justify-center text-white">
              <div className="max-w-sm">
                <h2 className="text-xl font-medium text-white">Lorem ipsum</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur..
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </>
    ),
  },
};

export const Interval: Story = {
  args: {
    pagination: true,
    navigation: true,
    className: "main-caro",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    children: (
      <>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c1})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c2})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c3})`,
            }}
          ></div>
        </SwiperSlide>
      </>
    ),
  },
};

export const Crossfade: Story = {
  args: {
    pagination: true,
    navigation: true,
    className: "main-caro",
    effect: "fade",
    children: (
      <>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c1})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c2})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
            style={{
              backgroundImage: `url(${c3})`,
            }}
          ></div>
        </SwiperSlide>
      </>
    ),
  },
};
