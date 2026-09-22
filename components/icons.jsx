import {
  ShieldCheck,
  Workflow,
  Award,
  Network,
  FlaskConical,
  Smartphone,
  Sliders,
  FileText,
  BarChart3,
  Bug,
  Terminal,
  Compass,
  Hand,
  Bot,
  Flame,
  CheckCheck,
  History,
  UserCheck,
  Users,
  Globe2,
  Boxes,
  Layout,
  Activity,
  ZapOff,
  Lock,
  Eye,
  Clock,
  TrendingUp,
  RefreshCw,
  HardDrive,
  Maximize2,
  CheckCircle2,
  Search,
  Dices,
  Sparkles,
  AlertTriangle,
  Check,
  Languages,
  Dna,
  Target,
  Server,
  Radio,
  Layers,
  Cable,
  Repeat,
  Key,
  Globe,
  Cpu,
  Monitor,
  Database,
  Zap
} from 'lucide-react'

function createIcon(Component, color, bg) {
  return function QAIcon({ size = 18 }) {
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          backgroundColor: bg,
          color: color,
          flexShrink: 0
        }}
      >
        <Component size={size} strokeWidth={2} />
      </span>
    )
  }
}

// 1. Asosiy bo'limlar (Core Sections)
export const SoftwareTestingIcon = createIcon(ShieldCheck, '#0284c7', 'rgba(2, 132, 199, 0.12)')
export const SdlcIcon = createIcon(Workflow, '#6366f1', 'rgba(99, 102, 241, 0.12)')
export const IstqbIcon = createIcon(Award, '#d97706', 'rgba(217, 119, 6, 0.12)')
export const NetworkIcon = createIcon(Network, '#0d9488', 'rgba(13, 148, 136, 0.12)')
export const TestTypesIcon = createIcon(FlaskConical, '#9333ea', 'rgba(147, 51, 234, 0.12)')
export const MobileTestingIcon = createIcon(Smartphone, '#e11d48', 'rgba(225, 29, 72, 0.12)')
export const TestTechniquesIcon = createIcon(Sliders, '#2563eb', 'rgba(37, 99, 235, 0.12)')
export const TestDocsIcon = createIcon(FileText, '#059669', 'rgba(5, 150, 105, 0.12)')
export const TestManagementIcon = createIcon(BarChart3, '#7c3aed', 'rgba(124, 58, 237, 0.12)')
export const BugTrackingIcon = createIcon(Bug, '#dc2626', 'rgba(220, 38, 38, 0.12)')
export const ToolsIcon = createIcon(Terminal, '#475569', 'rgba(71, 85, 105, 0.12)')
export const RoadmapIcon = createIcon(Compass, '#0891b2', 'rgba(8, 145, 178, 0.12)')

