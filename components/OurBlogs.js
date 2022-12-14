import Image from "next/image";
import Post from "./blogs/Post";
import waveImg from "../public/images/wave.svg"
import backg from "../public/images/bg.svg"
import { useEffect } from "react";
import useScrollAnimation from "./Hooks/useScrollAnimation";

const OurBlogs = ({ posts }) => {

	return (
		<>

			<div className="translate-y-2 relative">


				<Image src={waveImg} alt="wave"
					fill
					sizes="(max-width: 768px) 100vw,
					   (max-width: 1200px) 50vw,
					   33vw" />
			</div>
			<section className="px-24 py-12 pt-0 relative bg-primary">
			
				<h2 className='p-10  font-bold text-center text-5xl mb-2 text-white'>Our Blogs</h2>
				
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
					{
						posts.map((post, index) => {
							return (

								<Post key={index} post={post} />

							)
						})
					}
				</div>
			</section>
			<Image src={waveImg} alt="wave" className="rotate-180 -translate-y-2 w-screen"
				fill
				sizes="(max-width: 768px) 100vw,
				   (max-width: 1200px) 50vw,
				   33vw" />
		</>
	)
}

export default OurBlogs;