import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa6";
import Link from "next/link";
import { Project } from "@/app/projects/page";

export function SkillsCard({ project }: { project: Project }) {
  return (
    <Card className="w-full mx-auto ">
      <CardHeader className="h-[150px] ">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={project.img}
          width={1000}
          height={1000}
          alt="project-image"
          // className="stretch"
        />{" "}
        <div className="flex item-center gap-2 mt-4">
          {project.iconLists.map((icon, index) => (
            <Image
              src={icon}
              width={100}
              height={100}
              alt="icon-image"
              key={index}
              className="w-6 h-6 rounded-full "
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {" "}
        <Link href={project.liveLink}>
          <Button
            variant="outline"
            className="flex items-center justify-between"
          >
            <FaLink size={16} />
            Live Preview
          </Button>
        </Link>
        <Link href={project.githubLink}>
          <Button className="flex items-center justify-between">
            <FaGithub size={16} />
            Github Link
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
