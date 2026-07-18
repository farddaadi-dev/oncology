import ActivityIcon from "@/assets/icons/activity.svg";
import InfoIcon from "@/assets/icons/info.svg";
import ShieldIcon from "@/assets/icons/shield.svg";
import CheckIcon from "@/assets/icons/check.svg";
import StethoscopeIcon from "@/assets/icons/stethoscope.svg";
import ClipboardListIcon from "@/assets/icons/clipboard-list.svg";
import LockIcon from "@/assets/icons/lock.svg"
import HeartIcon from "@/assets/icons/heart.svg"
import BookOpenCheckIcon from "@/assets/icons/book-open-check.svg";
import HeartHandshakeIcon from "@/assets/icons/heart-handshake.svg";
import MessageCircleIcon from "@/assets/icons/message-circle.svg";
import HeartPulseIcon from "@/assets/icons/heart-pulse.svg";
import SmileIcon from "@/assets/icons/smile.svg";
import FileTextIcon from "@/assets/icons/file-text.svg";
import TriangleAlertIcon from "@/assets/icons/triangle-alert.svg";


export const icons = {

  info: InfoIcon,
  bookOpenCheck: BookOpenCheckIcon,
  heartHandshake: HeartHandshakeIcon,
  shield: ShieldIcon,
  messageCircle: MessageCircleIcon,
  check: CheckIcon,
  heartPulse: HeartPulseIcon,
  lock: LockIcon,
  smile: SmileIcon,
  heart: HeartIcon,
  stethoscope: StethoscopeIcon,
  activity: ActivityIcon,
  clipboardList: ClipboardListIcon,
  fileText: FileTextIcon,
  triangleAlert: TriangleAlertIcon
};


export type IconName = keyof typeof icons;