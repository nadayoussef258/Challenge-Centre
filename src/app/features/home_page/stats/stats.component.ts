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
      desc: 'نبدأ بمراجعة شاملة متعددة التخصصات تشمل السجلات الطبية والتاريخ التطوري والسلوكيات الحالية والقدرات المعرفية واللغوية لتحديد الاحتياجات الفعلية للطفل بدقة.'
    },
    {
      icon: 'fa-solid fa-users',
      title: 'مقابلة الأسرة',
      desc: 'جلسة استماع مع ولي الأمر تشمل تاريخ الطفل الطبي والتطوري والاجتماعي والسلوكي، لأن مشاركة الأسرة ركيزة أساسية في نجاح البرنامج العلاجي.'
    },
    {
      icon: 'fa-solid fa-magnifying-glass-chart',
      title: 'التقييم والاختبارات',
      desc: 'يُقيَّم الطفل باستخدام أحدث الأدوات والمقاييس المعتمدة دولياً، ويتراوح وقت التقييم من 3 إلى 7 ساعات خلال أسبوع واحد وفقاً لعمر الطفل وحالته.'
    },
    {
      icon: 'fa-solid fa-clipboard-list',
      title: 'اجتماع التوصيات',
      desc: 'يُقدَّم تقرير شامل يتضمن التاريخ التطوري ونتائج الاختبارات وتوصيات التدخل، ويناقشه فريقنا مع الأسرة بالتفصيل ويجيب على جميع الاستفسارات.'
    },
    {
      icon: 'fa-solid fa-star',
      title: 'بدء البرنامج',
      desc: 'بعد إعداد الخطة الفردية (IEP) تبدأ جلسات فردية 45 دقيقة بمتابعة منتظمة وتعديل مستمر للبرنامج بناءً على تقدم الطفل — صباحاً ومساءً وفق الجدول المناسب للأسرة.'
    },
  ];


 
}
