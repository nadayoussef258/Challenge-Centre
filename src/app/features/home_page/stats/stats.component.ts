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
activeStep: number | null = null;

  steps = [
    {
      icon: 'fa-solid fa-paper-plane',
      emoji: '✉️',
      badge: 'المحطة الأولى',
      title: 'نقطة الانطلاق',
      subtitle: 'تواصلكم معنا — نلتقي لنرتقي',
      short: 'تبدأ الحكاية بكلمة',
      desc: 'تواصلوا معنا عبر قنوات التواصل الرسمية أو الاتصال هاتفياً. يُسعدنا الرد على تساؤلاتكم ومساندة الأسرة منذ اللحظة الأولى — لأن كل رحلة عظيمة تبدأ بخطوة شجاعة.',
      color: '#2D2D8E',
      cta: 'لنبدأ الحكاية'
    },
    {
      icon: 'fa-solid fa-compass',
      emoji: '🧭',
      badge: 'المحطة الثانية',
      title: 'بوصلة القدرات',
      subtitle: 'عدسة الاستكشاف — التقييم الشامل',
      short: 'نرى ما وراء التشخيص',
      desc: 'يقوم خبراؤنا في النطق والسلوك والتربية الخاصة بجلسة استكشافية مرحة لاكتشاف مكامن القوة والمواهب الكامنة في بطلكم — قبل التحديات، نرى الإمكانيات.',
      color: '#3d3da8',
      cta: 'اكتشف البطل بداخلهم'
    },
    {
      icon: 'fa-solid fa-pen-ruler',
      emoji: '🧩',
      badge: 'المحطة الثالثة',
      title: 'هندسة النجاح',
      subtitle: 'بصمة التميز — الخطة الفردية IEP',
      short: 'لا توجد خطة تشبه الأخرى',
      desc: 'نصمم معاً "ثوباً تربوياً" مُفصلاً لاحتياجات بطلكم. أهداف ذكية (SMART) محددة زمنياً، بمشاركة الأسرة في كل خطوة — لأن التكامل بين المركز والمنزل هو سر النجاح.',
      color: '#1e1e6a',
      cta: 'شاهد كيف نصمم النجاح'
    },
    {
      icon: 'fa-solid fa-rocket',
      emoji: '🚀',
      badge: 'المحطة الرابعة',
      title: 'خطوة الانطلاق',
      subtitle: 'الانطلاق نحو القمة — رحلة التأهيل',
      short: 'حيث يبدأ السحر والتعلم',
      desc: 'يفتح المركز ذراعيه لاستقبال بطله الجديد. بيئة محفزة تجمع اللعب والتكنولوجيا والابتكار — أسبوعان من الملاحظة الذكية لضمان أعلى مستويات الانسجام قبل الانطلاق الكامل.',
      color: '#2D2D8E',
      cta: 'جولة في عالمنا'
    },
    {
      icon: 'fa-solid fa-tree',
      emoji: '🌳',
      badge: 'المحطة الخامسة',
      title: 'ثمار التمكين',
      subtitle: 'شركاء النجاح — المتابعة المستمرة',
      short: 'نحتفل بكل إنجاز',
      desc: 'أنتم ركن أساسي في رحلتنا. عبر تقاريرنا الدورية واجتماعاتنا المنتظمة، ستكونون معنا في كل خطوة — نراقب التطور، نعدّل المسار، ونحتفي بكل إنجاز صغير وكبير.',
      color: '#3d3da8',
      cta: 'كن شريكاً في الإنجاز'
    },
  ];

  toggleStep(i: number) {
    this.activeStep = this.activeStep === i ? null : i;
  }
}
