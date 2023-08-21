import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ChatAvatarProps {
  role: "system" | "user" | "assistant" | "function";
}

export const ChatAvatar: React.FC<ChatAvatarProps> = ({ role }) => {
  const imagePath =
    role === "user"
      ? "https://github.com/eduardo123andrade.png"
      : "https://i.natgeofe.com/k/093c14b4-978e-41f7-b1aa-3aff5d1c608a/gray-wolf-closeup_3x4.jpg";

  const fallback = role === "user" ? "EA" : "WB";
  return (
    <Avatar>
      <AvatarFallback>{fallback}</AvatarFallback>
      <AvatarImage src={imagePath} />
    </Avatar>
  );
};
