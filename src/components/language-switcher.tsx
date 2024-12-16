import { useTranslate, useSetLocale, useGetLocale } from "@refinedev/core";
import { Languages, isRtl } from "@/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages as LanguagesIcon } from "lucide-react";

export const LanguageSwitcher = () => {
  const translate = useTranslate();
  const setLocale = useSetLocale();
  const locale = useGetLocale();

  const currentLocale = locale() as Languages;

  // Update document direction when language changes
  const handleLanguageChange = (lang: Languages) => {
    setLocale(lang);
    document.dir = isRtl(lang) ? 'rtl' : 'ltr';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LanguagesIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{translate("common.language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => handleLanguageChange("en")}
          className={currentLocale === "en" ? "bg-accent" : ""}
        >
          {translate("common.english")}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange("ar")}
          className={currentLocale === "ar" ? "bg-accent" : ""}
        >
          {translate("common.arabic")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
