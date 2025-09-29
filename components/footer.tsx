"use client"

import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            {t.footer.copyright} {t.footer.rights}
          </div>
          <div className="text-sm font-bold text-primary">Logo</div>
        </div>
      </div>
    </footer>
  )
}
