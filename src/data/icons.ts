import ActivityIcon from "@/assets/icons/activity.svg";
import InfoIcon from "@/assets/icons/info.svg";
import ShieldIcon from "@/assets/icons/shield.svg";
import CheckIcon from "@/assets/icons/check.svg";
import StethoscopeIcon from "@/assets/icons/stethoscope.svg";
import ClipboardListIcon from "@/assets/icons/clipboard-list.svg";
import LockIcon from "@/assets/icons/lock.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import BookOpenCheckIcon from "@/assets/icons/book-open-check.svg";
import HeartHandshakeIcon from "@/assets/icons/heart-handshake.svg";
import MessageCircleIcon from "@/assets/icons/message-circle.svg";
import HeartPulseIcon from "@/assets/icons/heart-pulse.svg";
import SmileIcon from "@/assets/icons/smile.svg";
import FileTextIcon from "@/assets/icons/file-text.svg";
import TriangleAlertIcon from "@/assets/icons/triangle-alert.svg";
import CalendarClockIcon from "@/assets/icons/calendar-clock.svg";
import PillIcon from "@/assets/icons/pill.svg";
import UserPlusIcon from "@/assets/icons/user-plus.svg";
import CalendarCheckIcon from "@/assets/icons/calendar-check.svg";
import FlaskConicalIcon from "@/assets/icons/flask-conical.svg";
import GraduationCapIcon from "@/assets/icons/graduation-cap.svg";
import EvidenceIcon from "@/assets/icons/evidence.svg";
import PersonalizedIcon from "@/assets/icons/personalized.svg";
import FollowupIcon from "@/assets/icons/followup.svg";
import LifeIcon from "@/assets/icons/life.svg";
import Evidence2Icon from "@/assets/icons/evidence2.svg"
import RibbonIcon from "@/assets/icons/ribbon.svg";
import BloodIcon from "@/assets/icons/blood.svg";
import SyringeIcon from "@/assets/icons/syringe.svg";
import SupportiveIcon from "@/assets/icons/supportive.svg";
import AmbulatoryIcon from "@/assets/icons/ambulatory.svg";
import ConsultIcon from "@/assets/icons/consult.svg";

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
  triangleAlert: TriangleAlertIcon,
  calendarClock: CalendarClockIcon,
  pill: PillIcon,
  userPlus: UserPlusIcon,
  calendarCheck: CalendarCheckIcon,
  flaskConical: FlaskConicalIcon,
  graduationCap: GraduationCapIcon,
  evidence: EvidenceIcon,
  personalized: PersonalizedIcon,
  followup: FollowupIcon,
  life: LifeIcon,
  evidence2: Evidence2Icon,
  ribbon: RibbonIcon,
  blood: BloodIcon,
  syringe: SyringeIcon,
  supportive: SupportiveIcon,
  ambulatory: AmbulatoryIcon,
  consult: ConsultIcon,
};


export type IconName = keyof typeof icons;