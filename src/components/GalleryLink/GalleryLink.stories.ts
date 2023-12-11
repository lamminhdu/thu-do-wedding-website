import { GalleryLink } from "./GalleryLink";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "GalleryLink",
	component: GalleryLink,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	// argTypes: {
	//   backgroundColor: { control: 'color' },
	// },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
	args: {
		leadText: `Tiệm chụp ảnh cưới vì "ế" khách mùa dịch đã quyết định tặng bọn mình
    bộ ảnh cưới mới đấy!`,
		label: "Link ảnh ngày cưới",
		href: "https://google.com",
	},
};
