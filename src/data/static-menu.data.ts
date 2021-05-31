import { Cpu, GitBranch, Home, Icon as I, Inbox, PenTool, User } from "react-feather";

export interface MenuDataTypes {
    title: string;
    href: string;
    Icon?: I
}

export const MenuData :MenuDataTypes[] = [{
    title: "Home",
    href: "/",
    Icon: Home
},
{
    title: "About me",
    href: "#about-me",
    Icon: User
}
,{
    title: "Blogs",
    href: "/blogs",
    Icon: PenTool
}, {
    title: "Projects",
    href: "/projects",
    Icon: GitBranch
}, {
    title: "Stack Tech",
    href: "#stack-tech",
    Icon: Cpu
}, {
    title: "Say Hello!",
    href: "/contact",
    Icon: Inbox
}];