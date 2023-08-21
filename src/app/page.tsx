"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Versl SDK to create a chat bot.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>EA</AvatarFallback>
              {/* <AvatarImage src="https://avatars.githubusercontent.com/u/17826831?s=400&u=8a3dae2f79fe6e61d08963831b4b75a7ed763e04&v=4" /> */}
              <AvatarImage src="https://github.com/eduardo123andrade.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold to-slate-700">Human:</span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              nostrum, dolorum sapiente dolore velit commodi, quo, numquam
              dolores eius doloribus maiores consectetur sunt illum. Eveniet
              architecto dolorum nulla cupiditate laboriosam.
            </p>
          </div>

          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>WB</AvatarFallback>
              <AvatarImage src="https://i.natgeofe.com/k/093c14b4-978e-41f7-b1aa-3aff5d1c608a/gray-wolf-closeup_3x4.jpg" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold to-slate-700">Wolf bot:</span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              nostrum, dolorum sapiente dolore velit commodi, quo, numquam
              dolores eius doloribus maiores consectetur sunt illum. Eveniet
              architecto dolorum nulla cupiditate laboriosam.
            </p>
          </div>
        </CardContent>

        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you" />

          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
