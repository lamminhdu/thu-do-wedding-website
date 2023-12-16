import { Banner } from "./Banner";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Banner",
	component: Banner,
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
	args: {
		href: {
			mobile: "https://static.namtay.vn/assets/img/theme4/banner-mobile.png",
			tablet: "https://static.namtay.vn/assets/img/theme4/banner-tablet.png",
			desktop: "https://static.namtay.vn/assets/img/theme4/banner.jpg",
		},
		characters: ["L", "H"],
		title: "Chúng tôi cưới",
		headings: ["Chú rể", "Cô dâu"],
		date: "06 . 09 . 2069",
	},
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {};
