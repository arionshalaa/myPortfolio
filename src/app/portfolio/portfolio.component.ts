import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  csharp: boolean = false;
  javascript: boolean = false;

  angular: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;

  filtering: boolean = false;

  constructor(private titleService: Title, private projectService : ProjectsService){
    this.titleService.setTitle('Arion Shala - Portfolio');

  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.aspnet){
      filterTags.push(Tag.ASPNET);
    }

    if(this.typescript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.react){
      filterTags.push(Tag.REACT);
    }

    if(this.typescript || this.csharp || this.javascript || this.angular || this.aspnet || this.react){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectByFilter(filterTags);
  }

  resetFilters(){
    this.typescript = false;
    this.csharp = false;
    this.javascript = false;

    this.angular = false;
    this.aspnet = false;
    this.react = false;

    this.filtering = false;

    this.projects = this.projectService.getProjects();
  }
}
