import { ComponentType } from "react";
import { NAVIGATION_TYPE } from "@constants/navigation";
import TempPage from "@components/pages/LoginPage";

interface RoutesInfo {
  name: NAVIGATION_TYPE;
  component: ComponentType<any>;
}

const routes: RoutesInfo[] = [
  {
    name: NAVIGATION_TYPE.TEMP,
    component: TempPage,
  },
];

export { routes };
