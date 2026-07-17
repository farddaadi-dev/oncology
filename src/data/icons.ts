import InfoIcon from "@/assets/icons/info.svg";
import AlertIcon from "@/assets/icons/triangle-alert.svg";
import ShieldIcon from "@/assets/icons/shield.svg";
import CheckIcon from "@/assets/icons/check.svg";
import StethoscopeIcon from "@/assets/icons/stethoscope.svg";
import ActivityIcon from "@/assets/icons/activity.svg";
import LockIcon from "@/assets/icons/lock.svg"
import HeartIcon from "@/assets/icons/heart.svg"


export const icons = {
  info: InfoIcon.src,
  alert: AlertIcon.src,
  shield: ShieldIcon.src,
  lock: LockIcon.src,
  check: CheckIcon.src,
  heart: HeartIcon.src,
  stethoscope: StethoscopeIcon.src,
  activity: ActivityIcon.src
};


export type IconName = keyof typeof icons;