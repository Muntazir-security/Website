<lov-code>
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { 
  ExternalLink, 
  Code2, 
  Award, 
  Boxes,
  Shield,
  Building2,
  GraduationCap,
  Database,
  ShoppingCart,
  CheckSquare,
  Car,
  Home,
  ArrowRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "react-router-dom";
import { HoverCard } from "@/components/shared/HoverCard";
import PageBackground from "@/components/shared/PageBackground";

const projects = [
  {
    title: "Mitigating TCP SYN Flooding-Based DDoS Attack in SDN