import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  languages: string[] = ["Typescript", "Java", "JavaScript", "Python", "C++"];
  others: string[] = ["Angular", "React", "Node.js", "Spring Boot", "Playwright", "Selenium", "Git", "GitHub Actions", "Azure DevOps", "CI/CD", "PostgreSQL", "MongoDB" ,"Agile"];
}
