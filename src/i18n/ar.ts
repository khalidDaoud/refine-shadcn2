export const ar = {
  pages: {
    dashboard: "لوحة التحكم",
    tasks: "المهام",
    deliveryVehicles: "مركبات التوصيل",
    tracking: "التتبع"
  },
  buttons: {
    create: "إنشاء",
    edit: "تعديل",
    delete: "حذف",
    save: "حفظ",
    cancel: "إلغاء"
  },
  table: {
    actions: "الإجراءات"
  },
  tasks: {
    fields: {
      id: "المعرف",
      status: "الحالة",
      createdAt: "تاريخ الإنشاء",
      updatedAt: "تاريخ التحديث"
    }
  },
  deliveryVehicles: {
    fields: {
      id: "المعرف",
      name: "الاسم",
      status: "الحالة"
    }
  },
  common: {
    language: "اللغة",
    english: "English",
    arabic: "العربية"
  }
} as const;
