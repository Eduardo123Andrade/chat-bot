"use client";
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  id: string;
  content: string;
  role: "system" | "user" | "assistant" | "function";
}

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat", //Default
  });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Versl SDK to create a chat bot.</CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[640px] w-full">
          {messages.map((message) => {
            return (
              <div key={message.id} className="flex gap-3 mb-4">
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>EA</AvatarFallback>
                    <AvatarImage src="https://github.com/eduardo123andrade.png" />
                  </Avatar>
                )}

                {message.role === "system" && (
                  <Avatar>
                    <AvatarFallback>WB</AvatarFallback>
                    <AvatarImage src="https://i.natgeofe.com/k/093c14b4-978e-41f7-b1aa-3aff5d1c608a/gray-wolf-closeup_3x4.jpg" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold to-slate-700">
                    {message.role === "user" ? "User" : "Wolf bot"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form onSubmit={handleSubmit} className="w-full flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="How can I help you"
          />

          <Button className="bg-black text-white" type="submit">
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};
