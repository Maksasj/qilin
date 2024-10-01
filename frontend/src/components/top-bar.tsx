import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import './top-bar.css'
import React from "react";
import { PopoverAnchor } from "@radix-ui/react-popover";
import { CommandInput, CommandSeparator } from "./ui/command";
import { Tag } from "@/models/tag";
import axios from "axios";
import { TagsPageResponseModel } from "@/models/tags-page-response-model";
import TagBadge from "./tags/tag-badge";
import { Separator } from "@radix-ui/react-separator";
import { CirclePlus, Plus } from "lucide-react";

const Logo = () => {
	return (
		<div className="nue-logo">
			🐏 nue
		</div>
	);
}

const TagSearchInput = ({ callback }: { callback: (tag: Tag) => void }) => {
	const [tmp, setTmp] = React.useState<string>("");
	const [autoComplete, setAutoComplete] = React.useState<boolean>(true);

	const [state, setState] = React.useState<TagsPageResponseModel>();
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		if (tmp !== "")
			getAllInformation()

	}, [tmp]);

	const getAllInformation = async () => {
		setIsLoading(true);

		await axios.get("https://localhost:7283/SearchTag?searchTitle=" + tmp + "&maxCount=10").then(response => {
			setIsLoading(false);
			const allData: TagsPageResponseModel = response.data;
			setState(allData);
		})
	};

	const handleBlur = (event: any) => {
		if (
			event.relatedTarget &&
			(event.relatedTarget.classList.contains('no-blur') || event.relatedTarget.id === 'specific-element')
		) {
			return;
		}

		setAutoComplete(false);
	};

	return (
		<div className="nue-search">
			<Input
				className="nue-search-input"
				type="text"
				onFocus={() => setAutoComplete(true)}
				onBlur={(e) => handleBlur(e)}
				onChange={(event) => {
					setTmp(event.target.value);
				}}
				placeholder="Type a tag or search by multiple..." />

			{autoComplete && (
				<div className="no-blur nue-search-auto-complete-base" onMouseDown={(e) => e.preventDefault()} >
					<div className="no-blur nue-search-auto-complete-base-label" onMouseDown={(e) => e.preventDefault()} >
						Suggestions
					</div>

					<hr />

					{state !== undefined && (
						state.tags.map(tag => {
							return (
								<div className="no-blur nue-search-auto-complete-result" onMouseDown={(e) => e.preventDefault()} >
									<TagBadge tag={tag} />
									<div className="no-blur nue-search-auto-complete-result-description" onMouseDown={(e) => e.preventDefault()} >
										{tag.value.description}
									</div>
									<div className="no-blur nue-search-auto-complete-result-button" onMouseDown={(e) => e.preventDefault()} >
										<CirclePlus
											className="no-blur"
											onMouseDown={(e) => e.preventDefault()}
											onClick={() => { callback(tag.value) }} />
									</div>
								</div>
							)
						})
					)}

					<hr />

					{state !== undefined ? (
						<div className="nue-search-auto-complete-result-description">
							{state.itemCount} results
						</div>
					) : (
						<div className="nue-search-auto-complete-result-description">
							0 results
						</div>
					)}
				</div>
			)}
		</div >
	);
}

const SearchInput = () => {
	return (
		<div className="nue-search" contentEditable="true">
			<div>
				<div contentEditable="false">"poggers"

				</div>
				<p>
					DKASNKDASDASDASDASFKFNASLJKGBNASLJKG
				</p>
			</div>

			<TagSearchInput callback={(tag: Tag) => {
				console.log("Poggers !" + tag.title);
			}} />
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