"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from '@/hooks/use-language';

interface Advantage {
  id: number;
  text: string;
}

interface Feature {
  id: number;
  title: string;
  description: string;
  advantages: Advantage[];
  icon: string;
  image: string;
}

interface FeatureItemProps {
  id: number;
  title: string;
  description: string;
  advantages: Advantage[];
  icon: string;
  image: string;
}

const iconRender = (val: string) => {
switch (val) {
    case "cross":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
            </svg>
        )
    case "sync":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
            </svg>
        )
    default:
        return <>No Icon</>;
}
}
 
const FeatureItem = ({ id, title, description, advantages, icon, image }: FeatureItemProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Alternate direction: odd IDs from left, even IDs from right
  const isEven = id % 2 === 0
  const initialX = isEven ? 60 : -60

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: initialX }
      }
      transition={{
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`flex flex-col md:items-center gap-10 lg:gap-14 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 20 }
        }
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className="md:w-[48%] xl:w-[45%] md:py-6 xl:py-12 space-y-8"
      >
        <div className="space-y-6">
          <span className="p-2 rounded-md bg-primary/10 text-primary flex w-max">
            {iconRender(icon)}
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
        <ul role="list" className="space-y-5 children:flex children:items-start children:gap-4 children:text-gray-600 dark:children:text-gray-400">
          {advantages.map((advantage: Advantage, index: number) => (
            <motion.li
              key={advantage.id}
              initial={{ opacity: 0, x: -10 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -10 }
              }
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-primary">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              {advantage.text}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.95 }
        }
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className="flex-1 relative bg-primary/10 p-6 rounded-lg aspect-[4/2.4] overflow-hidden border border-primary/20"
      >
        <Image src={image} alt="illustration" width={1800} height={1200} className="w-full h-auto" />
      </motion.div>
    </motion.div>
  )
}
const getFeaturesFromTranslations = (t: any): Feature[] => [
{
    id: 1,
    title: t.features.feature1.title,
    icon: "cross",
    description: t.features.feature1.description,
    advantages: [
        {
            id: 1,
            text: t.features.feature1.advantage1
        },
        {
            id: 2,
            text: t.features.feature1.advantage2
        },
        {
            id: 3,
            text: t.features.feature1.advantage3
        },
    ],
    image: "/placeholder.jpg"
},
{
    id: 2,
    title: t.features.feature2.title,
    icon: "cross",
    description: t.features.feature2.description,
    advantages: [
        {
            id: 1,
            text: t.features.feature2.advantage1
        },
        {
            id: 2,
            text: t.features.feature2.advantage2
        },
        {
            id: 3,
            text: t.features.feature2.advantage3
        },
    ],
    image: "/placeholder.jpg"
},
{
    id: 3,
    title: t.features.feature3.title,
    icon: "sync",
    description: t.features.feature3.description,
    advantages: [
        {
            id: 1,
            text: t.features.feature3.advantage1
        },
        {
            id: 2,
            text: t.features.feature3.advantage2
        },
        {
            id: 3,
            text: t.features.feature3.advantage3
        },
    ],
    image: "/placeholder.jpg"
},
]
 
const Features = () => {
  const { t } = useLanguage()
  const features = getFeaturesFromTranslations(t)
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" })
  
  return (
    <section className="py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col  space-y-16">
                <motion.div
                  ref={headerRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isHeaderInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="flex flex-col justify-center text-center  mx-auto md:max-w-2xl space-y-5"
                >
                    <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-primary">{t.features.title}</span>
                    <h1 className="text-3xl font-semibold text-foreground md:text-4xl xl:text-5xl leading-tight">
                        {t.features.subtitle}
                    </h1>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        {t.features.description}
                    </p>
                </motion.div>
                <div className="grid divide-y divide-gray-300/60 dark:divide-gray-800/30 gap-12 children:py-5 first:pt-0 last:pb-0">
                    {
                        features.map(feature=>(
                            <FeatureItem key={feature.id} {...feature}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
)
}
 
export { Features as FeaturesSection }