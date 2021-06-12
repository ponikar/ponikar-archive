import {  GitBranch, GitHub, Layout, PenTool, PlusCircle, TrendingUp } from "react-feather";
import { MenuDataTypes } from "../../../data/static-menu.data";



export const adminNavigationData :MenuDataTypes[] = [{
    title: "Dashboard",
    href: "/ponikar",
    Icon: Layout
}, {
    title: "Blogs",
    href: "/ponikar/blogs",
    Icon: PenTool
}, {
    title: "Create Blog",
    href: "/ponikar/blogs/create-blog",
    Icon: PlusCircle
},{
    title: "Projects",
    href: "/ponikar/projects",
    Icon: GitHub
}, {
    title: "Create Project",
    href: "/ponikar/projects/create",
    Icon: GitBranch
}, {
    title: "Responses",
    href: "/ponikar/responses",
    Icon: TrendingUp
}]