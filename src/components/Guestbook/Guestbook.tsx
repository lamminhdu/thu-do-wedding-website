type Props = {
	remitters: {
		name: string;
		amount: string;
		date: string;
		message: string;
	}[];
};

export function Guestbook({ remitters }: Props) {
	return (
		<section>
			<p className="text-5xl md:text-4xl text-center text-[#ffdca7]">Lưu bút</p>
			<div className="border border-solid border-[#ffdca7] rounded-xl shadow-md shadow-black p-4 md:px-6 md:py-9 mt-7 flex flex-col gap-3 max-h-[700px] overflow-y-scroll">
				{remitters.map((remitter) => {
					return (
						<div className="text-[#B1C4C0] border-solid border-b border-[#B1C4C0] pb-5 md:pb-6 flex flex-col md:flex-row gap-2 md:gap-8">
							<div className="md:pl-4 md:flex md:flex-col md:gap-2 md:basis-1/4">
								<p className="text-xl md:text-2xl font-bold">{remitter.name}</p>
								<p className="text-xl md:text-2xl text-[#ffdca7] font-bold">
									{remitter.amount}
								</p>
								<p className="text-sm md:text-lg">{remitter.date}</p>
							</div>
							<p className="text-sm md:text-2xl md:basis-3/4">
								{remitter.message}
							</p>
						</div>
					);
				})}
				<button type="button" className="text-lg text-[#ffdca7] underline">
					XEM THÊM
				</button>
			</div>
		</section>
	);
}
