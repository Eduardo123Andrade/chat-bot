"use client";
import { Message, useChat } from "ai/react";
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
import { ChatAvatar } from "./avatar/ChatAvatar";

// const messages: Message[] = [
//   {
//     id: "1",
//     role: "user",
//     content: "Qual sua opinião sobre JS?",
//   },
//   {
//     id: "2",
//     role: "system",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum recusandae provident beatae, modi voluptates facilis cum non magni id cupiditate. Veritatis amet dolor qui consequuntur praesentium quaerat expedita itaque! Hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus corrupti perferendis ducimus consequuntur impedit ab! Aliquid blanditiis enim accusantium accusamus nulla rerum maxime sunt sapiente repellat! Illum, provident et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio ducimus deserunt exercitationem nostrum porro consectetur, iste earum incidunt, quisquam excepturi accusantium, adipisci laboriosam ipsa totam aliquid nisi? Hic, nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, provident eius quos quo, quaerat officia at aliquid asperiores debitis dignissimos, vel deserunt iusto maiores rerum error dicta accusamus reiciendis distinctio! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium suscipit doloremque assumenda magni, vitae perferendis! Accusamus aperiam incidunt facere similique a placeat quas tempora, excepturi deleniti cupiditate velit numquam officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt animi ducimus in, rerum odit provident illum enim reprehenderit atque quo nisi voluptatum dolores est culpa, dolor ut architecto voluptates!",
//   },
// ];

const renderMessage = (message: Message) => {
  return (
    <div key={message.id} className="flex gap-3 mb-4">
      <ChatAvatar role={message.role} />

      <p className="leading-relaxed">
        <span className="block font-bold to-slate-700">
          {message.role === "user" ? "User" : "Wolf bot"}
        </span>
        {message.content}
      </p>
    </div>
  );
};

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
          {messages.map(renderMessage)}
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
