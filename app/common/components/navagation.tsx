import { Link } from "react-router";
import { Separator } from "~/common/components/ui/separator";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger
    , NavigationMenuContent } from "~/common/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { cn } from "~/lib/utils";
import { navigationMenuTriggerStyle } from "~/common/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger
    , DropdownMenuContent, DropdownMenuLabel
    , DropdownMenuSeparator, DropdownMenuItem, DropdownMenuGroup } from "./ui/dropdown-menu";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "./ui/avatar";
import { BarChart3Icon, BellIcon, LogOutIcon, MessageCircleIcon, SettingsIcon, UserIcon } from "lucide-react";


const menus = [
    {
        name : "Dashboard",
        to: "/dashboard",
    },
    {
        name: "Scenarios",
        to : "/scenarios",
      
    },
    {
        name : "Profile",
        to : "/profile",
    
    },
    {
        name : "Glossary",
        to : "/ideasgpt",
    },
   
]

export default function Navagation({
    isLoggedIn,
    hasNotifications,
    hasMessages,
}: {
    isLoggedIn: boolean;
    hasNotifications: boolean;
    hasMessages: boolean;
}) {
    return (
        <nav className="w-full flex px-20 h-16 items-center justify-between backdrop-blur 
        fixed top-0 left-0 z-50 bg-background/50" >
            <div className="flex items-center justify-center">
                <Link to="/" className="font-bold tracking-tighter text-lg">Codebridge</Link>
                <Separator orientation="vertical" className="h-6" mx-4/>
                <NavigationMenu>
                    <NavigationMenuList>
                        {menus.map((menu) => (
                            <NavigationMenuItem key={menu.name}>
                                <Link className={navigationMenuTriggerStyle()} to={menu.to}>{menu.name}</Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {isLoggedIn ? 
            <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" asChild className="relative">
                    <Link to="/my/notifications">
                        <BellIcon className="size-4" />
                        {hasNotifications && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-[10px] size-2"></span>
                        )}
                    </Link>
                   
                </Button>
                <Button size="icon" variant="ghost" asChild className="relative">
                    <Link to="/my/messages">
                        <MessageCircleIcon className="size-4" />
                        {hasMessages && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-[10px] size-2"></span>
                        )}
                    </Link>
                </Button>
                <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/serranoarevalo.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                   <DropdownMenuLabel className="flex flex-col">
                     <span className="font-medium">John Doe</span>
                     <span className="text-xs text-muted-foreground">@username</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <Link to="/my/dashboard">
                            <BarChart3Icon className="size-4 mr-2"/>Dashboard
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <Link to="/my/profile">
                            <UserIcon className="size-4 mr-2"/>Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <Link to="/my/profile">
                            <SettingsIcon className="size-4 mr-2"/>Profile
                        </Link>
                    </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <Link to="/auth/logout">
                            <LogOutIcon className="size-4 mr-2"/>Logout
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
            :
            <div className="flex items-center gap-4">
                <Button asChild variant="outline">
                    <Link to="/auth/login">Login</Link>
                </Button>
                <Button asChild>
                    <Link to="/auth/join">Join</Link>
                </Button>
            </div>}
       </nav>
    )
}