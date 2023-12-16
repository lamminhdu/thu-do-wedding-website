type Props = {
	biographies: {
		href: string;
		title: string;
		bio: string;
		family: {
			title: string;
			father: string;
			mother: string;
			address: string;
		};
	}[];
};

export function Biography({ biographies }: Props) {
	return (
		<section className="px-5 lg:px-32">
			{biographies.map((bio, index) => {
				return (
					<div
						key={bio.href}
						className="flex flex-col lg:grid lg:grid-cols-2 last:mt-8 lg:last:mt-0 lg:gap-4"
					>
						<img
							src={bio.href}
							alt="groom"
							className={
								index + 1 === biographies.length ? "lg:order-last" : ""
							}
						/>
						<div
							className={`bg-[#084539] flex flex-col lg:justify-center gap-4 lg:gap-0 px-6 lg:px-24 py-9 lg:py-12 border-[#ffdca7] border-2 border-solid relative -top-8 lg:top-0 left-9 ${
								index + 1 === biographies.length
									? "lg:right-24 lg:left-0"
									: "lg:-left-24"
							} w-[calc(100%-74px)] lg:w-[calc(100%+96px)] lg:my-20`}
						>
							<p className="text-xl lg:text-4xl text-[#ffdca7]">{bio.title}</p>
							<p className="text-sm lg:text-lg text-[#B1C4C0] lg:mt-4">
								{bio.bio}
							</p>
						</div>
					</div>
				);
			})}
			<div className="flex flex-row mt-8 justify-between">
				{biographies.map((bio, index) => {
					return (
						<>
							<div className="text-center">
								<p className="text-xs lg:text-xl text-[#b2b2b2]">
									{bio.family.title}
								</p>
								<p className="text-lg lg:text-3xl text-[#FFDCA7]">
									{bio.family.father}
								</p>
								<p className="text-lg lg:text-3xl text-[#FFDCA7]">
									{bio.family.mother}
								</p>
								<div className="border-[#FFDCA7] border-b-2 border-solid w-24 mx-auto" />
								<p className="text-xs lg:text-xl text-[#b2b2b2] mt-2">
									{bio.family.address}
								</p>
							</div>
							{index % 2 === 0 && (
								<img
									src="https://static.namtay.vn/assets/img/theme4/ring.png"
									alt="lord of the horn"
									className="hidden lg:block"
								/>
							)}
						</>
					);
				})}
			</div>
		</section>
	);
}
