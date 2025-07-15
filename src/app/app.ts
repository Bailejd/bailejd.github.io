import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { About } from "./about/about";
import { Hero } from "./hero/hero";
import { Experience } from "./experience-section/experience/experience";
import { Projects } from "./projects-section/projects/projects";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";
import { Education } from "./education/education";

@Component({
  selector: 'app-root',
  imports: [Navbar, About, Hero, Experience, Projects, Skills, Footer, Education],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-portfolio';
}
