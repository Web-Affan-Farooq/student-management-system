import { SVGProps } from "react";

export default interface TypesIcon extends SVGProps<SVGSVGElement>{
  className?: string;
  size?: {
    width: number;
    height: number;
  }
}