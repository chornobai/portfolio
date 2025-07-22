"use client"
import { Tabs } from "radix-ui"
import Link from "next/link"


import { FigmaIcon } from "@/app/assets/icons/FigmaIcon"
import { MaterialIcon } from "@/app/assets/icons/MaterialIcon"
import { TypeScriptIcon } from "@/app/assets/icons/TypeScriptIcon"
import { GitIcon } from "@/app/assets/icons/GitIcon"
import { HtmlIcon } from "@/app/assets/icons/HtmlIcon"
import { JavaScriptIcon } from "@/app/assets/icons/JavaScriptIcon"
import { ReactIcon } from "@/app/assets/icons/ReactIcon"
import { ReduxIcon } from "@/app/assets/icons/ReduxIcon"
import { SassIcon } from "@/app/assets/icons/SassIcon"
import { SwaggerIcon } from "@/app/assets/icons/SwaggerIcon"
import { StoryBookIcon } from "@/app/assets/icons/StoryBookIcon"

const stacks = [
    { name: "Figma", icon: <FigmaIcon /> },
    { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "Html", icon: <HtmlIcon /> },
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "MUI", icon: <MaterialIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Redux", icon: <ReduxIcon /> },
    { name: "Sass", icon: <SassIcon /> },
    { name: "Storybook", icon: <StoryBookIcon /> },
    { name: "Swagger", icon: <SwaggerIcon /> },
]

const projectLinks = [
    "https://smart-device-lac.vercel.app/",
    "https://83892-keksobooking-23.vercel.app/",
    "https://top-stroika.vercel.app/",
    "https://bicycle-moon.vercel.app/",
    "https://83892-sedona-22.vercel.app/",
    "https://83892-cat-energy-22.vercel.app/",
    "https://jewellery-five.vercel.app/",
]

const TabsProfile = () => (
    <Tabs.Root className="flex w-full flex-col shadow-[0_2px_10px] shadow-blackA2" defaultValue="tab1">
        <Tabs.List className="flex border-b border-mauve6">
            <Tabs.Trigger className="flex flex-1 items-center justify-center h-[45px] text-[15px] bg-white px-5 cursor-default select-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]" value="tab1">
                Stack
            </Tabs.Trigger>
            <Tabs.Trigger className="flex flex-1 items-center justify-center h-[45px] text-[15px] bg-white px-5 cursor-default select-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]" value="tab2">
                Project
            </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="bg-red-100 rounded-b-md p-5" value="tab1">
            <ul className="grid grid-cols-[repeat(4,auto)] gap-4">
                {stacks.map((item, index) => (
                    <li key={index} className="px-[30px] py-[20px] flex flex-col items-center bg-white rounded-full gap-2 overflow-hidden">
                        <div className="w-20 h-20">{item.icon}</div>
                    </li>
                ))}
            </ul>
        </Tabs.Content>

        <Tabs.Content className="bg-red-50 rounded-b-md p-5" value="tab2">
            <ul className="flex flex-wrap gap-4">
                {projectLinks.map((link, index) => (
                    <li key={index} className="grow">
                        <Link href={link} target="_blank" rel="noopener noreferrer" className="no-underline text-inherit">
                            <div className="px-[20px] py-[20px] bg-white rounded-xl shadow-lg">
                                <iframe src={link} width="100%" height="350" />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </Tabs.Content>
    </Tabs.Root>
)

export default TabsProfile
