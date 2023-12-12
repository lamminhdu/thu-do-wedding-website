interface Props {
	title: string;
	content: string;
}

export function Story({ title, content }: Props) {
	return (
		<section className="px-5 md:max-w-[1160px]">
			<div className="md:grid md:grid-cols-2 gap-4">
				<img
					src="https://static.namtay.vn/assets/img/theme4/info3.png"
					alt="wedding"
				/>
				<div className="border-2 border-[#ffdca7] border-solid px-6 py-9 relative -top-8 left-9 w-[calc(100%-72px)] md:-left-24 md:top-0 md:px-24 md:py-12 md:my-20 md:w-[calc(100%+96px)]">
					<p className="text-[#FFDCA7] text-xl md:text-4xl">{title}</p>
					<p className="text-sm md:md:text-lg pt-4">{content}</p>
				</div>
			</div>
		</section>
	);
}
