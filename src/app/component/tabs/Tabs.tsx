"use client"
import * as React from "react";
import {Tabs} from "radix-ui";
import {FigmaIcon} from "@/app/assets/icons/FigmaIcon";
import {MaterialIcon} from "@/app/assets/icons/MaterialIcon";
import {TypeScriptIcon} from "@/app/assets/icons/TypeScriptIcon";
import {GitIcon} from "@/app/assets/icons/GitIcon";
import {HtmlIcon} from "@/app/assets/icons/HtmlIcon";
import {JavaScriptIcon} from "@/app/assets/icons/JavaScriptIcon";
import {ReactIcon} from "@/app/assets/icons/ReactIcon";
import {ReduxIcon} from "@/app/assets/icons/ReduxIcon";
import {SassIcon} from "@/app/assets/icons/SassIcon";
import {SwaggerIcon} from "@/app/assets/icons/SwaggerIcon";
import {StoryBookIcon} from "@/app/assets/icons/StoryBookIcon";


const stacks = [
    {
        name: "Figma",
        icon: <FigmaIcon/>,
    },
    {
        name: "TypeScript",
        icon: <TypeScriptIcon/>,
    },
    {
        name: "Git",
        icon: <GitIcon/>,
    },
    {
        name: "Html",
        icon: <HtmlIcon/>,
    },
    {
        name: "JavaScript",
        icon: <JavaScriptIcon/>,
    },
    {
        name: "MUI",
        icon: <MaterialIcon/>,
    },
    {
        name: "React",
        icon: <ReactIcon/>,
    },
    {
        name: "Redux",
        icon: <ReduxIcon/>,
    },
    {
        name: "Sass",
        icon: <SassIcon/>,
    },
    {
        name: "Storybook",
        icon: <StoryBookIcon/>,
    },
    {
        name: "Swagger",
        icon: <SwaggerIcon/>,
    },
]


const TabsProfile = () => (
    <Tabs.Root
        className="flex w-[100%] flex-col shadow-[0_2px_10px] shadow-blackA2"
        defaultValue="tab1"
    >
        <Tabs.List
            className="flex shrink-0 border-b border-mauve6"
            aria-label="Manage your account"
        >
            <Tabs.Trigger
                className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
                value="tab1"
            >
                Stack
            </Tabs.Trigger>
            <Tabs.Trigger
                className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
                value="tab2"
            >
                Project
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
            className=" bg-red-100 grow rounded-b-md  p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab1"
        >
            <ul className="grid grid-cols-[repeat(4,auto)] gap-4  ">
                {stacks.map((item, index) => (
                    <li key={index}
                        className="px-[30px] py-[20px] flex flex-col items-center bg-white rounded-full gap-2 overflow-hidden">
                        <div className="w-20 h-20">{item.icon}</div>

                    </li>
                ))}
            </ul>
        </Tabs.Content>
        <Tabs.Content
            className="bg-red-50 grow rounded-b-md  p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab2"
        >
            <ul className="flex flex-wrap">

                <li>
                    <iframe src="https://smart-device-lac.vercel.app/" width={"350"} height={"350"}></iframe>
                </li>
                <li>
                    <iframe src="https://83892-keksobooking-23.vercel.app/" width={"350"} height={"350"}></iframe>
                </li>
                <li>
                    <iframe src="https://top-stroika.vercel.app/" width={"350"} height={"350"}></iframe>
                </li>
                <li>
                    <iframe src="https://bicycle-moon.vercel.app/" width={"350"} height={"350"}></iframe>
                </li>
                <li>
                    <iframe src="https://83892-sedona-22.vercel.app/" width={"350"} height={"350"}></iframe>
                </li>

                <li>
                    <iframe src="  https://83892-cat-energy-22.vercel.app/" width={"350"} height={"350"}></iframe>
                </li>

                <li>
                    <iframe src="https://jewellery-five.vercel.app/" width={"350"} height={"350"}></iframe>
                </li>
            </ul>

        </Tabs.Content>
    </Tabs.Root>
);

export default TabsProfile;
