// 구글 애널리틱스
// 구글 통계 hook

import analytics from "../analytics";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function useGoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    analytics.initGA();
  }, []);

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    analytics.sendPageview(currentPath);
  }, [location]);
}
