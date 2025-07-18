import React from "react";
import { Icon } from "@iconify/react";
import * as LucideIcons from "lucide-react";
import { type LucideIcon } from "lucide-react";

// Define icon props
type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  color?: string;
  size?: number | string;
};

// Create icon components
const createIconComponent = (Component: LucideIcon | string) => {
  if (typeof Component === "string") {
    const IconComponent = ({ size, width, height, ...props }: IconProps) => (
      <Icon
        icon={Component}
        width={size || width}
        height={size || height}
        {...props}
      />
    );
    IconComponent.displayName = `Icon(${Component})`;
    return IconComponent;
  }
  const IconComponent = ({ size, width, height, ...props }: IconProps) => (
    <Component width={size || width} height={size || height} {...props} />
  );
  IconComponent.displayName = `Icon(${Component.displayName || Component.name})`;
  return IconComponent;
};

// Export all icons as a single object
export const Icons = {
  // Lucide icons
  panelLeft: createIconComponent(LucideIcons.PanelLeft),
  panelRight: createIconComponent(LucideIcons.PanelRight),
  link: createIconComponent(LucideIcons.Link),
  timer: createIconComponent(LucideIcons.Timer),
  layoutGrid: createIconComponent(LucideIcons.LayoutGrid),
  helpCircle: createIconComponent(LucideIcons.HelpCircle),
  arrowRightLeft: createIconComponent(LucideIcons.ArrowRightLeft),
  keyRound: createIconComponent(LucideIcons.KeyRound),
  import: createIconComponent(LucideIcons.Import),
  checkSquare: createIconComponent(LucideIcons.CheckSquare),
  alertCircle: createIconComponent(LucideIcons.AlertCircle),
  arrowUpDown: createIconComponent(LucideIcons.ArrowUpDown),
  folderPlus: createIconComponent(LucideIcons.FolderPlus),
  arrowRight: createIconComponent(LucideIcons.ArrowRight),
  lock: createIconComponent(LucideIcons.Lock),
  building2: createIconComponent(LucideIcons.Building2),
  fileSearch: createIconComponent(LucideIcons.FileSearch),
  scanLine: createIconComponent(LucideIcons.ScanLine),
  messageSquareText: createIconComponent(LucideIcons.MessageSquareText),
  activitySquare: createIconComponent(LucideIcons.ActivitySquare),
  bookOpenText: createIconComponent(LucideIcons.BookOpenText),
  packageSearch: createIconComponent(LucideIcons.PackageSearch),
  circuitBoard: createIconComponent(LucideIcons.CircuitBoard),
  barChart3: createIconComponent(LucideIcons.BarChart3),
  wrench: createIconComponent(LucideIcons.Wrench),
  cloudCog: createIconComponent(LucideIcons.CloudCog),
  messageSquarePlus: createIconComponent(LucideIcons.MessageSquarePlus),
  atom: createIconComponent(LucideIcons.Atom),
  atSign: createIconComponent(LucideIcons.AtSign),
  paperclip: createIconComponent(LucideIcons.Paperclip),
  send: createIconComponent(LucideIcons.Send),
  fileImage: createIconComponent(LucideIcons.FileImage),
  fileVideo: createIconComponent(LucideIcons.FileVideo),
  brain: createIconComponent(LucideIcons.Brain),
  database: createIconComponent(LucideIcons.Database),
  draftingCompass: createIconComponent(LucideIcons.DraftingCompass),
  fileCode: createIconComponent(LucideIcons.FileCode),
  fileArchive: createIconComponent(LucideIcons.FileArchive),
  fileSpreadsheet: createIconComponent(LucideIcons.FileSpreadsheet),
  headphones: createIconComponent(LucideIcons.Headphones),
  gitBranch: createIconComponent(LucideIcons.GitBranch),
  globe: createIconComponent(LucideIcons.Globe),
  layers: createIconComponent(LucideIcons.Layers),
  variable: createIconComponent(LucideIcons.Variable),
  moreVertical: createIconComponent(LucideIcons.MoreVertical),
  more: createIconComponent(LucideIcons.MoreHorizontal),
  moreHorizontal: createIconComponent(LucideIcons.MoreHorizontal),
  share: createIconComponent(LucideIcons.Share2),
  calendar: createIconComponent(LucideIcons.Calendar),
  folder: createIconComponent(LucideIcons.Folder),
  refreshCcw: createIconComponent(LucideIcons.RefreshCcw),
  info: createIconComponent(LucideIcons.Info),
  checkCircle: createIconComponent(LucideIcons.CheckCircle),
  zap: createIconComponent(LucideIcons.Zap),
  play: createIconComponent(LucideIcons.Play),
  playCircle: createIconComponent(LucideIcons.PlayCircle),
  add: createIconComponent(LucideIcons.Plus),
  arrowUpRight: createIconComponent(LucideIcons.ArrowUpRight),
  arrowUp: createIconComponent(LucideIcons.ArrowUp),
  arrowDown: createIconComponent(LucideIcons.ArrowDown),
  bell: createIconComponent(LucideIcons.Bell),
  billing: createIconComponent(LucideIcons.CreditCard),
  list: createIconComponent(LucideIcons.List),
  bookOpen: createIconComponent(LucideIcons.BookOpen),
  chevronFirst: createIconComponent(LucideIcons.ChevronFirst),
  chevronLast: createIconComponent(LucideIcons.ChevronLast),
  chevronLeft: createIconComponent(LucideIcons.ChevronLeft),
  chevronRight: createIconComponent(LucideIcons.ChevronRight),
  chevronUp: createIconComponent(LucideIcons.ChevronUp),
  chevronDown: createIconComponent(LucideIcons.ChevronDown),
  chevronsUpDown: createIconComponent(LucideIcons.ChevronsUpDown),
  check: createIconComponent(LucideIcons.Check),
  circleAlert: createIconComponent(LucideIcons.CircleAlert),
  circleX: createIconComponent(LucideIcons.CircleX),
  close: createIconComponent(LucideIcons.X),
  code: createIconComponent(LucideIcons.Code),
  columns3: createIconComponent(LucideIcons.Columns3),
  copy: createIconComponent(LucideIcons.Copy),
  dashboard: createIconComponent(LucideIcons.LayoutPanelLeft),
  download: createIconComponent(LucideIcons.Download),
  edit: createIconComponent(LucideIcons.Edit),
  ellipsis: createIconComponent(LucideIcons.Ellipsis),
  externalLink: createIconComponent(LucideIcons.ExternalLink),
  eye: createIconComponent(LucideIcons.Eye),
  filter: createIconComponent(LucideIcons.Filter),
  listFilter: createIconComponent(LucideIcons.ListFilter),
  repeat: createIconComponent(LucideIcons.Repeat),
  square: createIconComponent(LucideIcons.Square),
  tag: createIconComponent(LucideIcons.Tag),
  bot: createIconComponent(LucideIcons.Bot),
  book: createIconComponent(LucideIcons.Book),
  appWindow: createIconComponent(LucideIcons.AppWindow),
  thumbsUp: createIconComponent(LucideIcons.ThumbsUp),
  thumbsDown: createIconComponent(LucideIcons.ThumbsDown),
  messageSquare: createIconComponent(LucideIcons.MessageSquare),
  bookmark: createIconComponent(LucideIcons.Bookmark),
  flag: createIconComponent(LucideIcons.Flag),
  stopCircle: createIconComponent(LucideIcons.StopCircle),
  circleHelp: createIconComponent(LucideIcons.CircleHelp),
  home: createIconComponent(LucideIcons.Home),
  laptop: createIconComponent(LucideIcons.Laptop),
  lineChart: createIconComponent(LucideIcons.LineChart),
  puzzle: createIconComponent(LucideIcons.Puzzle),
  languages: createIconComponent(LucideIcons.Languages),
  image: createIconComponent(LucideIcons.Image),
  messages: createIconComponent(LucideIcons.MessagesSquare),
  moon: createIconComponent(LucideIcons.Moon),
  package: createIconComponent(LucideIcons.Package),
  file: createIconComponent(LucideIcons.File),
  plus: createIconComponent(LucideIcons.Plus),
  fileText: createIconComponent(LucideIcons.FileText),
  search: createIconComponent(LucideIcons.Search),
  settings: createIconComponent(LucideIcons.Settings),
  settings2: createIconComponent(LucideIcons.Settings2),
  shield: createIconComponent(LucideIcons.Shield),
  spinner: createIconComponent(LucideIcons.Loader2),
  sun: createIconComponent(LucideIcons.SunMedium),
  trash: createIconComponent(LucideIcons.Trash),
  upload: createIconComponent(LucideIcons.Upload),
  user: createIconComponent(LucideIcons.User),
  users: createIconComponent(LucideIcons.Users),
  alertTriangle: createIconComponent(LucideIcons.AlertTriangle),
  sidebar: createIconComponent(LucideIcons.PanelRightClose),
  store: createIconComponent(LucideIcons.Store),

  // Iconify icons
  discord: createIconComponent("akar-icons:discord-fill"),
  twitter: createIconComponent("akar-icons:twitter-fill"),
  tiktok: createIconComponent("akar-icons:tiktok-fill"),
  instagram: createIconComponent("akar-icons:instagram-fill"),
  youtube: createIconComponent("akar-icons:youtube-fill"),
  linkedin: createIconComponent("akar-icons:linkedin-fill"),
  wechat: createIconComponent("ic:baseline-wechat"),
  aiSearch: createIconComponent("mingcute:search-ai-line"),

  docPdf: createIconComponent("flowbite:file-pdf-solid"),
  docDoc: createIconComponent("mdi:file-word"),
  docDocx: createIconComponent("mdi:file-word"),
  docPpt: createIconComponent("mdi:file-powerpoint"),
  docPptx: createIconComponent("mdi:file-powerpoint"),
  docXls: createIconComponent("mdi:file-excel"),
  docXlsx: createIconComponent("mdi:file-excel"),
  docTxt: createIconComponent("bxs:file-txt"),
  docHtm: createIconComponent("flowbite:file-code-solid"),
  docHtml: createIconComponent("flowbite:file-code-solid"),
  docMd: createIconComponent("ph:file-md-fill"),
  docCsv: createIconComponent("flowbite:file-csv-solid"),
  docCode: createIconComponent("flowbite:file-code-solid"),
  dice: createIconComponent(LucideIcons.Dice6),

  // Material Symbols icons for option B
  thumbUpOutline: createIconComponent("material-symbols:thumb-up-outline"),
  thumbUp: createIconComponent("material-symbols:thumb-up"),
  thumbDownOutline: createIconComponent("material-symbols:thumb-down-outline"),
  thumbDown: createIconComponent("material-symbols:thumb-down"),
} as const;
