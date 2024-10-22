import { NavLink } from "@remix-run/react";
import { useState } from "react";

import styles from "./navbar.module.css";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setIsOpen((previous) => !previous);
	};

    return (
        <header className={styles.test}>
			<ul className={styles.ulNav}>
				<li
					className={`${
						isOpen ? 'block' : 'hidden'
					} sm:flex sm:justify-between sm:p-0 sm:text-lg dark:text-white`}
				>
						<NavLink to="/index" className="block py-1 underline-anim underline-animate sm:ml-4 text-primary">
							Home
						</NavLink>
				</li>
				<li>
					<NavLink to="/groepsboekingen" className="mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-primary">
							Groepsboekingen
					</NavLink>
				</li>
			</ul>
		</header>
    )
}