import {VscCode} from "react-icons/vsc";
import {Button} from "../ui/button";
import Link from "next/link";

function Logo() {
	return (
		<Button size="icon">
			<Link href='/'>
				<VscCode className="w-5 h-5"/>
			</Link>
		</Button>
	);
}

export default Logo;
