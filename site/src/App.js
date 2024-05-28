import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, provider } from "./firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./components/ui/navigation-menu";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer";


import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import Home from "./pages/Home";
import Education from './pages/Education'
import Experience from './pages/Experience'
import Profiles from './pages/Profiles'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import Skills from './pages/Skills'

const components = [
  {
    title: "Education 👨🏻‍🎓",
    href: "/pages/education",
    description: "Click here to see more info about my Education",
  },
  {
    title: "Experience",
    href: "/pages/experience",
    description: "Click here to see more info about my Experiences",
  },
  {
    title: "Profiles",
    href: "/pages/profiles",
    description: "Click here to see my Codeforces, Leetcode, GitHub etc. Profiles",
  },
  {
    title: "Projects",
    href: "/pages/projects",
    description: "Click here to see my projects SimStocks, PostIt, WebWhisper etc..",
  },
  {
    title: "Skills",
    href: "/pages/skills",
    description: "Click here to see my skills...",
  },
  {
    title: "Achievements 🎯",
    href: "/pages/achievements",
    description: "Click here to see my Achievements...",
  },
];

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuth(true);
      setUser(user);
    });
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      setUser(null);
      window.location.pathname = "/";
    });
  };

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth");
    if (authStatus) {
      setIsAuth(true);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="navbar-buttons">Darshil Thakkar</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Introduction 👨🏻‍🎓
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        <div>Hello Everyone,</div>
                        I am a focused and enthusiastic person, keen to learn new things.
                        I have a keen interest in problem-solving and software development technologies.<hr />
                        <div>
                          Glad to know your feedbacks on this website!!
                        </div>
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="https://www.linkedin.com/in/darshilthakkar/" title="Let's Connect on LinkedIn">
                  Click here to see LinkedIn profile.🎯
                </ListItem>
                <ListItem href="https://www.instagram.com/darshil_2510_/" title="Follow me on Instagram 🛜">
                  Click here to see me on Instagram...
                </ListItem>
                <ListItem href="https://twitter.com/Darshil_2510" title="Follow me on Twitter">
                  Click here to see my tweets on Twitter...(Not Posted Any yet 😅)
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger  className="navbar-buttons">My Portfolio</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        <Drawer>
        {isAuth && user ? (<DrawerTrigger className="main-menu"> You are <b className="live">LIVE</b> at 🛜 DARSHILTHAKKAR.COM</DrawerTrigger>):(
          <DrawerTrigger className="main-menu"> You are <b className="offline">OFFLINE</b> at 🛜 DARSHILTHAKKAR.COM</DrawerTrigger>
        )}
          <DrawerContent>
            <DrawerHeader>
              {isAuth ? (
                <DrawerTitle> User Details : </DrawerTitle>
              ) : (
                <DrawerTitle>Login to see Credentials... :(</DrawerTitle>
              )}
              <DrawerHeader>
                {isAuth && user ? (
                  <div className="user-panel">
                    <Avatar className = "user-panel-avtar">
                      <AvatarImage src={user.photoURL} alt={user.displayName} />
                      <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
                      </Avatar><br></br>
                    <h1><b>{user.displayName}</b> is <b className="live"> Online </b> Now..🛜</h1>
                      <h1> Email: <b>{user.email}</b></h1>
                    <p></p>
                  </div>
                ) : (
                  <div></div>
                )}
              </DrawerHeader>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        {isAuth ? (
          <Button variant="default" size="sm" className="right-nav-button-signout" onClick={signUserOut}>
            LogOut
          </Button>
        ) : (
          <Button variant="default" size="sm" className="right-nav-buttons" onClick={signInWithGoogle}>
            LogIn
          </Button>
        )}
      </NavigationMenu>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pages/education" element={<Education />} />
          <Route path="pages/experience" element={<Experience />} />
          <Route path="pages/skills" element={<Skills />} />
          <Route path="pages/projects" element={<Projects />} />
          <Route path="pages/achievements" element={<Achievements />} />
          <Route path="pages/profiles" element={<Profiles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
