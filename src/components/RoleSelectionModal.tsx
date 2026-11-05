import React from 'react';
import {
  User,
  Building2,
  CheckCircle2,
  Shield,
  Award,
  Camera,
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { UserProfile, UserRole } from '../types';

interface RoleSelectionModalProps {
  isOpen: boolean;
  userEmail?: string;
  onSelectRole: (role: UserRole) => void;
}

export const RoleSelectionModal: React.FC<RoleSelectionModalProps> = ({
  isOpen,
  userEmail,
  onSelectRole,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome to NagarNet Civic OS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display-brand">
            Are you a Citizen or Government Official?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            {userEmail ? (
              <span>
                Authenticated as <strong className="text-white">{userEmail}</strong>. Please select your official role to configure your permissions and workspace.
              </span>
            ) : (
              'Please select your identity to access the appropriate municipal tools and features.'
            )}
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Option 1: Citizen */}
          <div className="group relative flex flex-col justify-between p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800/90 transition-all duration-200 shadow-sm hover:shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700/60 flex items-center justify-center text-blue-600 dark:text-blue-300">
                <User className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Public Resident
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                  Citizen
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Report civic problems, track 72h resolution countdowns, and unlock exclusive citizen rewards.
                </p>
              </div>

              {/* What Citizen Can Do */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Report road hazards, garbage & leaks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>
                    <strong>Access Citizen Perks:</strong> Rewards & points
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Verify and sign off on completed repairs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-[11px]">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Cannot access internal official tools</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectRole('citizen')}
              className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Continue as Citizen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Option 2: Government Official */}
          <div className="group relative flex flex-col justify-between p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-400 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800/90 transition-all duration-200 shadow-sm hover:shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/50 border border-amber-200 dark:border-amber-700/60 flex items-center justify-center text-amber-600 dark:text-amber-300">
                <Building2 className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Municipal Administration
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                  Government Official
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  GVMC Ward Officer / Field Engineer assigned to inspect tickets and upload finished photos.
                </p>
              </div>

              {/* What Government Official Can Do */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Inspect ward complaints & triage SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>
                    <strong>Upload Finished Photos:</strong> Proof-of-work
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Update ticket status to In Progress / Resolved</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-[11px]">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Cannot access citizen perks or rewards</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectRole('officer')}
              className="mt-6 w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Continue as Government Official</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span>You can switch your active role later via the Settings menu.</span>
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Greater Visakhapatnam Municipal Corporation (GVMC)
          </span>
        </div>
      </div>
    </div>
  );
};
