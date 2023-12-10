export default function Gallery() {
	return (
		<div className="container mx-auto px-5 md:px-44">
			<p className="text-[#FFDCA7] text-2xl text-left md:text-center md:text-5xl">
				Album ảnh
			</p>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 md:gap-6 mt-20">
				<div className="grid gap-4">
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
