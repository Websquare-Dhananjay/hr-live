import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen h-screen items-center justify-center mx-auto container py-4">
      <Button className={"bg-gradient-dark-emerald w-full"} size="lg">
        Button
      </Button>
    </div>
  );
}
