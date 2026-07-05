"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export interface ActionProps {
  label: string;
  href: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export interface CtaCardSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions: ActionProps[];
  bgClassName?: string;
}

export function CtaCardSection({
  eyebrow = "Langkah Selanjutnya",
  title,
  description,
  actions,
  bgClassName = "py-24 bg-white relative border-t border-slate-100",
}: CtaCardSectionProps) {
  return (
    <section className={bgClassName}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-900 via-brand-dark to-slate-950 rounded-3xl p-10 md:p-16 text-white grid gap-8 lg:grid-cols-12 items-center relative overflow-hidden shadow-2xl border border-slate-800/80">
          {/* Ambient background glows for high-end luxury feel */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-brand-light/15 blur-[120px] -top-32 -right-32 pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-dark/30 blur-[100px] -bottom-24 -left-24 pointer-events-none" />

          {/* Left / Main Text Content */}
          <div className="lg:col-span-7 space-y-4 relative z-10">
            {eyebrow && (
              <span className="text-xs font-mono font-bold tracking-widest text-brand-light uppercase block">
                {eyebrow}
              </span>
            )}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
              {title}
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {/* Right / Actions Column */}
          <div className="lg:col-span-5 flex flex-wrap gap-3.5 justify-start lg:justify-end relative z-10">
            {actions.map((action, idx) => {
              const variant = action.variant || (idx === 0 ? "primary" : "secondary");

              let buttonStyle =
                "inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl px-7 text-sm font-bold transition-all active:scale-[0.98] shadow-lg";

              if (variant === "primary") {
                buttonStyle +=
                  " bg-white text-slate-900 hover:bg-slate-100 shadow-black/20";
              } else if (variant === "secondary") {
                buttonStyle +=
                  " bg-slate-800/90 text-white hover:bg-slate-700/90 border border-slate-700/80";
              } else if (variant === "outline") {
                buttonStyle +=
                  " bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20";
              }

              const content = (
                <>
                  {action.icon}
                  <span>{action.label}</span>
                  {!action.icon && variant === "primary" && (
                    <ArrowRight size={18} weight="bold" className="text-brand-dark" />
                  )}
                </>
              );

              if (action.isExternal || action.href.startsWith("http")) {
                return (
                  <a
                    key={idx}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyle}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link key={idx} href={action.href} className={buttonStyle}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
