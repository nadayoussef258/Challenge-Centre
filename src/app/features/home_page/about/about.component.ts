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
    { icon: '💙', title: 'الرعاية الشاملة', desc: 'نهتم بكل جانب من جوانب نمو الطفل' },
    { icon: '🎯', title: 'خطط مخصصة', desc: 'برنامج علاجي مصمم لكل حالة على حدة' },
    { icon: '👨‍⚕️', title: 'فريق متخصص', desc: 'أطباء ومعالجون معتمدون ذوو خبرة عالية' },
    { icon: '🌱', title: 'بيئة داعمة', desc: 'فضاء آمن ومحفّز يُشجّع على التطور' },
  ];
}
