import { Entity } from "@/models/entity";
import { useContext } from "react";
import { Button } from "./ui/button";
import Tag from "./tag";

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
                <Tag color={"#FFDEAD"} label={"File"} />
                <Tag color={"tomato"} label={"Some tag"} />
                <Tag color={"blue"} label={"One piece"} />
                <Tag color={"#6495ED"} label={"A"} />
                <Tag color={"#FF7F50"} label={"Web file"} />
                <Tag color={"#FF69B4"} label={"Cute"} />
                <Tag color={"#F0E68C"} label={"Art work"} />
                <Tag color={"#20B2AA"} label={"nice"} />
                </div>
            </div>
        </div>
    );
}

export default EntityInformation;