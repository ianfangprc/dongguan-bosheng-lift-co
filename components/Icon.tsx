
import React from 'react';
import { Wrench, ShieldCheck, Phone, PenTool, BarChart3, HardHat, Menu, X, ChevronRight, ChevronLeft, MapPin, Mail, ArrowRight, Loader2, MessageSquare, Music, ExternalLink, CheckCircle, AlertTriangle, Clock, GraduationCap, ClipboardCheck, Hammer, Award, FileText, UserCheck, Download, Clapperboard, Play, Globe, MoveUp } from 'lucide-react';

export const Icons = {
  Wrench,
  ShieldCheck,
  Phone,
  PenTool,
  BarChart3,
  HardHat,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Mail,
  ArrowRight,
  Loader2,
  MessageSquare,
  Music,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Clock,
  GraduationCap,
  ClipboardCheck,
  Hammer,
  Award,
  FileText,
  UserCheck,
  Download,
  Clapperboard,
  Play,
  Globe,
  MoveUp
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};
