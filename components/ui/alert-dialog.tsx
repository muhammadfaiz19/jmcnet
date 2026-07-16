"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Warning, Trash, X } from "@phosphor-icons/react";

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  variant?: "danger" | "warning";
}

export function AlertDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Hapus",
  cancelText = "Batal",
  isLoading = false,
  variant = "danger",
}: AlertDialogProps) {
  // Menutup modal dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isLoading) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isLoading, onClose]);

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isLoading) {
      onClose();
    }
  };

  const isDanger = variant === "danger";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleOverlayClick}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Dialog Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-md bg-white rounded-[2rem] border border-slate-100 shadow-2xl overflow-hidden z-10 flex flex-col p-6"
          >
            {/* Close Button */}
            {!isLoading && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all cursor-pointer"
                aria-label="Tutup"
              >
                <X size={16} weight="bold" />
              </button>
            )}

            <div className="flex flex-col items-center text-center mt-2">
              {/* Icon Container */}
              <div
                className={`p-4 rounded-2xl mb-4 ${
                  isDanger
                    ? "bg-red-50 text-red-500 ring-4 ring-red-50/50"
                    : "bg-amber-50 text-amber-500 ring-4 ring-amber-50/50"
                }`}
              >
                {isDanger ? (
                  <Trash size={28} weight="duotone" className="animate-pulse" />
                ) : (
                  <Warning size={28} weight="duotone" className="animate-pulse" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-slate-900 leading-snug px-2">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-sm">
                {description}
              </p>
            </div>

            {/* Actions Footer */}
            <div className="mt-6 flex flex-col-reverse sm:flex-row gap-2.5 sm:gap-2">
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="w-full sm:flex-1 px-4 py-3 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 font-bold text-sm rounded-2xl transition-all cursor-pointer"
              >
                {cancelText}
              </button>
              <button
                type="button"
                onClick={onConfirm}
                disabled={isLoading}
                className={`w-full sm:flex-1 px-4 py-3 font-bold text-sm rounded-2xl text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-500/10 ${
                  isDanger
                    ? "bg-red-500 hover:bg-red-600 active:scale-95 disabled:bg-red-300"
                    : "bg-amber-500 hover:bg-amber-600 active:scale-95 disabled:bg-amber-300"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Memproses...</span>
                  </>
                ) : (
                  <span>{confirmText}</span>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
