export type Locale = "en" | "ar";

export const content = {
  en: {
    dir: "ltr",
    nav: {
      collection: "The Collection",
      contact: "Contact",
      langLabel: "العربية",
    },
    hero: {
      lines: [
        {
          title: "Your Partner in Building\nYour Dream Home",
          desc: "Every great home starts with a partner who listens first.",
        },
        {
          title: "From Your Dream\nto Design",
          desc: "We translate your vision into drawings, materials and a plan you can trust.",
        },
        {
          title: "From Design\nto Build",
          desc: "Our craftsmen bring every detail off the page and into your home.",
        },
        {
          title: "From Build to Installation —\nWe Stand By You",
          desc: "We stay on site through the final fitting, so nothing is left unfinished.",
        },
        {
          title: "We Build Kitchens, Dressing\nRooms & TV Lounges",
          desc: "Bespoke spaces engineered around how your family actually lives.",
        },
      ],
      scrollHint: "Scroll to begin",
    },
    collection: {
      kicker: "Our Craft",
      title: "The Collection",
      subtitle:
        "Three spaces we shape from concept to final installation, each built around how you actually live.",
      items: [
        {
          title: "Kitchens",
          desc: "Bespoke culinary spaces designed around how you cook, gather and host.",
          chip: "Custom Joinery",
        },
        {
          title: "Dressing & Closets",
          desc: "Walk-in dressing rooms and closets tailored to every wardrobe and habit.",
          chip: "Tailored Storage",
        },
        {
          title: "TV & Living Lounges",
          desc: "Statement lounges engineered for comfort, acoustics and quiet luxury.",
          chip: "Ambient Lighting",
        },
      ],
    },
    footer: {
      tagline: "Interior Design & Construction Studio",
      phoneLabel: "Call Us",
      phone: "+968 7253 5566",
      addressLabel: "Visit Us",
      address: "In front of Safa Mall, Maabilah, Muscat, Oman",
      rights: "All rights reserved.",
    },
  },
  ar: {
    dir: "rtl",
    nav: {
      collection: "أعمالنا",
      contact: "تواصل معنا",
      langLabel: "English",
    },
    hero: {
      lines: [
        {
          title: "شريكك في بناء\nمنزل أحلامك",
          desc: "كل منزل عظيم يبدأ بشريك يُصغي أولاً.",
        },
        {
          title: "من حلمك\nإلى التصميم",
          desc: "نترجم رؤيتكم إلى مخططات ومواد وخطة يمكنكم الوثوق بها.",
        },
        {
          title: "من التصميم\nإلى التنفيذ",
          desc: "حرفيّونا ينقلون كل تفصيلة من الورق إلى منزلكم.",
        },
        {
          title: "من التنفيذ إلى التركيب —\nنبقى بجانبك",
          desc: "نبقى في الموقع حتى اللمسة الأخيرة، فلا يُترك شيء ناقصًا.",
        },
        {
          title: "نُصمّم المطابخ وغرف الملابس\nوصالات التلفاز",
          desc: "مساحات مخصصة مصممة وفق أسلوب حياة عائلتكم.",
        },
      ],
      scrollHint: "مرّر للأسفل للبدء",
    },
    collection: {
      kicker: "حِرفتنا",
      title: "أعمالنا",
      subtitle:
        "ثلاث مساحات نُصمّمها من الفكرة الأولى وحتى التركيب النهائي، كل منها مبنية على أسلوب حياتكم.",
      items: [
        {
          title: "المطابخ",
          desc: "مساحات طهي مصمّمة خصيصًا حسب طريقتكم في الطهي والاستقبال.",
          chip: "نجارة مخصصة",
        },
        {
          title: "غرف الملابس والخزائن",
          desc: "غرف ملابس وخزائن مصممة بعناية تناسب كل قطعة في خزانتكم.",
          chip: "تخزين مخصص",
        },
        {
          title: "صالات التلفاز والمعيشة",
          desc: "صالات مميزة مصممة للراحة والعزل الصوتي والفخامة الهادئة.",
          chip: "إضاءة أجواء",
        },
      ],
    },
    footer: {
      tagline: "استوديو تصميم داخلي وتنفيذ",
      phoneLabel: "اتصل بنا",
      phone: "+968 7253 5566",
      addressLabel: "زورونا",
      address: "مقابل صفا مول، المعبيلة، مسقط، عُمان",
      rights: "جميع الحقوق محفوظة.",
    },
  },
} as const;
