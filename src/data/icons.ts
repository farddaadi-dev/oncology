import InfoIcon from "@/assets/icons/info.svg";
import AlertIcon from "@/assets/icons/triangle-alert.svg";
import ShieldIcon from "@/assets/icons/shield.svg";
import CheckIcon from "@/assets/icons/check.svg";
import StethoscopeIcon from "@/assets/icons/stethoscope.svg";
import ActivityIcon from "@/assets/icons/activity.svg";


export const icons = {
  info: InfoIcon.src,
  alert: AlertIcon.src,
  shield: ShieldIcon.src,

  check: CheckIcon.src,

  stethoscope: StethoscopeIcon.src,
  activity: ActivityIcon.src
};


export type IconName = keyof typeof icons;