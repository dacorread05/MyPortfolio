import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  sections = [
    {
      title: "angular", 
      image: "assets/icons/angular.png", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui totam repudiandae doloribus delectus, id", 
      link: "#" 
    },
    {
      title: "JavaScript", 
      image: "assets/icons/angular.png", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui totam repudiandae doloribus delectus, id", 
      link: "#" 
    },
    {
      title: "HTML", 
      image: "assets/icons/angular.png", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui totam repudiandae doloribus delectus, id", 
      link: "#" 
    },
    // {
    //   title: "CSS", 
    //   image: "assets/icons/angular.png", 
    //   description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui totam repudiandae doloribus delectus, id deserunt ea, consectetur minima, expedita quod illum et distinctio quam hic labore earum. Odit, ex.", 
    //   link: "#" 
    // },
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
