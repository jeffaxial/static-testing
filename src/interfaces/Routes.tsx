import { ComponentClass, FunctionComponent } from "react";

export interface RouteConfig {
  path: string;
  name: string;
  component: ComponentClass<any, any> | FunctionComponent<any>;
}