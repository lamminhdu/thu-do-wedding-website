interface Props {
	groom: {
		href: string;
		title: string;
		bio: string;
		family: {
			title: string;
			father: string;
			mother: string;
			address: string;
		};
	};
	bride: {
		href: string;
		title: string;
		bio: string;
		family: {
			title: string;
			father: string;
			mother: string;
			address: string;
		};
	};
}

export function Biography({ groom, bride }: Props) {
	return (
		<section className="px-5">
			<div className="flex flex-col">
				<img src={groom.href} alt="groom" />
				<div className="bg-[#084539] flex flex-col gap-4 px-6 py-9 border-[#ffdca7] border-2 border-solid relative -top-8 left-9 w-[calc(100%-74px)]">
					<p className="text-xl text-[#ffdca7]">{groom.title}</p>
					<p className="text-sm text-[#B1C4C0]">{groom.bio}</p>
				</div>
			</div>
			<div className="flex flex-col mt-8">
				<img src={bride.href} alt="bride" />
				<div className="bg-[#084539] flex flex-col gap-4 px-6 py-9 border-[#ffdca7] border-2 border-solid relative -top-8 left-9 w-[calc(100%-74px)]">
					<p className="text-xl text-[#ffdca7]">{bride.title}</p>
					<p className="text-sm text-[#B1C4C0]">{bride.bio}</p>
				</div>
			</div>
			<div className="flex flex-row mt-8">
				<div className="text-center">
					<p className="text-xs text-[#b2b2b2]">{groom.family.title}</p>
					<p className="text-lg text-[#FFDCA7]">{groom.family.father}</p>
					<p className="text-lg text-[#FFDCA7]">{groom.family.mother}</p>
					<p className="text-xs text-[#b2b2b2]">{groom.family.address}</p>
				</div>
				<div className="text-center">
					<p className="text-xs text-[#b2b2b2]">{bride.family.title}</p>
					<p className="text-lg text-[#FFDCA7]">{bride.family.father}</p>
					<p className="text-lg text-[#FFDCA7]">{bride.family.mother}</p>
					<p className="text-xs text-[#b2b2b2]">{bride.family.address}</p>
				</div>
			</div>
		</section>
	);
}
