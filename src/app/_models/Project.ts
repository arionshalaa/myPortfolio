import { Tag } from "./Tag";

export interface Project{
    id : number;
    name : string;
    summary : string;
    desc : string;
    projectLink : string;
    pictures : string[];
    tags : Tag[];
}