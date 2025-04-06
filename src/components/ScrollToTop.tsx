
import { useScrollToTop } from "@/hooks/useScrollToTop";

/**
 * Component that scrolls to the top of the page on route change
 * This is placed at the root level of the router
 */
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

export default ScrollToTop;
