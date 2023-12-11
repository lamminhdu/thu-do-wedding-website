import Link from "next/link";

export function Invitation() {
	return (
		<section className="px-5 pt-12">
			<p className="text-3xl md:text-6xl text-[#FFDCA7] text-center md:pb-2">
				Trân trọng kính mời
			</p>
			<div className="py-4">
				<div className="bg-[#FFDCA7] w-0.5 mx-auto h-12 md:h-20" />
			</div>
			<p className="text-4xl md:text-4xl md:leading-snug text-[#FFDCA7] text-center border-[#FFDCA7] border-2 p-4 md:px-12 md:py-4 md:w-fit md:mx-auto">
				Vào Lúc 9.00 Sáng
			</p>
			<p className="text-6xl md:text-9xl text-[#FFDCA7] text-center pt-12 leading-[67px] md:leading-none">
				06 . 09
			</p>
			<p className="text-6xl md:text-[170px] text-[#FFDCA7] text-center leading-[88px] md:leading-none md:mb-12">
				2069
			</p>

			<div className="mx-24 text-center">
				<p className="text-sm md:text-2xl text-[#FFDCA7] pb-4">tại địa chỉ</p>
				<Link
					className="text-sm md:text-2xl text-[#FFDCA7] underline"
					href="https://www.google.com/maps/"
					target="_blank"
				>
					Phủ Chủ tịch, 02 Hùng Vương, quận Ba Đình, Thành phố Hà Nội
				</Link>
			</div>
			<div className="mx-auto bg-[#FFDCA7] w-2 md:w-4 h-2 md:h-4 my-5 rounded-full" />
			<p className="text-sm md:text-2xl text-[#FFDCA7] text-center">
				Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi!
			</p>
			<div className="py-4">
				<div className="bg-[#FFDCA7] w-0.5 mx-auto h-12 md:h-20" />
			</div>
		</section>
	);
}
