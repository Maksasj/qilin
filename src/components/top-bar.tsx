import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import './top-bar.css'
import React from "react";
import { PopoverAnchor } from "@radix-ui/react-popover";
import { CommandInput } from "./ui/command";

const Logo = () => {
	return (
		<div className="nue-logo">
			🐏 nue
		</div>
	);
}

const SearchInput = () => {
	const [tmp, setTmp] = React.useState<string>("");
	const [autoComplete, setAutoComplete] = React.useState<boolean>(true);

	return (
		<div className="nue-search">
			<Input
				className="nue-search-input"
				type="text"
				onFocus={() => setAutoComplete(true)}
				onBlur={() => setAutoComplete(false)}
				onChange={(event) => {
					setTmp(event.target.value)
				}}
				placeholder="Type a tag or search by multiple..." />

			<div className="nue-search-auto-complete-base">
				{tmp}
			</div>

			<Button variant="outline">Search</Button>
		</div >
	);
}

const RightSection = () => {
	return (
		<div className="nue-right">
			<ModeToggle />
		</div>
	);
}

const TopBar = () => {
	return (
		<div className="nue-top">
			<Logo />
			<SearchInput />
			<RightSection />
		</div>
	);
};

export default TopBar;