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
      icon: '🗣️',
      title: 'علاج النطق والتخاطب',
      desc: 'جلسات متخصصة لتحسين مهارات الكلام والتواصل ومعالجة اضطرابات النطق واللغة لدى الأطفال.',
      tags: ['نطق', 'لغة', 'تواصل']
    },
    {
      icon: '🧠',
      title: 'التأهيل النفسي والسلوكي',
      desc: 'برامج علاجية لتعديل السلوك ودعم الصحة النفسية وتعزيز المهارات الاجتماعية والعاطفية.',
      tags: ['سلوك', 'اجتماعي', 'نفسي']
    },
    {
      icon: '🏃',
      title: 'العلاج الطبيعي والحركي',
      desc: 'تمارين وتقنيات متخصصة لتحسين القدرات الحركية وتعزيز التوازن والتنسيق الجسدي.',
      tags: ['حركة', 'توازن', 'تنسيق']
    },
    {
      icon: '✋',
      title: 'العلاج الوظيفي',
      desc: 'تطوير مهارات الحياة اليومية والكتابة والأنشطة الدقيقة لتحقيق الاستقلالية.',
      tags: ['مهارات يدوية', 'استقلالية']
    },
    {
      icon: '📚',
      title: 'التدخل المبكر',
      desc: 'برامج مكثفة للأطفال في سن مبكرة لضمان الكشف المبكر وتحقيق أفضل النتائج.',
      tags: ['رضّع', 'أطفال', 'مبكر']
    },
    {
      icon: '👨‍👩‍👧',
      title: 'دعم وتوجيه الأسرة',
      desc: 'جلسات إرشادية للوالدين وورش عمل لتمكين الأسرة من متابعة تطور طفلها.',
      tags: ['أسرة', 'إرشاد', 'تدريب']
    },
  ];
}
