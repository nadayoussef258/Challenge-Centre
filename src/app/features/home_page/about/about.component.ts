import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports:[CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 values = [
  { icon: 'fa-solid fa-handshake',     title: 'روح الفريق',       desc: 'التعاون والاحترام المتبادل بين العاملين يعزز بيئة العمل الإيجابية' },
  { icon: 'fa-solid fa-circle-check',  title: 'الصدق',            desc: 'المصداقية هي محور علاقتنا مع المجتمع والالتزام بالوعود في كل التعاملات' },
  { icon: 'fa-solid fa-shield-halved', title: 'الأمانة',          desc: 'تقديم الخدمات بأعلى مستويات الإخلاص مع احترام حقوق المستفيدين وخصوصيتهم' },
  { icon: 'fa-solid fa-lightbulb',     title: 'الإبداع والتميّز', desc: 'تبنّي الأفكار الجديدة لتطوير خدماتنا والسعي لأعلى معايير الجودة' },
];

}