// 2. Sinov turlari (Testing Types)
export const ManualTestIcon = createIcon(Hand, '#0284c7', 'rgba(2, 132, 199, 0.12)')
export const AutomationTestIcon = createIcon(Bot, '#6366f1', 'rgba(99, 102, 241, 0.12)')
export const SmokeTestIcon = createIcon(Flame, '#f97316', 'rgba(249, 115, 22, 0.12)')
export const SanityTestIcon = createIcon(CheckCheck, '#10b981', 'rgba(16, 185, 129, 0.12)')
export const RegressionTestIcon = createIcon(History, '#8b5cf6', 'rgba(139, 92, 246, 0.12)')
export const AcceptanceTestIcon = createIcon(UserCheck, '#059669', 'rgba(5, 150, 105, 0.12)')
export const AlphaTestIcon = createIcon(Users, '#2563eb', 'rgba(37, 99, 235, 0.12)')
export const BetaTestIcon = createIcon(Globe2, '#0d9488', 'rgba(13, 148, 136, 0.12)')
export const ComponentTestIcon = createIcon(Boxes, '#d97706', 'rgba(217, 119, 6, 0.12)')
export const GuiTestIcon = createIcon(Layout, '#ec4899', 'rgba(236, 72, 153, 0.12)')
export const LoadTestIcon = createIcon(Activity, '#0284c7', 'rgba(2, 132, 199, 0.12)')
export const StressTestIcon = createIcon(ZapOff, '#ef4444', 'rgba(239, 68, 68, 0.12)')
export const SecurityTestIcon = createIcon(Lock, '#dc2626', 'rgba(220, 38, 38, 0.12)')
export const AccessibilityTestIcon = createIcon(Eye, '#06b6d4', 'rgba(6, 182, 212, 0.12)')
export const EnduranceTestIcon = createIcon(Clock, '#64748b', 'rgba(100, 116, 139, 0.12)')
export const SpikeTestIcon = createIcon(TrendingUp, '#f59e0b', 'rgba(245, 158, 11, 0.12)')
export const RecoveryTestIcon = createIcon(RefreshCw, '#10b981', 'rgba(16, 185, 129, 0.12)')
export const VolumeTestIcon = createIcon(HardDrive, '#475569', 'rgba(71, 85, 105, 0.12)')
export const ScalabilityTestIcon = createIcon(Maximize2, '#8b5cf6', 'rgba(139, 92, 246, 0.12)')
export const ReliabilityTestIcon = createIcon(CheckCircle2, '#059669', 'rgba(5, 150, 105, 0.12)')
export const ExploratoryTestIcon = createIcon(Search, '#2563eb', 'rgba(37, 99, 235, 0.12)')
export const AdhocTestIcon = createIcon(Dices, '#f97316', 'rgba(249, 115, 22, 0.12)')
export const MonkeyTestIcon = createIcon(Sparkles, '#ec4899', 'rgba(236, 72, 153, 0.12)')
export const NegativeTestIcon = createIcon(AlertTriangle, '#ef4444', 'rgba(239, 68, 68, 0.12)')
export const PositiveTestIcon = createIcon(Check, '#10b981', 'rgba(16, 185, 129, 0.12)')
export const GlobalizationTestIcon = createIcon(Languages, '#0d9488', 'rgba(13, 148, 136, 0.12)')
export const MutationTestIcon = createIcon(Dna, '#a855f7', 'rgba(168, 85, 247, 0.12)')
export const StrategyTestIcon = createIcon(Target, '#e11d48', 'rgba(225, 29, 72, 0.12)')

// 3. Tarmoqlar (Networks)
export const ClientServerIcon = createIcon(Server, '#0284c7', 'rgba(2, 132, 199, 0.12)')
export const HttpIcon = createIcon(Radio, '#6366f1', 'rgba(99, 102, 241, 0.12)')
export const OsiIcon = createIcon(Layers, '#8b5cf6', 'rgba(139, 92, 246, 0.12)')
export const ApiIcon = createIcon(Cable, '#0d9488', 'rgba(13, 148, 136, 0.12)')
export const MicroservicesIcon = createIcon(Boxes, '#d97706', 'rgba(217, 119, 6, 0.12)')
export const CacheIcon = createIcon(Zap, '#f59e0b', 'rgba(245, 158, 11, 0.12)')
export const StorageIcon = createIcon(HardDrive, '#475569', 'rgba(71, 85, 105, 0.12)')
export const WebSocketIcon = createIcon(Repeat, '#10b981', 'rgba(16, 185, 129, 0.12)')
export const AuthIcon = createIcon(Key, '#dc2626', 'rgba(220, 38, 38, 0.12)')
export const ResourceIcon = createIcon(Globe, '#2563eb', 'rgba(37, 99, 235, 0.12)')
export const WebServiceIcon = createIcon(Cpu, '#7c3aed', 'rgba(124, 58, 237, 0.12)')
export const RenderingIcon = createIcon(Monitor, '#ec4899', 'rgba(236, 72, 153, 0.12)')
export const DatabaseIcon = createIcon(Database, '#059669', 'rgba(5, 150, 105, 0.12)')
