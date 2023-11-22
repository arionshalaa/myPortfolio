import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects : Project[] = [
    {id: 0, name: "Youtube Clone", pictures: ["../../assets/YoutubeClone1.JPG","../../assets/YoutubeClone2.JPG"], projectLink: "https://github.com/arionshalaa/YoutubeClone", summary: "A project that I wanted to simply to clone Youtube", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT ,Tag.HTML, Tag.CSS]},
    {id: 1, name: "Food Website", pictures: [], projectLink: "https://github.com/arionshalaa/FoodWebsite", summary: "A project that you can order food and drinks", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.JAVASCRIPT, Tag.HTML, Tag.CSS]},
    {id: 2, name: "eTickets", pictures: [], projectLink: "https://github.com/arionshalaa/eTickets", summary: "A project that you can rent movies and series to watch", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.JAVASCRIPT, Tag.HTML, Tag.CSS]}
    
  ]

  constructor() { }

  getProjects(){
    return this.projects;
  }
  
  getProjectById(id:number) : Project{
    let project = this.projects.find(project => project.id === id)

    if(project === undefined){
      throw new TypeError('There is no project that matches the id: ' + id)
    }

    return project;
  }

  getProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];
    this.projects.forEach(function (project){

      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
