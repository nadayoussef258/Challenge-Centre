import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports:[CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
stats = [
    { icon: '👶', num: '+500', label: 'طفل تلقّى الرعاية' },
    { icon: '⭐', num: '98%', label: 'رضا الأسر' },
    { icon: '🏅', num: '+10', label: 'سنوات خبرة' },
    { icon: '👩‍⚕️', num: '20+', label: 'متخصص مؤهل' },
    { icon: '📋', num: '+15', label: 'برنامج علاجي' },
    { icon: '🎓', num: '+200', label: 'حالة ناجحة سنويًا' },
  ];

  testimonials = [
    {
      text: 'غيّر مركز التحدي حياة ابني تمامًا، الفريق متفانٍ ومحترف والنتائج فاقت كل توقعاتنا.',
      name: 'أم محمد',
      role: 'والدة أحد المستفيدين',
      initials: 'أم'
    },
    {
      text: 'بيئة دافئة وأخصائيون يعرفون كيف يتعاملون مع كل طفل بشكل مختلف، أنصح به كل أسرة.',
      name: 'أبو علي',
      role: 'والد أحد المستفيدين',
      initials: 'أب'
    },
    {
      text: 'شهدنا تحسنًا ملحوظًا في التواصل والسلوك خلال أشهر قليلة، شكرًا لكل الفريق.',
      name: 'سارة أ.',
      role: 'والدة أحد المستفيدين',
      initials: 'سا'
    },
  ];
}
