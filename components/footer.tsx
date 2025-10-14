"use client"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from '@/hooks/use-language'

interface FooterItemProps {
  text: string
  link: string
}

interface FooterBlockItemProps {
  title: string
  items: FooterItemProps[]
}

const FooterItem = ({ text, link }: FooterItemProps) => {
return (
    <li>
        <Link href={link} className="duration-200 hover:text-blue-600 dark:hover:text-blue-500">
            {text}
        </Link>
    </li>
)
}
 
const FooterBlockItem = ({ title, items }: FooterBlockItemProps) => {
return (
    <div className="space-y-6">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
        </h1>
        <ul className="space-y-3">
            {
                items.map((item: FooterItemProps, index: number) => (
                    <FooterItem key={index} {...item} />
                ))
            }
        </ul>
    </div>
)
}
 
const getFooterBlocksFromTranslations = (t: any) => [
{
    id: 1,
    title: t.footer.services.title,
    items: [
        {
            text: t.footer.services.items.climateControl,
            link: "#"
        },
        {
            text: t.footer.services.items.security,
            link: "#"
        },
        {
            text: t.footer.services.items.flexibleRental,
            link: "#"
        },
        {
            text: t.footer.services.items.onlineManagement,
            link: "#"
        },
        {
            text: t.footer.services.items.movingSupplies,
            link: "#"
        },
    ]
},
{
    id: 2,
    title: t.footer.company.title,
    items: [
        {
            text: t.footer.company.items.about,
            link: "#"
        },
        {
            text: t.footer.company.items.locations,
            link: "#"
        },
        {
            text: t.footer.company.items.contact,
            link: "#"
        },
        {
            text: t.footer.company.items.careers,
            link: "#"
        },
        {
            text: t.footer.company.items.news,
            link: "#"
        },
    ]
},
{
    id: 3,
    title: t.footer.support.title,
    items: [
        {
            text: t.footer.support.items.helpCenter,
            link: "#"
        },
        {
            text: t.footer.support.items.faq,
            link: "#"
        },
        {
            text: t.footer.support.items.contactSupport,
            link: "#"
        },
        {
            text: t.footer.support.items.storageGuide,
            link: "#"
        },
        {
            text: t.footer.support.items.movingTips,
            link: "#"
        },
    ]
},
{
    id: 4,
    title: t.footer.legal.title,
    items: [
        {
            text: t.footer.legal.items.privacy,
            link: "#"
        },
        {
            text: t.footer.legal.items.terms,
            link: "#"
        },
        {
            text: t.footer.legal.items.accessibility,
            link: "#"
        },
        {
            text: t.footer.legal.items.sitemap,
            link: "#"
        },
    ]
},
]
 
 
const FooterBlock = () => {
  const { t } = useLanguage()
  const footerBlocks = getFooterBlocksFromTranslations(t)
  
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="border-t border-t-gray-200 dark:border-t-gray-800 py-16 md:py-20 flex flex-col lg:flex-row gap-14 gap-y-16">
                <div className="w-full lg:w-96 space-y-6">
                    <Link href="#" className="flex items-center space-x-2 text-primary font-bold text-2xl">
                        <Image 
                            src="/dssc.png" 
                            alt="DSSCompany Logo" 
                            width={32} 
                            height={32}
                            className="h-8 w-8 object-contain"
                        />
                        <span>{t.footer.companyName}</span>
                    </Link>
                    <p className="max-w-lg">
                        {t.footer.description}
                    </p>
                </div>
                <nav className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">
                    {
                        footerBlocks.map(
                            footerBlock => (
                                <FooterBlockItem key={footerBlock.id} {...footerBlock} />
                            )
                        )
                    }
                </nav>
            </div>
        </div>
        <div className="py-3 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-3xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex justify-center text-center">
                <p>{t.footer.copyright} {t.footer.rights}</p>
            </div>
        </div>
    </footer>
  )
}
 
export { FooterBlock as Footer }