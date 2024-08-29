import TagBadge from "./tag-badge";

const EntityInformation = () => {
    return (
        <div className="nue-tile-selected-entity-base">
            <div className="nue-tile-selected-entity-preview">
                <img className="nue-tile-selected-entity-image-preview" src='src/assets/cute-anime-uptxxcxl4h2zoe9r.jpg'></img>
            </div>
            <div className="nue-tile-selected-entity-information">
                <div className="nue-tile-entity-name">FAjsfhakjgbhakjgbakjgbajsgbajkgfanfsalk</div>
                <div className="nue-tile-entity-type">Web File</div>

                <div className="nue-tile-selected-entity-tag-container">
                <TagBadge color={"#FFDEAD"} label={"📁 File"} />
                <TagBadge color={"tomato"} label={"Some tag"} />
                <TagBadge color={"blue"} label={"One piece"} />
                <TagBadge color={"#6495ED"} label={"A"} />
                <TagBadge color={"#FF7F50"} label={"Web file"} />
                <TagBadge color={"#FF69B4"} label={"❤️ Cute"} />
                <TagBadge color={"#F0E68C"} label={"🎨 Art work"} />
                <TagBadge color={"#20B2AA"} label={"nice"} />
                </div>
            </div>
        </div>
    );
}

export default EntityInformation;