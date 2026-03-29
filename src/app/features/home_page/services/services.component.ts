import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  imports:[CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 services = [
  {
    icon: 'fa-solid fa-book-open',
    title: 'التربية الخاصة',
    desc: 'جلسات تربية خاصة مخصصة لكل طالب على حدة بمدة 45 دقيقة للجلسة، مع وضع خطة تعليمية فردية تُناقَش مع الأسرة وتُتابَع بصفة منتظمة.',
    price: '250 درهم / جلسة',
    tags: ['45 دقيقة', 'خطة فردية', 'متابعة مستمرة']
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'تأهيل اضطرابات اللغة والكلام',
    desc: 'جلسات متخصصة لتقييم وعلاج اضطرابات النطق واللغة والتواصل بمدة 45 دقيقة، باستخدام أحدث المقاييس والبرامج المعتمدة دولياً.',
    price: '250 درهم / جلسة',
    tags: ['45 دقيقة', 'نطق', 'لغة', 'تواصل']
  },
  {
    icon: 'fa-solid fa-brain',
    title: 'تعديل السلوك',
    desc: 'جلسات متخصصة في تعديل السلوك وتطبيق برامج تحليل السلوك التطبيقي (ABA) لتعزيز المهارات الاجتماعية والتكيفية بمدة 45 دقيقة.',
    price: '250 درهم / جلسة',
    tags: ['45 دقيقة', 'ABA', 'سلوك تطبيقي']
  },
];

}
