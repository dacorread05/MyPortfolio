import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: "Card Title",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      page: "#",
      repository: "#",
      image: "assets/fondo.jpg",
    },
    {
      title: "Card Title",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      page: "#",
      repository: "#",
      image: "assets/fondo.jpg",
    },
    {
      title: "Card Title",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      page: "#",
      repository: "#",
      image: "assets/fondo.jpg",
    },
    {
      title: "Card Title",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      page: "#",
      repository: "#",
      image: "assets/fondo.jpg",
    },
    {
      title: "Card Title",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      page: "#",
      repository: "#",
      image: "assets/fondo.jpg",
    },
    {
      title: "Card Title",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      page: "#",
      repository: "#",
      image: "assets/fondo.jpg",
    },
  ]
  index:number = 0;

  constructor() { }

  ngOnInit(): void {    
  }

  getIndex(index:number) {
    this.index = index;
  }

}
