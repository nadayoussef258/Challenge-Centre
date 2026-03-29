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
steps = [
  {
    icon: 'fa-solid fa-file-lines',
    title: 'تقييم الحالة',
    desc: 'تقديم المستندات: هوية + جواز سفر + صورة شخصية حديثة + بطاقة أصحاب الهمم + توقيع استمارة التسجيل'
  },
  {
    icon: 'fa-solid fa-users',
    title: 'شرح النظام للأسرة',
    desc: 'شرح مفصّل لأولياء الأمور عن نظام الجلسات الفردية بالمركز وعدد الجلسات ومدة البرامج'
  },
  {
    icon: 'fa-solid fa-file-signature',
    title: 'عقد الالتحاق',
    desc: 'توقيع عقد الالتحاق بالمركز بعد مراجعة البنود ومناقشة العرض النهائي وطريقة الدفع'
  },
  {
    icon: 'fa-solid fa-clipboard-list',
    title: 'وضع الخطة الفردية',
    desc: 'إنشاء خطة تعليمية وتأهيلية فردية (IEP) مخصصة للطالب ومناقشتها مع الأسرة'
  },
  {
    icon: 'fa-solid fa-star',
    title: 'بدء الجلسات',
    desc: 'جلسات فردية 45 دقيقة — من 9:15 ص إلى 1 ظهراً، ومن 4:15 عصراً إلى 8 مساءً'
  },
];

assessments = [
  { icon: 'fa-solid fa-brain',          name: 'Stanford Binet 5',       desc: 'اختبار الذكاء ستانفورد بينيه — صورة خاصة' },
  { icon: 'fa-solid fa-pencil',         name: 'رسم الرجل',              desc: 'اختبار رسم الرجل للقدرات العقلية' },
  { icon: 'fa-solid fa-bolt',           name: 'اضطراب فرط الحركة',      desc: 'اختبار اضطراب فرط الحركة وتشتت الانتباه' },
  { icon: 'fa-solid fa-chart-bar',      name: 'المصفوفات المتتالية',    desc: 'اختبار المصفوفات المتتالية لراڤن' },
  { icon: 'fa-solid fa-comment-dots',   name: 'PLS-4',                  desc: 'اختبار اللغة — مقياس اللغة المبكرة' },
  { icon: 'fa-solid fa-ruler',          name: 'مقياس كارز',             desc: 'مقياس كارز لتصنيف التوحد في مرحلة الطفولة' },
  { icon: 'fa-solid fa-leaf',           name: 'مقياس جيليام',           desc: 'مقياس جيليام لتشخيص اضطراب التوحد' },
  { icon: 'fa-solid fa-list-check',     name: 'كونرز',                  desc: 'مقياس كونرز لتقرير السلوك' },
  { icon: 'fa-solid fa-microscope',     name: 'فينلاند',                desc: 'مقياس فينلاند للسلوك التكيفي' },
  { icon: 'fa-solid fa-message',        name: 'السلوك اللغوي',          desc: 'مقياس السلوك اللغوي (عبد الرحمن على خليل)' },
];

programs = [
  { icon: 'fa-solid fa-bullseye',       name: 'برنامج لورتاج',   desc: 'لتنمية اللغة والتواصل' },
  { icon: 'fa-solid fa-seedling',       name: 'برنامج الوقص',    desc: 'للتدخل المبكر' },
  { icon: 'fa-solid fa-shield-halved',  name: 'برنامج كيتيل',   desc: 'للمهارات الأساسية' },
  { icon: 'fa-solid fa-star',           name: 'برنامج ابيلز',    desc: 'ABLLS للمهارات الأساسية' },
  { icon: 'fa-solid fa-mobile-screen',  name: 'برنامج هيلب وبوب', desc: 'للمهارات الوظيفية' },
];

 
}
