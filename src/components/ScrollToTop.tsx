
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className="fixed bottom-8 right-8 z-50 rounded-full bg-soshoct-yellow p-3 text-black shadow-lg transition-all hover:bg-soshoct-yellow/90"
      onClick={scrollToTop}
      size="icon"
    >
      <ArrowUp className="h-5 w-5" />
      <span className="sr-only">Scroll to top</span>
    </Button>
  );
};

export default ScrollToTop;
