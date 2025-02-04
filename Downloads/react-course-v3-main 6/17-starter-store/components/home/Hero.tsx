import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
	return (
		<section className="grid gap-24 grid-cols-1 lg:grid-cols-2 items-center">
			<div>
<h1 className="max-w-2xl text-4xl tracking-tight sm:text-6xl font-bold">We are changing the way people shop</h1>
			<p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure quibusdam saepe provident repellat dolorum voluptate officiis placeat cum, qui repellendus quam ratione est facilis nulla perferendis corrupti soluta illum id tenetur numquam commodi nisi? Dolores numquam nostrum modi, ea tempore perferendis veritatis, tenetur, amet eos dolor dolore cumque est.</p>
			<Button asChild size='lg' className='mt-10'>
				<Link href='/products'>Our Products</Link>
			</Button>
			</div>
			<HeroCarousel />
		</section>
	);
}

export default Hero;
