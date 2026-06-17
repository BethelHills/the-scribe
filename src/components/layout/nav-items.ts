import {
  BarChart3,
  BookOpen,
  FileText,
  Home,
  MessageSquareText,
  Settings,
  Sparkles,
  UserRound,
} from "lucide-react";

export const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Interview", href: "/interview", icon: MessageSquareText },
  { name: "Manuscripts", href: "/manuscript", icon: FileText },
  { name: "AI Assistant", href: "/assistant", icon: Sparkles },
  { name: "Voice Profile", href: "/voice-profile", icon: UserRound },
  { name: "Scripture Library", href: "/scripture-library", icon: BookOpen },
  { name: "Templates", href: "/templates", icon: FileText },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];
